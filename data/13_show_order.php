<?php
header("Content-type:application/json;charset=UTF-8");

@$oid = $_REQUEST['oid'] or die('{"code":2,"msg":"oid required"}');

require("1_init.php");

$sql = "SELECT * FROM e_order WHERE oid = $oid";
$result = mysqli_query($conn,$sql);
$list = mysqli_fetch_all($result,1);

if($list){
  echo json_encode($list);
}else{
  echo '{"code":"3","msg":"查询商品失败"}';
}





