// 获取订单编号
var oid = sessionStorage['orderId'];

// 获取订单基本信息
$.ajax({
  type:"GET",
  data:{'oid':oid},
  url:'data/13_show_order.php',
  success:function(list){
    var html = '';
    $.each(list,function(i,p){
      html += `
        <li>付款金额<em>${p.price}</em></li>
          <div class="user-info">
           <p>收货人：${p.rcvName}</p>
           <p>联系电话：${p.phone}</p>
           <p>收货地址：${p.addr}</p>
          </div>
        </li>
      `;
    })
    $('.successInfo ul').html(html);
  },
  error: function () {
    console.log(arguments);
  }
});


















