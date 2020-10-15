<?php
include 'database2.php';
$data = [];

$sql = "SELECT * FROM data";

if($result = $db->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$data[$i]['id'] = $row['id'];
		$data[$i]['first_name'] = $row['first_name'];
        $data[$i]['last_name'] = $row['last_name'];
        $data[$i]['email'] = $row['email'];
		$i++;
	}
	echo json_encode($data);
}
else
{
	http_response_code(404);
}