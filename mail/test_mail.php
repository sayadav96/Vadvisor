<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

include('vendor/autoload.php');

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Host = "smtp.gmail.com";
$mail->Port = 587;
$mail->IsHTML(true);
$mail->CharSet = 'UTF-8';
$mail->Username = "inquiry.vadvisoroverseas@gmail.com";
$mail->Password = "lthfoopwjbkwwnzv";
$mail->SetFrom("inquiry.vadvisoroverseas@gmail.com");
$mail->Subject = "Test Email by Arjun";
$mail->Body = "This is a test email from Hostinger server";
$mail->AddAddress("development@syspreedigital.com"); // Change to your real email

if (!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Test Email Sent!";
}
?>
