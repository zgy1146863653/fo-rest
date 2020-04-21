<?php
	require('contact.php');
	
	$do=$_GET['do'];//获取请求
	switch ($do) {
		case '1'://一周温湿度测量
			$sql="select * from forest_data";
			$mysqli_result=$mysqli->query($sql);
			if($mysqli_result&&$mysqli_result->num_rows>0){
			while($row=$mysqli_result->fetch_assoc()){
			$rows[]=$row;
			//$rows=mysqli_fetch_all($mysqli_result,MYSQLI_ASSOC); 
			}
		};
			//print_r($rows);
			echo json_encode($rows);//将获取到的数组转换成json对象,通过json的形式从后端传到前端
			break;
		
		case '2':
			$sql="select * from forest_data_year";
			$mysqli_result=$mysqli->query($sql);
			if($mysqli_result&&$mysqli_result->num_rows>0){
			while($row=$mysqli_result->fetch_assoc()){
			$rows[]=$row;
			//$rows=mysqli_fetch_all($mysqli_result,MYSQLI_ASSOC); 
			}
		};
			//print_r($rows);
			echo json_encode($rows);//将获取到的数组转换成json对象,通过json的形式从后端传到前端
			break;
		default:
			echo '返回错误！';
			break;
	}

