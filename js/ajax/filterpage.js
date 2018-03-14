/**1:页面加载完后，异步请求页头和页尾**/

/**2:异步请求商品列表**/
var currPage = 1; //当前页
var recordCount,pageSize,pageCount; // 总数 每页显示数 总页数

loadProductByPage(1);
function loadProductByPage(page){
  $.ajax({
    type:'GET',
    url:'data/5_product_filterpage.php',
    data:{pageNum:page},
    success:function(list){

      recordCount = list.recordCount; // 总数
      pageSize = list.pageSize; // 每页显示条数
      pageCount = list.pageCount; // 总页数
      currPage = list.pageNum ;// 当前页
      // 遍历数据中的产品内容 生产列表
      $('.total_goods').html(recordCount);

      var html = '';
      $.each(list.data,function(i,p){
        html += `
          <dl>
            <dt class="pro_img">
              <a href="show_product_detail.php?pid=${p.pid}"><img src="${p.pic}" alt=""/></a>
              <i class="icon"></i>
            </dt>
            <dd class="info">
              <a href="javascript:;">${p.pname}</a>
            </dd>
            <dd class="info_price">
              <span class="price">￥${p.price}</span>&nbsp;
                <span class="comment">
                  <a href="javascript:;">4886</a>评论
                </span>
            </dd>
            <a class="add_cart" href="${p.pid}">
              <i class="cart_icon"></i>
              加入购物车
            </a>
          </dl>
        `;
      });
      $('.choose_list').html(html);
    },
    complete:function(){
      getPageBar();
    },
    error:function(){
      console.log('产品列表响应完成但有问题')
    }
  })
}

/**3:实现分页**/
$('#pager').on('click','span a',function(){
  var rel = $(this).attr('rel');
  if(rel){
    loadProductByPage(rel);
  }
});

// 生成分页条
function getPageBar(){
  $('#pager').find('*').remove();
  var pageStr = '';
  // 如果 当前页>总页数
  if(currPage > pageCount) currPage = pageCount;
  // 如果 当前页<1
  if(currPage < 1) currPage = 1;
  pageStr = `<span>共 ${recordCount} 条</span><span> ${currPage}/${pageCount} </span>`;

  // 如果是第一页
  if(currPage == 1){
    pageStr += `<span> 首页 </span><span> 上一页 </span>`;
  }else{
    pageStr += `<span><a href="javascript:;void(0)" rel="1"> 首页 </a></span><span><a href="javascript:void(0)" rel="${currPage-1}"> 上一页 </a></span>`;
  }

  // 如果是最后一页
  if(currPage >= pageCount ){
    pageStr += `<span> 下一页 </span><span> 尾页 </span>`;
  }else{
    pageStr +=`<span><a href="javascript:void(0)" rel="${parseInt(currPage)+1}"> 下一页 </a></span><span><a href="javascript:void(0) rel=${pageCount}"> 尾页 </a></span>`
  }

  $('#pager').append(pageStr);
}

// 异步请求，实现添加到购物车
$('.choose_list').on('click','a.add_cart',function(e){
  e.preventDefault();
  var pid = $(this).attr('href');
  if(loginUname && loginUid ){
    $.ajax({
      type:'POST',
      url:'data/9_cart_product_add.php',
      data:{uid:loginUid,pid:pid},
      success:function(result){
        console.log(result)
        if( result.code === 1 ){
          alert('商品已成功添加到购物车！该商品已购买的数量:'+result.count);
        }else{
          alert('添加失败！错误信息:'+result.msg)
        }
      }
    })
  }else{
    alert('请先登录');
    location.href = 'login.html';
  }
});










