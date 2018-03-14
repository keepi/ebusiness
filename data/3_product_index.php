<?php
/*
* 输出页面展示的产品列表 lg
*/
header('Content-Type:application/json;charset=UTF-8');

require('1_init.php');
$sql = 'SELECT * FROM e_productIndex_lg';
$result = mysqli_query($conn,$sql);

$list = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($list);