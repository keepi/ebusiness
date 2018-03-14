/**1：点击加入购物车**/
$('a.add_cart').click(function(e){
  e.preventDefault();
  var pid = $(".show_info").attr('ref');
  if(loginUname && loginUid ){
    $.ajax({
      type:'POST',
      url:'data/9_cart_product_add.php',
      data:{uid:loginUid,pid:pid},
      success:function(result){
        console.log(result);
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









