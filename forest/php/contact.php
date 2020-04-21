<?php
//连接数据的信息
$mysqli = @new mysqli('cdb-9etplsr3.gz.tencentcdb.com:10099', 'root', 'asdyuan2008', 'UAV');
if ($mysqli->connect_errno) {
	die('Connect error:' . $mysqli->connect_error);
}
 else{
	//echo '连接成功！';
}
$mysqli->set_charset('utf8');