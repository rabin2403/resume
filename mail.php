<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $query = "";
    $query = $_POST['query'];

    $to = "$name,mahato.rabindra.rm@gmail.com";
    $subject = "New Entry";
    $message = "Message from : $name.\n Email : $email .\n Number from : $number.\n Qyery from : $query.\n";
    $from = "rabindra2402@gmail.com";

    $header ="From : $from";

    if(mail($to,$subject,$message,$header)){
        header("Location:index.html");
    }else{
        echo "Error";
    }


?>