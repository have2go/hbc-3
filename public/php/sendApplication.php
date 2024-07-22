<?php
	$procedure = $_POST['procedure'];
	$size = $_POST['size'];
	$weight = $_POST['weight'];
	$type = $_POST['type'];
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];

	$to = "boxadmail@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
	Выбранная процедура: $procedure /n
	Габариты груза: $size /n
	Вес: $weight /n
	Тип: $type /n
    Имя: $name /n
    Телефон: $phone /n
    Почта: $email";	
	mail($to, $subject, $msg, "From: $to ");

?>