<?php

$summa = isset($_POST["summa"]) ? $_POST["summa"] : '';
$avans = isset($_POST["avans"]) ? $_POST["avans"] : '';
$srok = isset($_POST["srok"]) ? $_POST["srok"] : '';

$phone = isset($_POST["phone"]) ? $_POST["phone"] : '';
$email = isset($_POST["email"]) ? $_POST["email"] : '';
$name = isset($_POST["name"]) ? $_POST["name"] : '';
$message = isset($_POST["message"]) ? $_POST["message"] : '';

$to = "mr.pokeman@mail.ru";
$subject = "От поситителя сайта";
$text =  "Имя: $name \nТелефон: $phone \nСумма: $summa \nСрок: $srok \nАванс: $avans";

$header = "Content-type: text/html; charset=utf-8\r\n";
$header .= "MIME-Version: 1.0\r\n";

mail($to, $subject, $text, $headers);
?>