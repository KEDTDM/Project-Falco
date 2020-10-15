<?php
include 'database2.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	
	if(trim($request['first_name']) === '' || trim($request['last_name']) === '' || trim($request['email']) === '' )
	{
		return http_response_code(400);
	}
    $first_name = mysqli_real_escape_string($db, trim($request['first_name']));
    $last_name = mysqli_real_escape_string($db, trim($request['last_name']));
    $email = mysqli_real_escape_string($db, trim($request['email']));
	$sql = "INSERT INTO data (id,first_name,last_name,email) VALUES (null,'$first_name','$last_name','$email')";
	if($db->query($sql))
	{
		http_response_code(201);
		$data = [
        'id' => mysqli_insert_id($db), 
        'first_name' => $first_name,
        'last_name' => $last_name,
        'email' => $email,
        ];
		echo json_encode($data);
	}
	else
	{
		http_response_code(422);
	}
}
