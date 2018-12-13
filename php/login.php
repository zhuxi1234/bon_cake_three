<?php
	header("Content-type:text/html;charset=utf-8");
//一、接收
	$vipTel = $_GET['vipTel'];
	$vippw = $_GET['vippw'];
	//二、处理
	//1、连接数据库服务器
	$conn=mysql_connect("localhost","root","root");
	if(!$conn){
		// die("连接失败".mysql_error());
	}else{
		//2、选择数据库
		mysql_select_db("mydb1120",$conn);
		//3、执行SQL语句
		$sqlstr="select * from bon_caket where vipTel='$vipTel'";
		$result=mysql_query($sqlstr,$conn);
		mysql_close($conn);
		if(mysql_num_rows($result)==0){
			echo "0";
		}else{
			echo "1";
		}
	}
?>