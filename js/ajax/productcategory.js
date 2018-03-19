/**根据商品分组编号加载**/

function getProduct(objContent){
  $.ajax({
    type:'GET',
    url:"data/10_productcategory.php",
    data:{group:$(objContent).attr('group')},
    success:function(list){
      var html = '';
      $.each(list,function(i,p){
        if( i < 8)
          html += `
        <li>
          <dl>
            <dt><a class="show_img" href="show_product_detail.php?pid=${p.pid}" ref="${p.pid}"><img src="${p.pic}" alt=""/></a></dt>
            <dd class="info_text">${p.pname}</dd>
            <dd class="info_price">￥${p.price}</dd>
            <dd class="info_appraise">
              评论:
              <span class="star "></span>
              (<a href="javascript:;">79条</a>)
            </dd>
          </dl>
        </li>
      `;
      });
      $(objContent).html(html)
    },
    error:function(){
      console.log(arguments)
    }
  });
}
getProduct('#digital');
getProduct('#food');













