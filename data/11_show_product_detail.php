<?php
/**
*	接收客户端提交pid, 查找商品信息表e_product返回所有商品信息
*/

header('Content-Type:text/html;charset=UTF-8');
@$pid = $_REQUEST['pid'] or die('{"code":2,"msg":"pid required"}');
require('1_init.php'); 

// 1.查找商品信息表e_product
$sql = "SELECT * FROM e_product WHERE pid = $pid";
$result = mysqli_query($conn,$sql);
$productShow = mysqli_fetch_assoc($result);
?>
<!DOCTYPE html>
<html>
<head lang="en">
  <meta charset="UTF-8">
  <title>产品详情</title>
  <link rel="stylesheet" href="../css/include/reset.css"/>
  <link rel="stylesheet" href="../css/include/header.css"/>
  <link rel="stylesheet" href="../css/include/common.css"/>
  <link rel="stylesheet" href="../css/include/detailpage.css"/>
  <link rel="stylesheet" href="../css/include/footer.css"/>
</head>
<body>
<!--header-->
<header id="header">

</header>
<!--main-->
<div id="main">
  <div class="container">
    <div class="crumbs_nav">
      <a href="javascript:;" class="to_index">首页 </a>
      &gt;
      <a href="javascript:;">平板电脑</a>
      &gt;
      <a href="javascript:;">Apple苹果</a>
      &gt;
      <a href="javascript:;">MD531CH/A</a>
    </div>
    <div class="detail_produce_box">
      <!--上：商品展示及选择-->
      <div class="show_detail clearFix">
        <div class="show_pic">
          <div class="lg_pic">
            <div class="box">
              <span class="mask"></span>
              <img src=<?php echo "$productShow[pic]"?> alt=""/>
            </div>
            <div class="show_big">
              <img src="../image/pic/b1.jpg" alt=""/>
            </div>
          </div>
          <div class="sm_pic">
            <div>
              <ul>
                <li class="active"><img src="../image/pic/show_sm_pic_01.jpg" _src="../image/pic/show_lg_pic_01.jpg" alt=""/></li>
                <li><img src="../image/pic/show_sm_pic_02.jpg" _src="../image/pic/product_detail_show_02.jpg" alt=""/></li>
                <li><img src="../image/pic/show_sm_pic_03.jpg" alt=""/></li>
                <li><img src="../image/pic/show_sm_pic_04.jpg" alt=""/></li>
                <li><img src="../image/pic/show_sm_pic_05.jpg" alt=""/></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="show_info">
          <h3 class="info_hd">$</h3>
          <div class="summary">
            <div class="summary_price">
              <div class="dt">慕课价</div>
              <div class="dd price">1999.0</div>
            </div>
            <div class="summary_promotion">
              <div class="dt">优惠</div>
              <div class="dd">
                <a class="buy_more">满换购</a>
                <span class="pl">购ipad加价优惠够配件或USB充电插座</span>
              </div>
            </div>
            <div class="summary_wrap">
              <div index="0" class="summary_addr">
              <div class="dt">送到</div>
              <div class="dd">
                <div class="store">
                  <div class="head">
                    <span class="text">北京市 海淀区 五环内</span>
                    <span class="arrow arrow_arr_close"></span>
                  </div>
                  <div class="content">
                    <ul class="content_tabs">
                      <li class="curr"><a href="javascript:;">北京</a></li>
                      <li><a href="javascript:;">海淀区</a></li>
                      <li><a href="javascript:;">三环内</a></li>
                    </ul>
                    <ul class="content_list">
                      <div class="show" data-level="0">
                        <li><a href="javascript:;">北京</a></li>
                        <li><a href="javascript:;">河北</a></li>
                        <li><a href="javascript:;">吉林</a></li>
                        <li><a href="javascript:;">山东</a></li>
                        <li><a href="javascript:;">福建</a></li>
                        <li><a href="javascript:;">西藏</a></li>
                        <li><a href="javascript:;">北京</a></li>
                        <li><a href="javascript:;">河北</a></li>
                        <li><a href="javascript:;">吉林</a></li>
                        <li><a href="javascript:;">山东</a></li>
                        <li><a href="javascript:;">福建</a></li>
                        <li><a href="javascript:;">西藏</a></li>
                        <li><a href="javascript:;">吉林</a></li>
                        <li><a href="javascript:;">山东</a></li>
                        <li><a href="javascript:;">福建</a></li>
                        <li><a href="javascript:;">西藏</a></li>
                        <li><a href="javascript:;">山东</a></li>
                        <li><a href="javascript:;">福建</a></li>
                        <li><a href="javascript:;">西藏</a></li>
                        <li><a href="javascript:;">吉林</a></li>
                        <li><a href="javascript:;">山东</a></li>
                        <li><a href="javascript:;">山东</a></li>
                        <li><a href="javascript:;">福建</a></li>
                      </div>
                      <div class="hide" data-level="1">
                        <li><a href="javascript:;">朝阳区</a></li>
                        <li><a href="javascript:;">崇文区</a></li>
                        <li><a href="javascript:;">门头沟</a></li>
                        <li><a href="javascript:;">顺义区</a></li>
                        <li><a href="javascript:;">朝阳区</a></li>
                        <li><a href="javascript:;">崇文区</a></li>
                        <li><a href="javascript:;">门头沟</a></li>
                        <li><a href="javascript:;">顺义区</a></li>
                        <li><a href="javascript:;">朝阳区</a></li>
                        <li><a href="javascript:;">崇文区</a></li>
                        <li><a href="javascript:;">门头沟</a></li>
                        <li><a href="javascript:;">顺义区</a></li>
                        <li><a href="javascript:;">朝阳区</a></li>
                        <li><a href="javascript:;">崇文区</a></li>
                      </div>
                      <div class="hide" data-level="2">
                        <li><a href="javascript:;">四环到五环之间</a></li>
                        <li><a href="javascript:;">三环内</a></li>
                        <li><a href="javascript:;">五环到六环之间</a></li>
                        <li><a href="javascript:;">三环到四环之间</a></li>
                        <li><a href="javascript:;">定福庄</a></li>
                      </div>
                    </ul>
                  </div>
                </div>
                <div class="prompt">有货，可当日出库</div>
              </div>
            </div>
              <div index="1" class="summary_color" id="summary_color">
                <div class="dt">选择颜色</div>
                <div class="dd">
                    <span class="choose_btn">白色</span>
                    <span class="choose_btn">黑色</span>
                    <span class="choose_btn">灰色</span>
                </div>
              </div>
              <div index="2" class="summary_form" id="summary_form">
                <div class="dt">选择规格</div>
                <div class="dd">
                  <span class="choose_btn">WIFI 16G</span>
                  <span class="choose_btn">WIFI 64G</span>
                  <span class="choose_btn">WIFI 32G</span>
                  <span class="choose_btn">WIFI Cellular 32G</span>
                  <span class="choose_btn">WIFI Cellular 64G</span>
                  <span class="choose_btn">WIFI Cellular 16G</span>
                </div>
              </div>
              <div index="3" class="summary_count">
                <div class="dt">数量</div>
                <div class="dd">
                  <div class="option">
                    <span class="reduce disabled">-</span>
                    <span class="count">1</span>
                    <span class="add">+</span>
                  </div>
                  <span>限购<i class="max_count">9</i>件</span>
                </div>
              </div>
            </div>
            <div class="summary_chose">
              <span class="title">已选择</span>
              <div>

              </div>
            </div>
            <div class="summary_btn">
              <a class="add_cart"><i></i>加入购物车</a>
              <span></span>
              <a class="add_focus"><i></i>加关注</a>
            </div>
            <div class="summary_note">
              <p>注意：此商品可提供普通发票，不提供增值税发票。</p>
            </div>
          </div>
        </div>
      </div>
      <!--下：同价位商品及产品介绍-->
      <div class="item_info clearFix">
        <div class="aside lf">
          <!--同等价位-->
          <div class="eq_price">
            <div class="hd">同价位</div>
            <ul class="eq_price_list">
              <li>
                <dl>
                  <dt>
                    <a href="javascript:;"><img src="../image/pic/ep_price_list_01.jpg" alt=""/></a>
                  </dt>
                  <dd class="info">
                    <a href="javascript:;">Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话 </a>
                  </dd>
                  <dd class="pr">￥3588.00</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <a href="javascript:;"><img src="../image/pic/ep_price_list_02.jpg" alt=""/></a>
                  </dt>
                  <dd class="info">
                    <a href="javascript:;">Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话 </a>
                  </dd>
                  <dd class="pr">￥3588.00</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <a href="javascript:;"><img src="../image/pic/ep_price_list_03.jpg" alt=""/></a>
                  </dt>
                  <dd class="info">
                    <a href="javascript:;">Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话 </a>
                  </dd>
                  <dd class="pr">￥3588.00</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <a href="javascript:;"><img src="../image/pic/ep_price_list_04.jpg" alt=""/></a>
                  </dt>
                  <dd class="info">
                    <a href="javascript:;">Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话 </a>
                  </dd>
                  <dd class="pr">￥3588.00</dd>
                </dl>
              </li>
            </ul>
          </div>
          <!--看了最终买-->
          <div class="recommend">
            <div class="hd">看了最终买</div>
            <ul class="recommend_list">
              <li>
                <dl>
                  <dt>
                    <a href="javascript:;"><img src="../image/pic/ep_price_list_01.jpg" alt=""/></a>
                  </dt>
                  <dd class="info">
                    <a href="javascript:;">Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话 </a>
                  </dd>
                  <dd class="pr">￥3588.00</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <a href="javascript:;"><img src="../image/pic/ep_price_list_02.jpg" alt=""/></a>
                  </dt>
                  <dd class="info">
                    <a href="javascript:;">Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话 </a>
                  </dd>
                  <dd class="pr">￥3588.00</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <a href="javascript:;"><img src="../image/pic/ep_price_list_03.jpg" alt=""/></a>
                  </dt>
                  <dd class="info">
                    <a href="javascript:;">Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话 </a>
                  </dd>
                  <dd class="pr">￥3588.00</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <a href="javascript:;"><img src="../image/pic/ep_price_list_04.jpg" alt=""/></a>
                  </dt>
                  <dd class="info">
                    <a href="javascript:;">Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话 </a>
                  </dd>
                  <dd class="pr">￥3588.00</dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
        <div class="article lf">
         <!--产品介绍、商品评价选项卡-->
          <div class="item_tabs">
            <ul>
              <li class="info active"><i></i>产品介绍</li>
              <li class="consult"><i></i>商品评价(4725)</li>
            </ul>
          </div>
          <!--商品介绍-->
          <div class="item_detail_info">
            <div class="item_banner_pic">
              <a href="javascript:;"><img src="../image/pic/product_detail_show_01.jpg" alt=""/></a>
            </div>
            <!--强烈推荐-->
            <div class="strong_recomment">
              <div class="hd">
                <span class="title">强烈推荐</span>
                货比三家,还任选
              </div>
              <div class="info_txt">
                <p>现在就是买mini的好时候！换代清仓直降，但苹果品质不变！A5双核，内置Lightning闪电接口，正反可插，方便人性。小身材现在就是买mini的好时候！换代清仓直降，但苹果品质不变！A5双核，内置Lightning闪电接口，正反可插，方便人性。小身材</p>
              </div>
            </div>
            <!--精美图片-->
            <div class="item_details_pic">
              <div class="hd">
                <span class="title">精美图片</span>
              </div>
              <div class="info_txt">
                <p>苹果iPad7.9 英寸显示屏可带来新的iPad体验，绚丽的显示屏，在每一寸画面中呈现灵动鲜活的美妙影像。苹果iPad7.9 英寸显示屏可带来新的iPad体验。</p>
              </div>
              <div class="pic">
                <img src="../image/pic/product_detail_show_02.jpg" alt=""/>
              </div>
            </div>
          </div>
          <!--商品评价-->
          <div class="item_comment clearFix">
            <p class="hd">商品评价</p>
            <div class="item_comment_score clearFix">
              <dl>
                <dt class="score">
                  <span class="result_score">4.7</span>分
                </dt>
                <dd class="satisfaction">
                  <p class="score_bar">
                    <span>非常不满意</span>
                    <span>不满意</span>
                    <span>一般</span>
                    <span>满意</span>
                    <span>非常满意</span>
                    <i>4.7</i>
                  </p>
                  <span>共18939位慕课网友参与评分</span>
                </dd>
              </dl>
            </div>
            <div class="satis_detail">
              <div class="satis_tab">
                <ul class="lf">
                  <li><a href="javascript:;" class="active">全部</a></li>
                  <li><a href="javascript:;">满意(17490)</a></li>
                  <li><a href="javascript:;">一般(549)</a></li>
                  <li><a href="javascript:;">不满意(743)</a></li>
                </ul>
                <div class="order rt">
                  <span>时间排序 <i></i></span><span>推荐排序 <i></i></span>
                  <em></em>
                </div>
              </div>
              <div class="interact_list satis_list">
                <ul>
                  <li>
                    <dl class="clearFix">
                      <dt class="user_icon lf">
                        <img src="../image/pic/user_icon_01.jpg" alt=""/>
                        <a class="user_id">61***42</a><br/>
                        <a class="user_nick">金色会员</a>
                      </dt>
                      <dd class="commont lf">
                        <p class="score_commont"><span class="star star5"></span><span>5分 </span><span> 满意</span></p>
                        <p class="score_txt">挺不错，信赖慕课</p>
                        <p><a href="javascript:;" class="oppose">踩(0)</a>&nbsp;&nbsp;<a href="javascript:;" class="up">顶(0)</a></p>
                      </dd>
                      <dd class="time rt">2014-03-07 17:00:44</dd>
                    </dl>
                  </li>
                  <li>
                    <dl class="clearFix">
                      <dt class="user_icon lf">
                        <img src="../image/pic/user_icon02.jpg" alt=""/>
                        <a class="user_id">61***42</a><br/>
                        <a class="user_nick">金色会员</a>
                      </dt>
                      <dd class="commont lf">
                        <p class="score_commont"><span class="star star5"></span><span>5分 </span><span> 满意</span></p>
                        <p class="score_txt">挺不错，信赖慕课</p>
                        <p><a href="javascript:;" class="oppose">踩(0)</a>&nbsp;&nbsp;<a href="javascript:;" class="up">顶(0)</a></p>
                      </dd>
                      <dd class="time rt">2014-03-07 17:00:44</dd>
                    </dl>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pager rt">
              <a href="javascript:;" class="prev disabled">&lt; 上一页</a>
              <a href="javascript:;" class="active">1</a>
              <a href="javascript:;">2</a>
              <a href="javascript:;">3</a>
              <a href="javascript:;">4</a>
              <a href="javascript:;">5</a>
              ...
              <a href="javascript:;" class="max_pages">1879</a>
              <a href="javascript:;" class="next">下一页 &gt;</a>
              <span class="total_pages">到第<a href="javascript:;" class="jumpto">1</a>页</span>
              <input class="page_btn" value="确定"/>
            </div>
          </div>
          <!--商品咨询-->
          <div class="item_consult clearFix">
            <div class="consult_tabs">
              <ul>
                <li><a href="javascript:;" class="curr">全部咨询(705)</a></li>
              </ul>
              <span class="report_consult rt">发表咨询</span>
            </div>
            <div class="consult_prompt">
              <p>提示:因厂家更改产品包装、产地或者更换随机附件等没有任何提前通知，且每位咨询者购买情况、提问时间等不同，为此以下回复信息仅供参</p>
            </div>
            <div class="interact_list consult_list clearFix">
              <ul>
                <li>
                  <dl class="clearFix">
                    <dt class="user_icon lf">
                      <img src="../image/pic/user_consult_pic_01.jpg" alt=""/>
                      <a class="user_id">61***42</a><br/>
                      <a class="user_nick">土星会员</a>
                    </dt>
                    <dd class="commont lf">
                      <p class="consult_title">
                        [商品咨询]
                        <span class="time rt">2014-03-07 17:00:44</span>
                      </p>
                      <p class="consult_txt">还能再便宜点么？</p>
                      <p class="reply">
                        <span class="replier">慕课网回复</span>
                        ：您好，现在已经是活动价格了
                      </p>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl class="clearFix">
                    <dt class="user_icon lf">
                      <img src="../image/pic/user_consult_pic_01.jpg" alt=""/>
                      <a class="user_id">61***42</a><br/>
                      <a class="user_nick">土星会员</a>
                    </dt>
                    <dd class="commont lf">
                      <p class="consult_title">
                        [商品咨询]
                        <span class="time rt">2014-03-07 17:00:44</span>
                      </p>
                      <p class="consult_txt">还能再便宜点么？</p>
                      <p class="reply">
                        <span class="replier">慕课网回复</span>
                        ：您好，现在已经是活动价格了
                      </p>
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
            <div class="pager rt">
              <a href="javascript:;" class="prev disabled">&lt; 上一页</a>
              <a href="javascript:;" class="active">1</a>
              <a href="javascript:;">2</a>
              <a href="javascript:;" class="next">下一页 &gt;</a>
              <span class="total_pages">到第<a href="javascript:;" class="jumpto">1</a>页</span>
              <input class="page_btn" value="确定"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!--footer-->
<footer id="footer">

</footer>
<script src="../js/jquery/jquery-1.11.3.js"></script>
<script src="../js/commom/commom.js"></script>
<script src="../js/commom/chooseProType.js"></script>
<script src="../js/ajax/loadhf.js"></script>
<script src="../js/ajax/detailpage.js"></script>
</body>
</html>












