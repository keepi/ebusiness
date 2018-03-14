/*广告轮播*/
(function(){
  var prev = document.getElementsByClassName('prev')[0];
  var next = document.getElementsByClassName('next')[0];
  var carouselLg = document.getElementsByClassName('carousel_slider')[0];
  var buttons = document.getElementsByClassName('carousel_point')[0].getElementsByTagName('a');
  var carouselContainer = document.getElementsByClassName('carousel')[0];
  var timer = null;
  var index = 1;
  var points = 2;
  var animated = false;

  prev.onclick = function(){
    if(!animated){
      if(index==1){
        index=points;
      }else{
        index-=1;
      }
      showButton();
      animate(813);
    }
  };
  next.onclick = function(){
    if(!animated){
      if(index==points){
        index=1;
      }else{
        index+=1;
      }

      showButton();
      animate(-813);
    }
  };
  for( var i = 0; i<buttons.length ; i++ ){
    buttons[i].onclick = function(){
      if( this.className == 'on'){
        return;
      }
      var myIndex = parseInt(this.getAttribute('index'));
      var offset = -813*(myIndex-index);
      if(!animated){
        animate(offset);
      }
      index = myIndex;
      showButton();
    }
  }
  function animate(offset){
    var inteval = 10;
    var time = 300;
    var speed = offset / ( time / inteval);
    animated = true;

    var newLeft = parseInt(carouselLg.style.left) + offset ;//目标点

    function go(){
      if( ( speed > 0 && newLeft > parseInt(carouselLg.style.left) ) || ( speed < 0 && newLeft < parseInt(carouselLg.style.left) ) ){
        carouselLg.style.left = parseInt(carouselLg.style.left) + speed + 'px';
        setTimeout(go,inteval);
      }else{

        animated = false;
        carouselLg.style.left = newLeft + 'px';

        if( newLeft > -813 ){
          carouselLg.style.left= -1626 + "px";
        }
        if( newLeft < -1626 ){
          carouselLg.style.left= -813 + "px";
        }
      }
    }
    go();
  }
  function showButton(){
    for(var i = 0 ;i<buttons.length ; i++){
      buttons[i].className='';
    }
    buttons[index-1].className='on';
  }
  function play(){
    timer = setInterval(function(){
      next.onclick();
    },2000)
  }
  function stop(){
    clearInterval(timer);
  }
  carouselContainer.onmouseover = stop;
  carouselContainer.onmouseout = play;
})();
