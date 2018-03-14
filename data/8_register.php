<?php
/***
* 获得表单数据(uname,upwd,uemail,uaddr,isAgree)并插入数据库中
  如果注册成功 返回 1
  如果注册失败 返回 2
  如果客户端没有将数据传过来 返回 3
*/
header('Content-Type:application/json;charset=UTF-8');

@$uname = $_REQUEST['uname'] or die('{"code":3,"msg":"uname required"}');
@$upwd = $_REQUEST['upwd'] or die('{"code":3,"msg":"upwd required"}');
@$uemail = $_REQUEST['uemail'] or die('{"code":3,"msg":"uemail required"}');
@$uaddr = $_REQUEST['uaddr'] or die('{"code":3,"msg":"uaddr required"}');
@$isAgree = $_REQUEST['isAgree'] or die('{"code":3,"msg":"isAgree required"}');

require("1_init.php");

$sql = "INSERT INTO e_user VALUES(NULL,'$uname',$upwd,'$uemail','$uaddr',$isAgree)";

$result = mysqli_query($conn,$sql);
$uid = mysqli_insert_id($conn);

$register = array(
  'code' => 1,
  'msg' => '注册成功',
  'uid' => $uid
);

if($result){
  echo json_encode($register);

}else{
  echo '{"code":2,"msg":"注册失败"}';
}














