<?php
include "conn.php";
  header('Access-Control-Allow-Origin: https://fadlannadya.xyz/');

  $nama = isset($_POST['nama']) ? $_POST['nama'] : "";
  $kerabat = isset($_POST['kerabat']) ? $_POST['kerabat'] : "";
  $pesan = isset($_POST['pesan']) ? $_POST['pesan'] : "";

  $query = mysqli_query($mysql, "INSERT INTO ucapan (`nama`, `kerabat`, `pesan`) 
  VALUE ('".$nama."', '".$kerabat."', '".$pesan."')");

  echo $query;
?>