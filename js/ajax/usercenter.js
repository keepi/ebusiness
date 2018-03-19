
/***1:获取订单基本信息****/
$.ajax({
  type:"GET",
  data:{'uid':loginUid},
  url:'data/14_myorder.php',
  success:function(list){
    var html = '';
    $.each(list,function(i,p){
      html += `
        <tr>
          <td colspan="6">订单编号：${p.oid}</td>
        </tr>
        <tr>
          <td>
          `;
          $.each(p.productList,function(j,q){
            html += `
              <a href="#"><img src="${q.pic}"></a>
            `;
          });
      html +=`
          </td>
          <td>${p.rcvName}</td>
          <td>￥${p.price}<br><span class="expressment">${p.expressment}</span></td>
          <td><span class="orderTime">${p.orderTime}</span></td>
          <td><span class="payment">${p.payment}</span></td>
          <td>
            <a href="#">查看</a><br>
            <a href="#">晒单</a>
            <a href="#">评价</a><br>
            <a href="#">还要买</a><br>
          </td>
        </tr>
      `;
    });

    $('#table-order tbody').html(html);
    formatExpressMent();
    formatPayMent();
    formateTime();
  },
  error: function () {
    console.log(arguments);
  }
});

// 格式 付款方式
function formatPayMent(){
  $('#table-order .payment').each(function(){
    var p = $(this).html();
    switch (p){
      case '1':
        p = '银联';
        break;
      case '2':
        p = '微信';
        break;
      case '3':
        p = '支付宝';
        break;
    }
    $(this).html(p);
  })
}

// 格式 快递方式
function formatExpressMent(){
  $('#table-order .expressment').each(function() {
    var e = $(this).html();
    switch (e) {
      case "1":
        e = '圆通';
        break;
      case "2":
        e = '申通';
        break;
      case "3":
        e = '韵达';
        break;
      case "4":
        e = '中通';
        break;
      case "5":
        e = '韵达';
        break;
    }
    $(this).html(e);
  })
}

// 格式 时间
function formateTime(){
  $('#table-order .orderTime').each(function() {
    var t = $(this).html();
    t = parseInt(t);
    t = new Date(t);
    t = t.getFullYear()+ '-' + (t.getMonth()+1) + '-' + t.getDate()+'<br/>'+ t.getHours()+ ':' + t.getMinutes();
    $(this).html(t);
  })
}


//切换导航条
$('.affix').on('click','li>a',function(e){
    e.preventDefault();
    $(this).parent().addClass('active').siblings('.active').removeClass('active');

    var id = $(this).attr('href');
    $(id).addClass('active').siblings('.active').removeClass('active')
  }
);


/*随机颜色*/
function rc(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b})`;
}

/***2:请求消费数据canvas***/
(function(){
  var c2 = $('#c2')[0];
  var w = 800;
  var h = 600;
  c2.width = w;
  c2.height = h;
  var ctx = c2.getContext('2d');

  ctx.strokeRect(50,50,w-100,h-100);

  $('.statis_canvas').click(function(){
    $.ajax({
      type:"GET",
      data:{'uid':loginUid},
      url:'data/15_buy_status.php',
      success:function(list){
        var count = list.length;
        var colWidth = (w-100)/(2*count+1);
        for(var i = 0 ;i<list.length;i++){
          var data = list[i];
          var rw = colWidth;
          var rh = (data.value)/20;
          var x = (2*i+1)*colWidth + 50;
          var y = h - rh - 50;
          ctx.strokeRect(x,y,rw,rh);

          // 使用渐变
          var g = ctx.createLinearGradient(x,y,x,y+rh);
          g.addColorStop(0,rc());
          g.addColorStop(1,'#fff');
          ctx.fillStyle = g;
          ctx.fillRect(x,y,rw,rh);
        }
      },
      error:function(){
        console.log(arguments)
      }
    })
  });
})();

/***2:请求消费数据svg***/
(function(){
  var w = 800;
  var h = 600;

  s1.setAttribute('width',w);
  s1.setAttribute('height',h);

  $('.stat-svg').click(function(){
    $.ajax({
      type:'GET',
      data:{'uid':loginUid},
      url:'data/15_buy_status.php',
      success:function(list){
        /*console.log(list)*/
        var count = list.length;
        var colWidth = (w-100)/(2*count+1);

        for(var i = 0 ;i<list.length;i++){
          var data = list[i];
          var sw = colWidth;
          var sh = (data.value)/20;
          var x = (2*i+1)*colWidth + 50;
          var y = h - sh - 50;

          var s = rc();
          var html = `
            <linearGradient id="g${i}" x1='0' y1='0' x2='0' y2='100%'>
              <stop offset="0" stop-color="${s}"></stop>
              <stop offset="100%" stop-color="${s}" stop-opacity="0"></stop>
            </linearGradient>
          `;
          effectList.innerHTML += html;

          var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
          rect.setAttribute('width',sw);
          rect.setAttribute('height',sh);
          rect.setAttribute('x',x);
          rect.setAttribute('y',y);
          rect.setAttribute('fill',`url(#g${i})`);
          s1.appendChild(rect)
        }
      },
      error:function(){
        console.log(arguments)
      }
    })
  })
})();

/***3:统计抽奖信息***/
(function(){
  $('.luck-lottery').click(function(){
    $.ajax({
      type:"GET",
      data:{'uid':loginUid},
      url:'data/16_lottery_stat.php',
      success:function(list){
        if(list.total <= list.used){
          $('#bt-lottery').html('无法抽奖(剩余次数为零)');
          return
        }
        $('#bt-lottery').html(`开始抽奖,总次数:${list.total},剩余次数:${list.total-list.used}`).prop('disabled', false);

        var progress = 0;
        var imgPan = new Image();
        imgPan.src = "image/img/pan.png";
        imgPan.onload = function(){
          progress += 80;
          if(progress === 100){
            initDraw();
          }
        };
        var imgPin = new Image();
        imgPin.src = 'image/img/pin.png';
        imgPin.onload = function(){
          progress += 20;
          if(progress === 100){
            initDraw();
          }
        };

        function initDraw(){
          var w = imgPan.width;
          var h = imgPan.height;
          var c = $('#canvas-lottery')[0];
          c.width = w;
          c.height = h;
          var ctx = c.getContext('2d');
          ctx.drawImage(imgPan,0,0);
          ctx.drawImage(imgPin, w/2-imgPin.width/2 , h/2-imgPin.height/2);
        }
      },
      error:function(){
        console.log(arguments)
      }
    })

  })

})();

