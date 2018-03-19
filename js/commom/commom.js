function pare(obj){
  return obj.parentNode;
}
function next(obj){
  return obj.nextElementSibling
}
function show(obj){
  obj.parentNode.nextElementSibling.style.display = 'block';
}
function hide(obj){
  obj.parentNode.nextElementSibling.style.display = 'none';
}
function tip(obj,text){
  obj.parentNode.nextElementSibling.innerHTML = text;
}

function addClass(obj,cName){
  obj.parentNode.nextElementSibling.className = cName;
}
function removeClass(obj){
  obj.parentNode.nextElementSibling.className = '';
}

function hasClassName(elements,cName){
  return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"))
}

function addClassName(elements,cName){
  if(!hasClassName(elements,cName)){
    elements.className += " " + cName;
  }
}
function removeClassName(elements,cName){
  if(hasClassName(elements,cName)){
    elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" ), " " );
  }
}



function checkName(obj){
  var reEmail = /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;
  var reName = /^[\u4e00-\u9fa5_a-zA-Z0-9]{4,10}$/;
  var rePhone = /^[1][3,4,5,7,8][0-9]{9}$/;

  if( obj.value.length == 0 ){
    show(obj);
    tip(obj,'请输入有效长度用户名')
  }else if(obj.value.length == 11){
    show(obj);
    if(rePhone.test(obj.value)){
      addClass(obj,'succ');
      tip(obj,'手机号输入正确')
    }else{
      addClass(obj,'err');
      tip(obj,'请输入正确的手机号')
    }

  }else if( obj.value.length >=4  && obj.value.length <= 10){
    show(obj);
    if(reName.test(obj.value)){
      addClass(obj,'succ');
      tip(obj,'用户名输入正确')
    }else{
      addClass(obj,'err');
      tip(obj,'用户名的有效长度为5-10位')
    }
  }else if( obj.value.length >= 4  && obj.value.length <= 31 ){
    show(obj);
    if(reEmail.test(obj.value)){
      addClass(obj,'succ');
      tip(obj,'邮箱输入正确')
    }else{
      addClass(obj,'err');
      tip(obj,'请输入正确的邮箱地址')
    }
  }else{
    hide(this)
  }
}
function checkPassword(obj){
  /*[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}*/
  //var rePwd = /^\d{5,}$/;
  if( obj.value == ''){
    show(obj);
    addClass(obj,'err');
    tip(obj,'密码不能为空')
  }/*else if( rePwd.test(obj.value) ){
    show(obj);
    addClass(obj,'err');
    tip(obj,'密码格式不对')
  }*/else{
    hide(obj);
  }
}
function hasCheckBox(obj){
  if(obj.checked){
    obj.value = 1;
  }else{
    obj.value = 0;
  }
}

// 序列化
function former(formId){
  var form = document.getElementById(formId);
  var arr = {};
  for(var i =0;i<form.elements.length;i++){
    var feled = form.elements[i];
    switch (feled.type){
      case  undefined:
      case  'button':
      case  'file':
      case  'reset':
      case  'submit':
        break;
      case 'checkbox':
      case 'radio':
        if(!feled.checked){
          break;
        }
      default :
        if(arr[feled.name]){
          arr[feled.name] = arr[feled.name] + ',' + feled.value;
        }else{
          arr[feled.name] = feled.value;
        }
    }
  }
  return arr;
}
// 判断是否是空数组
function isEmpty(obj){
  for(var name in obj){
    return false;
  }
  return true;
}
// 判断是否是空对象
function isEmptyObject(obj) {
  for (var k in obj)
    if(obj[k]){
     return false
    }
  return true
}

function toDecimal2(x) {
  var f = parseFloat(x);
  if (isNaN(f)) {
    return false;
  }
  var f = Math.round(x*100)/100;
  var s = f.toString();
  var rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return parseFloat(s);
}

/**保留两位小数**/
function fomatFloat(num,pos){
  return Math.round( (Math.round(num*100)/100)*Math.pow(10,pos) )/Math.pow(10,pos)

}



