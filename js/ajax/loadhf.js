/**1:为每个“添加到购物车”超链接绑定单击事件监听**/
var loginUname = null; // 当前登录的用户名
var loginUid = null; // 当前登录的用户编码

// 读取页面上的Cookie 数据
var arr = document.cookie.split('; '); // 先将整串数据以 ;+空格 拆分
var cookieData = {};
for(var i = 0 ;i<arr.length;i++){
  var kv = arr[i]; // 每个数组是 k=v 的形式
  var pair = kv.split('='); // 再根据 = 拆分
  cookieData[pair[0]] = pair[1];
}
loginUid = cookieData['LoginUserId'];
loginUname = cookieData['LoginUserName'];

/**2:加载头部**/
$('#header').load('data/header.php',function(){
  /*为头部导航条添加事件*/
  var navTab = $('.nav_list li');
  var itemClass = $('.header_nav .item_class');
  var navAllProducts = $('.item_class_nav dl');
  var navProducts = $('.item_class_show');

  /*头部导航条切换*/
  navTab.each(function(index){
    $(this).on('mouseover',function(){
      navTab.eq(index).removeClass('on');
      $(this).addClass('on')
    })
  });
  navTab.each(function(index){
    $(this).on('mouseout',function(){
      $(this).removeClass('on')
    })
  });

  /**全部商品分类**/
  $('.nav_products').click(function(){
    if( itemClass.css('display') == 'none' ){
      itemClass.css('display','block');
    }else if( itemClass.css('display') == 'block' ){
      itemClass.css('display','none')
    }
  });

  /*头部下拉列表切换*/
  navAllProducts.each(function(index){
    $(this).on('mouseover',function(){
      navAllProducts.eq(index).removeClass();
      navProducts.eq(index).css('display','none');
      $(this).addClass('on');
      navProducts.eq(index).css('display','block');
    });
  });

  navAllProducts.each(function(index){
    $(this).on('mouseout',function(){
      navAllProducts.eq(index).addClass('on');
      navProducts.eq(index).css('display','block');

      $(this).removeClass();
      navProducts.eq(index).css('display','none');
    });
  });

  /*弹出的子菜单框*/
  navProducts.each(function(){
    $(this).on('mouseover',function(){
      $(this).css('display','block');
    })
  });
  navProducts.each(function(){
    $(this).on('mouseout',function(){
      $(this).css('display','none');
    })
  });


  if(loginUname && loginUid){
    $('#welcome').html('欢迎回来：'+loginUname);
    $('#free_register').remove();
  }

  /**为 去购物车结算 添加单击事件 跳转到下一页面**/
  $('#header').on('click','#settle_up',function(){

    if(loginUname && loginUid ){
      document.cookie = 'LoginUserId=' + loginUid;
      document.cookie = 'LoginuserName=' + loginUname;
      location.href = 'order.html';
    }else{
      alert('请先登录');
      return
    }
  });

  /**点击搜索按钮实现跨域请求**/
  $('#header').on('keyup','#searchInp',function(){
    if($(this).value != '' ){
      var oscript = document.createElement('script');
      oscript.src = 'http://suggestion.baidu.com/su?wd='+this.value+'&cb=showItem';
      document.body.appendChild(oscript);
    }else{
      $(this).parent().hide();
    }
  })
});

function showItem(data){
  var html = '';
  if(data.s.length){
    $('#search_result').show();
    for(var i = 0 ;i<data.s.length;i++){
      html += '<li><a target="_blank" href="http://www.baidu.com/s?wd='+data.s[i]+'">'+ data.s[i] +'</a></li>';
    }
    $('#search_result').html(html)
  }else{
    $('#search_result').hide();
  }
}

/**加载尾部**/
$('#footer').load('data/footer.php');
