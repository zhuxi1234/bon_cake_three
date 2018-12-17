<?php
	header("Content-type:text/html;charset=utf-8");
	//一、接收
	$vipTel = $_GET['vipTel'];
	$vippw = $_GET['vippw'];
	//二、处理
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		die("连接失败");
	//三、响应
	}else{
		//2、选择数据库
		mysql_select_db("mydb1120",$conn);
		//3、执行SQL语句
		//3.1 查询
		$sqlstr="select * from bon_caket where vipTel='$vipTel'";
		$result = mysql_query($sqlstr,$conn);//执行查询SQL语句，返回值是表格
//		$rows = mysql_num_rows($result);//返回$result表格有几行。
		if(mysql_num_rows($result)==0){
			//3.2保存
			$sql="insert into bon_caket(vipTel,vippw)
						values('$vipTel','$vippw')";
			$result = mysql_query($sql,$conn);	
			//4、关闭数据库
			mysql_close($conn);
			if($result==1){			
			//三、响应
			echo"1";
		}else{
			echo"0";
		}
	}else{
		echo"1";
	}
}
?>