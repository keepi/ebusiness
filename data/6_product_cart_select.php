<?php
/*
*接收客户端提交的uid，查询出该用户购物车中所有商品
*/
header('Content-Type:application/json;charset=UTF-8');

@$uid = $_REQUEST['uid'] or die('{"code":2,"msg":"uid required"}');

require('1_init.php');

// 1.根据用户编号查询购物车编号
$sql = "SELECT cid FROM e_cart WHERE userId = $uid";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);

// 如果该用户编号没有购物车,则返回空数组
if($row === null){
  die('[]');
}
// 否则将获得用户的购物车编号
$cid = $row[0];

// 2.查询指定用户购物车中的所有商品
$sql = "SELECT pid,pname,price,pic,did,count FROM e_product,e_cart_detail WHERE pid = productId AND cartId = $cid";
$result = mysqli_query($conn,$sql);
$list = mysqli_fetch_all($result,MYSQLI_ASSOC);

echo json_encode($list);









