/**2:异步请求加载广告轮播信息**/
getCarousel();
function getCarousel(){
  $.ajax({
    type:'GET',
    url:'data/2_product_index_carousel.php',
    success:function(carouselList){
      var html = '';
      var point = '';
      html += `<li><a href="javascript:;"><img src="${carouselList[1].pic}" alt="${carouselList[1].title}"/></a></li>`;
      $.each(carouselList,function(i,p){
        if(p.isShown){
          html += `<li><a href="javascript:;"><img src="${p.pic}" alt="${p.title}"/></a></li>`;
          if(p.cid == 0){
            point += `<a index="${p.cid+1}" href="javascript:;" class="on"></a>`;
          }
          point += `<a index="${p.cid+1}" href="javascript:;"></a>`;
        }
      });
      html += `<li><a href="javascript:;"><img src="${carouselList[0].pic}" alt="${carouselList[0].title}"/></a></li>`;
      $('#carousel_slider ul').html(html);

    }
  })
}

/**3:加载商品列表图**/
/*getProductPicLg();
function getProductPicLg(){
  $.ajax({
    type:'GET',
    url:'data/3_product_index.php',
    success:function(list){
      var firstList = '';
      var secondList = ''
      $.each(list,function(i,p){
        if( i < 4 ){
          firstList += `
                <dl>
                  <dt><a href="javascript:;"><img src="${p.lpic}" alt=""/></a></dt>
                  <dd>
                    <p class="good_name">${p.lpname}</p>
                    <p class="price">${p.lprice}</p>
                  </dd>
                </dl>`
        }else{
          secondList += `
                <dl>
                  <dt><a href="javascript:;"><img src="${p.lpic}" alt=""/></a></dt>
                  <dd>
                    <p class="good_name">${p.lpname}</p>
                    <p class="price">${p.lprice}</p>
                  </dd>
                </dl>
          `;
        }
      });
      $('#first_product_list').html(firstList);
      $('#second_product_list').html(secondList);
    }
  })

}*/

getProductPicSm();
function getProductPicSm(){
  $.ajax({
    type:'GET',
    url:'data/4_product_index.php',
    success:function(list){
      var firstList = '';
      var secondList = '';
      $.each(list,function(i,p){
        if( i < 4 ){
          firstList += `
                <div class="product_item_list lf">
                  <div class="show_pic lf">
                    <a href="javascript:;"><img src="${p.spic}" alt=""/></a>
                  </div>
                  <div class="info lf on">
                    <p class="info_text">
                      <a href="javascript:;">
                        ${p.sname}
                      </a>
                    </p>
                    <p class="info_price">￥${p.sprice}</p>
                  </div>
                </div>`
        }else{
          secondList += `
                <div class="product_item_list lf">
                  <div class="show_pic lf">
                    <a href="javascript:;"><img src="${p.spic}" alt=""/></a>
                  </div>
                  <div class="info lf on">
                    <p class="info_text">
                      <a href="javascript:;">
                        ${p.sname}
                      </a>
                    </p>
                    <p class="info_price">￥${p.sprice}</p>
                  </div>
                </div>
          `;
        }
      });
      $('#first_sm').html(firstList);
      $('#second_sm').html(secondList);
    }
  })
}

function getProduct(objContent){
  $.ajax({
    type:'GET',
    url:"data/10_productcategory.php",
    data:{group:$(objContent).attr('group')},
    success:function(list){

      var html = '';
      $.each(list,function(i,p){
        if( i < 4){
          html += `
          <dl>
            <dt><a href="show_product_detail.php?pid=${p.pid}"><img src="${p.pic}" alt=""/></a></dt>
            <dd>
              <p class="good_name">${p.pname}</p>
              <p class="price">${p.price}</p>
            </dd>
          </dl>
      `;
        }
      });
      $(objContent).html(html);
    },
    error:function(){
      console.log(arguments)
    }
  });
}
getProduct('#first_product_list');
getProduct('#second_product_list');







