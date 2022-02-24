<?php
$host = "localhost";
$user = "user";
$pass = "";
$dbname = "wedding";

$mysql = mysqli_connect($host, $user, $pass, $dbname);
if(!$mysql){
    die("Koneksi tidak berhasil");
}
?>