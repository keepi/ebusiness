<?php
/*
 * 接收uid 统计抽奖信息
 * step1:在order表中统计用户订单总额
 * step2:计算指定用户已经抽奖过的次数
 * 返回数据 {"uid":10,"total":21,"used":3}
*/
header('Content-Type:application/json;charset=UTF-8');

@$uid = $_REQUEST['uid'] or die('{"code":2,"msg":"uid required"}');

require('1_init.php');

$output = [
    'uid'=>$uid,
    'total'=>0,
    'used'=>0
];

// step1
$sql = "SELECT SUM(price) FROM e_order WHERE userId=$uid";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
$sum = $row[0];
$output['total'] = intval($sum/100);

// step2
$sql = "SELECT COUNT(*) FROM e_lottery WHERE userId=$uid";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
$num = $row[0];
$output['used'] = intval( $num );

echo json_encode($output);
