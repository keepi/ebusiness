$('#header').load('data/header.php',function(){
  if(loginUname && loginUid){
    $('#welcome').html('欢迎回来：'+loginUname);
    $('#free_register').remove();
    $('.header_nav').remove();
    $('#settle_up').remove()
  }
});
$('#footer').load('data/footer.php');


/**1：读取上一页面共享的Cookie数据**/
var arr = document.cookie.split('; ');
var cookieData = {};
for(var i=0; i<arr.length; i++){
  var kv = arr[i];
  var pair = kv.split('=');
  cookieData[pair[0]] = pair[1];
}
var loginUid = cookieData['LoginUserId'];
var loginUname = cookieData['LoginUserName'];


/**2:页面加载完成后，异步请求当前登录用户的购物车**/
$.ajax({
  type:'GET',
  url:'data/6_product_cart_select.php',
  data:{uid:loginUid},
  success:function(list){
    var html = '';
    $.each(list,function(i,p){
      html += `
        <tr>
          <td>
            <input type="checkbox" checked/>
            <input type="hidden" value="${p.pid}" />
            <div><img src="${p.pic}"" alt=""/></div>
          </td>
          <td><a href="javarscript:;">${p.pname}</a></td>
          <td class="price">${p.price}</td>
          <td>
            <button class="reduce">-</button><input class="count" type="text" value="${p.count}"/><button class="add">+</button>
          </td>
          <td><span class="subTotal">${ parseFloat(p.price * p.count)}</span></td>
          <td><a href="javarscript:;" class="del">删除</a></td>
        </tr>
      `
    });
    $('#cart-table-tbody').html(html);
  },
  complete:function(){
    /**选择**/
    var checkboxSingle = $("#cart-table-tbody").find('input[type=checkbox]');
    var singleLen = checkboxSingle.length;

    $('#selAll').click(function(){
      for(var i = 0 ; i < singleLen ; i++ ){
        if(this.checked) {
          checkboxSingle[i].checked = true;
        }else{
          checkboxSingle[i].checked = false;
        }
      }
    });

    checkboxSingle.each(function(){
      $(this).on('click',function(){
        if( !this.checked ){
          $('#selAll').attr('checked',false);
        }else{
          var n = 0 ;
          checkboxSingle.each(function(index){
            if (checkboxSingle[index].checked) {
              n++;
            }
            if( n == singleLen){
              $('#selAll').attr('checked',true);
            }
          });
        }
      })
    });

    /**加减商品**/
    var addBtn = $('.add');
    var reduceBtn = $('.reduce');

    var price = $('.price');
    var count = $('.count');
    var subTotal = $('.subTotal');

    addBtn.each(function(index){
      $(this).on('click',function(){
        $(this).prev().val(parseInt($(this).prev().val()) + 1);
        subTotal.eq(index).html( ( parseFloat(price.eq(index).html()) * parseFloat(count.eq(index).val())).toFixed(2) );
        getTotal();
      })
    });
    reduceBtn.each(function(index){
      $(this).on('click',function(){
        if( $(this).next().val() > 1){
          $(this).next().val(parseInt($(this).next().val()) - 1);
          subTotal.eq(index).html( ( parseFloat(price.eq(index).html()) * parseFloat(count.eq(index).val())).toFixed(2) );
          getTotal();
        }
      })
    });

    /**删除**/
    $('.del').each(function(index){
      $(this).on('click',function(){
        getTotal();
        $('#cart-table-tbody tr').eq(index).remove();
      })
    });

    /**合计**/
    function getTotal(){
      var total = null ;
      for(var i = 0 ; i < subTotal.length ; i ++ ){
        total += parseFloat(subTotal.eq(i).html())
      }
      $('#ActualFee').html(total.toFixed(2))
    }
    getTotal();

    /**3:点击提交按钮获取信息**/
    $('#J_Go').click(function(){
      // 获得 用户订单信息表 和 订单详情表 所需要的所有
      var productInfo = [];
      order['userId'] = loginUid;
      order['price'] = $('#ActualFee').html();
      for(var i = 0 ; i < singleLen ; i++ ){
        productInfo[i] = {'pid':checkboxSingle.eq(i).next().val(),'count':count.eq(i).val()}
      }
      order['productInfo'] = productInfo;
      sessionStorage['orderList'] = order;
      console.log(order);
      // 将数据发送给后台
      $.ajax({
        type:'POST',
        url:'data/12_order.php',
        data:order,
        success:function(list){
          if(list.code==1){
            sessionStorage['orderId'] = list.orderId;
            location.href = 'success.html'
          }else{
            alert('下单失败'+list.msg);
          }
        },
        error:function(){
          console.log(arguments);
        }
      })
    })
  },
  error:function(){
    console.log(arguments)
  }
});






