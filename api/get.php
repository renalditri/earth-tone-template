<?php
include "conn.php";
$web_link = "https://linkwebnikahnya.com/";
header('Content-type: application/json');
header("Access-Control-Allow-Origin: $web_link");

$query = mysqli_query($mysql, 'SELECT * FROM ucapan ORDER BY id DESC');
while($data = mysqli_fetch_array($query)){
    $kirim[] = array(
        'id' => $data['id'],
        'nama' => $data['nama'],
        'kerabat' => $data['kerabat'],
        'pesan' => $data['pesan']
    );
}

echo json_encode($kirim);
?>