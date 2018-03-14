<?php
header("Content-Type:application/json;charset=UTF-8");

//接收页数 和 产品类型
@$pageNum = $_REQUEST['pageNum'];

if($pageNum===null){
  $pageNum = 1;
}else{
  $pageNum = intval($pageNum);
}

$output=[
  'recordCount' => 0,//商品总数
  'pageSize' => 15,//每次加载的商品数
  'pageCount' => 0,//可以显示的总页数
  'pageNum' => $pageNum,//当前页
  'data' => null // 最后返回给客户端的数据
];

require('1_init.php');

// 查询总量
$sql = "SELECT COUNT(*) FROM e_product";
$result = mysqli_query($conn,$sql);
$output['recordCount'] = intval(mysqli_fetch_row($result)[0]);
$output['pageCount'] = ceil($output['recordCount'] / $output['pageSize']);

// 根据页数查询数据
$start = ($output['pageNum']-1)*$output['pageSize'];
$count = $output['pageSize'];
$sql = "SELECT * FROM e_product LIMIT $start,$count";
$result = mysqli_query($conn,$sql);
$output['data'] = mysqli_fetch_all($result,1);

echo json_encode($output);
