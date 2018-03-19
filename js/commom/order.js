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


/**添加地址**/
(function(){
  var createAddr = document.getElementsByClassName('createAddr')[0];
  var modalMask = document.getElementsByClassName('modal_mask')[0];
  var modalContainter = document.getElementsByClassName('modal_containter')[0];
  var cancelBtn = document.getElementById('cancel');
  var saveBtn = document.getElementById('save');
  var helpTxt = document.getElementsByClassName('help_txt')[0];
  var addressUl = document.querySelector('.address ul');
  var userAdress = null;

  function showModal(){
    modalMask.style.display = 'block';
    modalContainter.style.display = 'block';
  }
  function hideModal(){
    modalMask.style.display = 'none';
    modalContainter.style.display = 'none';
  }

  createAddr.onclick = function(){
    showModal()
  };
  cancelBtn.onclick = function(){
    hideModal()
  };
  saveBtn.onclick = function(){
    var html = '';
    userAdress = former('address');
    if(!userAdress['username']){
      helpTxt.innerHTML = '收货人姓名不能为空';
      helpTxt.style.display = 'block';
      return
    }else if(!userAdress['phone']){
      helpTxt.innerHTML = '手机号不能为空';
      helpTxt.style.display = 'block';
      return
    }else if( userAdress['province'] == 0 || userAdress['city'] == 0 || userAdress['area'] == 0 ){
      helpTxt.innerHTML = '请选择省份';
      helpTxt.style.display = 'block';
      return
    }else if( !userAdress['address']){
      helpTxt.innerHTML = '请写详细地址';
      helpTxt.style.display = 'block';
      return
    }else{
      helpTxt.style.display = 'none';
    }
    var newLi = document.createElement('li');
    newLi.className = 'user-addresslist defaultAddr';
    html = `
            <div class="address-left">
              <div class="user DefaultAddr">
                <span class="buy-address-detail">
                <span class="buy-user">${userAdress.username}</span>
                <span class="buy-phone">${userAdress.phone}</span>
                </span>
              </div>
              <div class="default-address DefaultAddr">
                <span class="buy-line-title buy-line-title-type">收货地址：</span>
									<span class="buy--address-detail">
                    <span class="province">${userAdress.province}</span>
                    <span class="city">${userAdress.city}</span>
                    <span class="dist">${userAdress.dist}</span>
                    <span class="street">${userAdress.address}</span>
                  </span>
              </div>
              <ins class="deftip">默认地址</ins>
            </div>
            <div class="address-right">
              <a href="javscript:;">
              <span class="am-icon-angle-right am-icon-lg"></span></a>
            </div>
            <div class="clear"></div>

            <div class="new-addr-btn">
              <a href="#" class="hidden">设为默认</a>
              <span class="new-addr-bar hidden">|</span>
              <a href="#">编辑</a>
              <span class="new-addr-bar">|</span>
              <a href="javascript:void(0);">删除</a>
            </div>

    `;
    newLi.innerHTML = html;
    addressUl.appendChild(newLi);
    hideModal()
  };
})();

/**获取地址、付款方式**/

var order = {};
(function(){
  var defaultAddr = document.getElementsByClassName('defaultAddr')[0];
  var expressWay = document.querySelector('.op_express_delivery_hot .selected');
  var payWay = document.querySelector('.pay-list .selected');

  var buyUser = null ;
  var buyPhone = null;
  var deitalAddr = null;
  var expressment = null;
  var payment = null;
  var orderTime = null;

  if( defaultAddr ){
    buyUser = defaultAddr.querySelector('.buy-user').innerHTML;
    buyPhone = defaultAddr.querySelector('.buy-phone').innerHTML;
    deitalAddr = defaultAddr.querySelector('.province').innerHTML + defaultAddr.querySelector('.city').innerHTML + defaultAddr.querySelector('.dist').innerHTML + defaultAddr.querySelector('.street').innerHTML ;
    expressment = expressWay.getAttribute('data-value');
    payment = payWay.getAttribute('value');
    orderTime = new Date().getTime();
    order['rcvName'] = buyUser;
    order['rcvPhone'] = buyPhone;
    order['addr'] = deitalAddr;
    order['expressment'] = expressment;
    order['payment'] = payment;
    order['orderTime'] = orderTime;
  }

})();




























