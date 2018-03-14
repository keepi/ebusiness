(function(){
  var formList = document.querySelector('#form_list');
  var userName = document.querySelector('.username_inp');
  var passWord = document.querySelectorAll('.password_inp');
  var userMail = document.querySelector('.mail_inp');
  var userAddr = document.querySelector('.addr_inp');
  var submitBtn = document.querySelector('.submit');
  var isagree = document.querySelector('input[type=checkbox]');
  var userInfo = {};

  userName.onblur = function(){
    checkName(this);
    userInfo['userName'] = this.value
  };

  passWord[0].onblur = function(){
    checkPassword(this)
  };

  passWord[1].onblur = function(){
    if( this.value == '' ){
      show(this);
      addClass(this,'err');
      tip(this,'再次确认密码不能为空')
    }else if(this.value != passWord[0].value){
      show(this);
      addClass(this,'err');
      tip(this,'两次输入密码不正确')
    }else{
      show(this);
      addClass(this,'succ');
      tip(this,'确认密码正确')
    }
  };

  userMail.onblur = function(){
    var reEmail = /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;
    show(this);
    if(reEmail.test(this.value)){
      addClass(this,'succ');
      tip(this,'邮箱输入正确');
    }else if( this.value == ''){
      addClass(this,'err');
      tip(this,'邮箱地址不能为空');
    }else{
      addClass(this,'err');
      tip(this,'请输入正确的邮箱地址');
    }
  };

  userAddr.onblur = function(){
    var reAddr = /^(?![a-zA-Z\d]+$)[\u4e00-\u9fa5\da-zA-Z]+$/;
    show(this);
    if(reAddr.test(this.value)){
      addClass(this,'succ');
      tip(this,'地址输入正确');
    }else if( this.value == '' ){
      addClass(this,'err');
      tip(this,'地址不能为空');
    }else{
      show(this);
      addClass(this,'err');
      tip(this,'请输入正确的地址');
    }
  };
  submitBtn.onclick = function(){
    // 如果同意协议 而且 表单不为空
    if(isagree.checked && !isEmptyObject(former('form_list'))){
      //获得所有填写的信息
      userInfo = former('form_list');
    }
  }
})();

