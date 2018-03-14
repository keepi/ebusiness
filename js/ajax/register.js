$('#footer').load('data/footer.php');

/*var uname = $('input[name=uname]').value;
console.log()*/

/**1:实现注册**/
$('#isAgree').click(function(){
    this.checked ? this.value =1 : this.value = 0;
  }
);

$('#bt_register').click(function(){

   // 将序列化数据中的再次确认密码内容 利用正则删除
    var re = new RegExp("&pwda=.*?&");
    var data = $('#form_list').serialize();
    data = data.replace(re,'&');

    if( $('#isAgree').attr('value') == 0 ){
      alert('是否阅读并同意《用户注册协议》?');
      return
    }

    $.ajax({
      type:"POST",
      url:"data/8_register.php",
      data:data,
      success:function(result){
        if(result.code === 1 ){
          loginUname = $("input[name='uname']").val();
          loginUid = result.uid;

          document.cookie = 'LoginUserName=' + loginUname;
          document.cookie = 'LoginUserId=' + loginUid;
          location.href = 'filterpage.html';
          alert(result.msg);
        }
      },
      error:function(){
        console.log('响应成功但有问题:');
        console.log(arguments);
      }
    })
});