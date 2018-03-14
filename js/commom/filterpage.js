/*商品分类筛选*/
(function () {
  // 筛选后的商品标签存放的地方
  var selectedBox = document.querySelector('#choose div');
  // 获得所有的存放选项的lis
  var lis = document.querySelectorAll('.item_type');
  var chooseAll = document.querySelectorAll('.choose_all');
  var itemA = null;
  var chooseObj = {};

  for(var k= 0; k<lis.length ; k++){
    itemA = lis[k].querySelectorAll('a');
    lis[k].index = k;

    for(var m = 0;m<itemA.length;m++){
      itemA[m].onclick = function(){
        var parent = this.parentNode;
        if(parent.index != 0){
          chooseAll[parent.index-1].className = '';
        }
        chooseObj[parent.index] = this.innerHTML;
        createChooseHtml();
        if(parent.prevNode){
          parent.prevNode.className = ''
        }
        this.className = 'tag';
        parent.prevNode = this;
      }
    }
  }

  function createChooseHtml(){
    var html = '';
    for(var i = 0;i<lis.length;i++){
      if(chooseObj[i]){
        html += `<mark>${chooseObj[i]}<a data-index="${i}" href="javascript:;">x</a></mark>`
      }
    }
    selectedBox.innerHTML = html;
    var chooseA = selectedBox.querySelectorAll('a');
    for(var j=0;j<chooseA.length;j++){
      chooseA[j].onclick = function(){
        this.parentNode.remove();
        if(this.dataset.index != 0 ){
          chooseAll[this.dataset.index-1].className = 'tag'
        }
        delete chooseObj[this.dataset.index];
        lis[this.dataset.index].prevNode.className = ''
      }
    }
  }
})();





