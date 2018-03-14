<?php
/*
* 接收用户名和密码 如果存在 返回1和用户ID 如果不存在该用户返回2 如果没有提供用户名和密码
*/
header('Content-Type:application/json;charset=UTF-8');
@$uname = $_REQUEST['uname'] or die('{"code":3,"msg":"请输入用户名"}');
@$upwd = $_REQUEST['upwd'] or die('{"code":3,"msg":"请输入密码"}');

require('1_init.php');

$sql = "SELECT uid FROM e_user WHERE uname = '$uname' AND upwd = $upwd;";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);

if($row === null){
  echo '{"code":2,"msg":"没有该用户名,请注册"}';
}else{
  $uid = $row[0];
  echo '{"code":1,"uid":'.$uid.'}';
}

