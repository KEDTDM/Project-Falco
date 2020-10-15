<?php
require 'database2.php';
$postdata = file_get_contents('php://input');

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata, true);
    if (trim($request['first_name']) === '' || trim($request['last_name']) === '' || trim($request['email']) === '') {
        return http_response_code(400);
    }
    $id = mysqli_real_escape_string($db, (int)$request['id']);
    $first_name = mysqli_real_escape_string($db, trim($request['first_name']));
    $last_name = mysqli_real_escape_string($db, trim($request['last_name']));
    $email = mysqli_real_escape_string($db, trim($request['email']));
    $sql = "UPDATE data SET first_name='$first_name',last_name='$last_name',email='$email' WHERE id = $id";

    if ($db->query($sql)) {
        http_response_code(204);
    } else {
        return http_response_code(422);
    }
}
