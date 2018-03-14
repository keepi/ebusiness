<?php
/*
* 接受产品分组编号 输出商品
*/
header("Content-Type:application/json;charset=UTF-8");

@$group = $_REQUEST['group'] or die('{"code":2,"msg":"groupId required"}');

require('1_init.php');

$sql = "SELECT * FROM e_product WHERE pgroup = $group";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_all($result,1);

echo json_encode($row);



