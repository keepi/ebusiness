<?php
/*
 * 接受uid 获得该用户对应的所有订单信息
 * step1: 根据用户编号查询出所有订单
 * step2: 根据订单编号查询出所有的商品
*/

header('Content-Type:application/json;charset=UTF-8');

@$uid=$_REQUEST['uid'] or die('{"code":2,"msg":"msg required"}');

require('1_init.php');

// step1
$sql = "SELECT * FROM e_order WHERE userId = $uid";
$result = mysqli_query($conn,$sql);
$list = mysqli_fetch_all($result,1);

foreach($list as $k => $order){
  $oid = $order['oid'];
  //step2
  $sql = "SELECT * FROM e_product WHERE pid IN(SELECT productId FROM e_order_detail WHERE orderId=$oid)";
  $result = mysqli_query($conn,$sql);
  $list[$k]['productList'] = mysqli_fetch_all($result,1);
}

echo json_encode($list);










