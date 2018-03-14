$('#footer').load('data/footer.php');

/*1:为登录按钮绑定事件监听，实现异步的用户登录*/
/*var loginUname = null; // 当前登录的用户名
var loginUid = null; // 当前登录的用户编号*/
$('#bt_login').click(function(){
    var data = $('#form_login').serialize();
    $.ajax({
      type:'POST',
      url:'data/7_login.php?',
      data: data,
      success:function(result){
        if(result.code === 3 ){
          alert(result.msg);
          return
        }
        if(result.code === 2){
          alert(result.msg);
          return
        }
        loginUname = $("input[name='uname']").val();
        loginUid = result.uid;
        console.log(loginUname);

        document.cookie = 'LoginUserName=' + loginUname;
        document.cookie = 'LoginUserId=' + loginUid;
        location.href = 'filterpage.html';
      },
      error:function(){

        console.log('响应完成但有问题：');
        console.log(arguments);
      }
    });

});











