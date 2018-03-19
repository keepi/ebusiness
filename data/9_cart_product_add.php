<?php
/**
*	接收客户端提交的uid pid,添加到购物车详情表,如果购物车已有,则购买数量+1,返回的JSON如
{"code":1,"count":2,"did":6}
*/

header('Content-Type:application/json;charset=UTF-8');

@$uid = $_REQUEST['uid'] or die('{"code":2,"msg":"uid required"}');
@$pid = $_REQUEST['pid'] or die('{"code":2,"msg":"pid required"}');

require('1_init.php'); 

// 1.先根据用户编号查询购物车编号
$sql = "SELECT cid FROM e_cart WHERE userId = $uid";
$result = mysqli_query($conn,$sql); 
$row = mysqli_fetch_row($result); 

// 2.如果该用户的购物车有编号则获取购物车编号
if($row !== null){
	$cid = $row[0];
}else{ // 如果该购物车没有编号 则创建一个购物车 并获得购物车编号
	$sql = "INSERT INTO e_cart VALUES(NULL,$uid)";
	mysqli_query($conn,$sql);
	$cid = $sql_insert_id($conn);
}

// 3.根据购物车编号和产品编号查询是否买过该商品
$sql = "SELECT * FROM e_cart_detail WHERE cartId = $cid AND productId=$pid";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);

if($row!==null){
	// 4.如果已经购买过该商品 则数量+1
	$did = $row['did']; // 获得详情编号
	$count = intval($row['count']); //获得数量
	$count ++;
	$sql = "UPDATE e_cart_detail SET count=$count WHERE did=$did";
	mysqli_query($conn,$sql);
}else{
	// 5.如果未购买过则添加购物记录 数量为1
	$sql = "INSERT INTO e_cart_detail VALUES(NULL,$cid,$pid,1)";
	$count = 1;
	mysqli_query($conn,$sql);
	$did = mysqli_insert_id($conn);
};

$output = [
	'code' => 1,
	'did' => $did,
	'count' =>$count
];

echo json_encode($output);











