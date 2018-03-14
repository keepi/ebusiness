/**选择物流和支付方式**/
(function(){
  var chooseExpress = document.querySelectorAll('.op_express_delivery_hot li');
  var choosePay = document.querySelectorAll('.pay-list li');
  for(var i = 0 ; i < chooseExpress.length ; i++ ){
    chooseExpress[i].onclick = function(){
      tabWay(this,chooseExpress)
    }
  }

  for(var i = 0 ; i < choosePay.length ; i++){
    choosePay[i].onclick = function(){
      tabWay(this,choosePay)
    }
  }

  function tabWay(clicked,obj){
    for(var i = 0;i<obj.length;i++){
      removeClassName(obj[i],'selected')
    }
    addClassName(clicked,'selected');
  }
})();

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
    console.log( ( price.eq(index).html()));
    subTotal.eq(index).html( (parseFloat(price.eq(index).html()) * parseFloat(count.eq(index).val())).toFixed(2) )
    getTotal();
  })
})
reduceBtn.each(function(index){
  $(this).on('click',function(){
    if( $(this).next().val() > 1){
      $(this).next().val(parseInt($(this).next().val()) - 1);
      subTotal.eq(index).html( ( parseFloat(price.eq(index).html()) * parseFloat(count.eq(index).val())).toFixed(2) )
      getTotal();
    }
  })
});

/**删除**/

$('.del').each(function(index){
  $(this).on('click',function(){
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






























