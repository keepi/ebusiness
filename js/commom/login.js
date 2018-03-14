(function(){
  var userName = document.querySelector('.username_inp');
  var passWord = document.querySelector('.password_inp');
  var submitBtn = document.querySelector('.submit');
  var loginWay = document.querySelectorAll('input[type=checkbox]');
  var autoLogin = document.querySelector('.auto_login');
  var safeLogin = document.querySelector('.safe_login');
  var userInfo = {};

  userName.onblur = function(){
    checkName(this)
  };

  passWord.onblur = function(){
    checkPassword(this)
  };

  submitBtn.onclick = function(){
    if( userName.value == '' && passWord.value == '' ){
      show(this);
      addClass(this,'err');
      tip(this,'请输入用户名或密码')
    }else{
      userInfo['userName'] = userName.value;
      userInfo['passWord'] = passWord.value;
      userInfo['autoLogin'] = autoLogin.value;
      userInfo['safeLogin'] = safeLogin.value;
      hide(this);
    }
    console.log(userInfo);
  };

  for(var i = 0 ; i < loginWay.length ; i++) {
    loginWay[i].onclick = function () {
      hasCheckBox(this)
    }
  }
})();










