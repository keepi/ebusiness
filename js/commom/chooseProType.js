/*选择地址*/
(function(){
  var addrTab = document.querySelector('.store .head');
  var addrContent = document.querySelector('.store .content');
  var contentTabs = addrContent.firstElementChild.children;
  var contentlis = addrContent.querySelectorAll('.content_list li');
  var contentArea = addrContent.querySelectorAll('.content_list div');
  var addrTabText = {};
  var contentA = null;

  addrTab.onclick = function(){
    if(addrContent.style.display == 'none'){
      addrContent.style.display = 'block';
    }else{
      addrContent.style.display = 'none';
    }

  };
  for(var i = 0;i<contentTabs.length;i++){
    contentTabs[i].index = i;
    contentTabs[i].onclick = function(){
      tabList(this)
    };
  }

  function tabList(obj){
    for(var i = 0;i<contentTabs.length;i++){
      contentTabs[i].className = '';
      contentArea[i].className = 'hide'
    }
    obj.className = 'curr';
    contentArea[obj.index].className = 'show'
  }

  for(var i = 0 ;i<contentlis.length;i++){
    contentA = contentlis[i].querySelectorAll('a');
    for(var j = 0 ; j<contentA.length;j++){
      contentA[j].onclick = function(){
        var parentIdx = this.parentNode.parentNode.dataset.level;
        addrTabText[parentIdx] = this.innerText;
        for(var i = 0;i<contentTabs.length;i++){
          contentTabs[i].className = '';
          contentArea[i].className = 'hide'
        }

        if(parentIdx == 2){
          var html = '';
          for(var k in addrTabText){
            html += (" " + addrTabText[k]);
          }
          addrTab.querySelector('.text').innerHTML = html;
          addrContent.style.display = 'none';
          return
        }
        contentTabs[parentIdx].nextElementSibling.className = 'curr';
        contentArea[parentIdx].nextElementSibling.className = 'show';


      }
    }
  }
})();

/*选择商品类型*/
(function(){
  var summaryWrapDiv = document.querySelector('.summary_wrap').children;
  var chooseColor = document.querySelector("#summary_color");
  var chooseForm = document.querySelector("#summary_form");

  var colorSpan = chooseColor.querySelectorAll('span');
  var formSpan = chooseForm.querySelectorAll('span');

  var chooseObj = {};

  function choose(obj){
    for(var i=0;i<obj.length;i++){
      obj[i].onclick = function(){

        // 记录点击的a标签
        this.parentNode.parentNode.prevNode = null;

        var parent = this.parentNode.parentNode;
        parent.index = parent.getAttribute('index');
        chooseObj[parent.index] = this.innerHTML;


        for(var j=0;j<obj.length;j++){
          removeClassName(obj[j],'active');
        }
        addClassName(this,'active');

        parent.prevNode = this;

        createChooseHtml();
      }
    }
  }

  choose(colorSpan);
  choose(formSpan);

  var chooseElement = document.querySelector('.summary_chose div');

  function createChooseHtml(){
    var html = '';
    for(var i = 0;i<summaryWrapDiv.length;i++){
      if( chooseObj[i] ){
        html += `<mark>${chooseObj[i]}<a data-index="${i}" href="javascript:;">x</a></mark>`
      }
    }
    chooseElement.innerHTML = html;

    var chooseA = chooseElement.querySelectorAll('a');
    for(var j = 0; j<chooseA.length;j++){
      chooseA[j].onclick = function(){
        this.parentNode.remove();

        delete chooseObj[this.dataset.index];
        summaryWrapDiv[this.dataset.index].prevNode.className = 'choose_btn'
      }
    }
  }
})();

var countInp = document.querySelector('.option .count');
/*数量加减*/
(function(){
  var reduceBtn = document.querySelector('.reduce');
  var addBtn = document.querySelector('.add');
  var maxCount = document.querySelector('.max_count');
  var count = null;

  addBtn.onclick = function(){
    count = parseInt(countInp.innerHTML);
    var max = parseInt(maxCount.innerHTML);
    if( count >= 1 ){
      reduceBtn.className = 'reduce'
    }
    if( count < max )
      countInp.innerHTML = count+1;
  };

  reduceBtn.onclick = function(){
    count = parseInt(countInp.innerHTML);
    if( count > 1 ){
      this.className = 'reduce'
      countInp.innerHTML = count-1;
    }else if (count == 1){
      this.className = 'reduce disabled'
    }
  }
})();


/*图片展示切换*/
(function(){
  var itemInfo = document.querySelector('.item_tabs .info');
  var itemConsult = document.querySelector('.item_tabs .consult');
  var itemDetailInfo = document.querySelector('.item_detail_info');

  function showDetailTab(obj1,obj2){
    if(hasClassName(obj1,'active')){
      return
    }else{
      addClassName(obj1,'active');
      removeClassName(obj2,'active')
    }

  }
  itemInfo.onclick = function(){
    showDetailTab(this,itemConsult);
    itemDetailInfo.style.display = 'block';
  };

  itemConsult.onclick = function(){
    showDetailTab(this,itemInfo);
    itemDetailInfo.style.display = 'none';
  }

})();

/*大图、小图切换*/
(function(){
  var smPic = document.querySelectorAll('.sm_pic li');
  var lgPic = document.querySelector('.lg_pic img');
  for(var i=0;i<smPic.length;i++){
    smPic[i].onclick = function(){
      for(var i=0;i<smPic.length;i++){
        removeClassName(smPic[i],'active')
      }
      addClassName(this,'active');
      lgPic.src = this.children[0].getAttribute('_src');
    }
  }
})();

/*放大镜*/
(function(){
  var lgPic = document.querySelector('.lg_pic');
  var mask = document.querySelector('.mask');
  var showLg = document.querySelector('.show_big');
  var showLgImg = document.querySelector('.show_big img');

  lgPic.onmouseenter = function(){
    mask.style.display = 'block';
    showLg.style.display = 'block';
  };
  lgPic.onmouseleave = function(){
    mask.style.display = 'none';
    showLg.style.display = 'none';
  };

  lgPic.onmousemove = function(ev){
    ev = ev || window.event;
    var L = ev.clientX - lgPic.offsetLeft - mask.offsetWidth/2;
    var T = ev.clientY - lgPic.offsetLeft - mask.offsetHeight/2;
    if( L<0 ){
      L = 0
    }else if( L>lgPic.offsetWidth - mask.offsetWidth ){
      L = lgPic.offsetWidth - mask.offsetWidth
    }
    if( T<0 ){
      T = 0
    }else if( T>lgPic.offsetHeight - mask.offsetHeight ){
      T = lgPic.offsetHeight - mask.offsetHeight
    }
    mask.style.left = L + 'px';
    mask.style.top = T + 'px';

    var scaleX = L / (lgPic.offsetWidth - mask.offsetWidth);
    var scaleY = T / (lgPic.offsetHeight - mask.offsetHeight);

    showLgImg.style.left = - scaleX*(showLgImg.offsetWidth-showLg.offsetWidth) +'px';
    showLgImg.style.top = - scaleY*(showLgImg.offsetHeight-showLg.offsetHeight) +'px';

  }
})();


