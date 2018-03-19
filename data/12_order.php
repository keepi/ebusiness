<?php
/*
 *
   用户订单信息
   rcvName\addr\price\payment\orderTime\phone\userId
   订单详情表
   productId\count

   step1:用户订单信息插入到 用户订单信息表中
   step2:插入成功后获取oid
   step3:将oid\productId\count 插入到订单详情表中
   step4:插入成功后返回订单ID did;
*/

header("Content-type:application/json;charset=UTF-8");
@$rcvName = $_REQUEST['rcvName'] or die('{"code":2,"msg":"rcvName required"}');
@$addr = $_REQUEST['addr'] or die('{"code":2,"msg":"addr required"}');
@$phone = $_REQUEST['rcvPhone'] or die('{"code":2,"msg":"phone required"}');
@$price = $_REQUEST['price'] or die('{"code":2,"msg":"price required"}');
@$payment = $_REQUEST['payment'] or die('{"code":2,"msg":"payment required"}');
@$orderTime = $_REQUEST['orderTime'] or die('{"code":2,"msg":"orderTime required"}');
@$expressment = $_REQUEST['expressment'] or die('{"code":2,"msg":"expressment required"}');
@$userId = $_REQUEST['userId'] or die('{"code":2,"msg":"userId required"}');
@$productInfo = $_REQUEST['productInfo'] or die('{"code":2,"msg":"productInfo"}');

require('1_init.php');

// step1\step2
$sql = "INSERT INTO e_order VALUES(NULL,'$rcvName','$addr','$phone','$price','$payment','$orderTime','$expressment','$userId')";
$result = mysqli_query($conn,$sql);
$oid = mysqli_insert_id($conn);

// step3
// 遍历$productInfo数组

foreach( $productInfo as $value ){
   $pid = $value['pid'];
   $count = $value['count'];
   $sql = "INSERT INTO e_order_detail VALUES(NULL,$oid,$pid,$count)";
   $result = mysqli_query($conn,$sql);
};

$sql = "SELECT did FROM e_order_detail WHERE orderId = $oid";
$result = mysqli_query($conn,$sql);
$list = mysqli_fetch_all($result);
if($list){
   echo '{"code":"1","orderId":"'.$oid.'","msg":"下单成功"}';
}