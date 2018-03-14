<?php

/**
*向客户端输出所有的广告轮播条信息，以JSON格式
*/
header('Content-Type:application/json;charset=UTF-8');

require('1_init.php');
$sql = 'SELECT * FROM e_carousel';
$result = mysqli_query($conn,$sql);

$list = mysqli_fetch_all($result , MYSQLI_ASSOC);
echo json_encode($list);