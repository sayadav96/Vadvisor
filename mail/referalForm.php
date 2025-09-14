<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

include('vendor/autoload.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    // Extract data from the POST request
    $yourName = $data["yourName"] ?? '';
    $yourNumber = $data["yourNumber"] ?? '';
    $yourEmail = $data["yourEmail"] ?? '';
    $referralName = $data["referralName"] ?? '';
    $referralNumber = $data["referralNumber"] ?? '';
    $referralEmail = $data["referralEmail"] ?? '';

    // Compose the email using template.html
    $variables = [
        'yourName' => $yourName,
        'yourNumber' => $yourNumber,
        'yourEmail' => $yourEmail,
        'referralName' => $referralName,
        'referralNumber' => $referralNumber,
        'referralEmail' => $referralEmail
    ];

    $template = file_get_contents("./referalTemplate.html");
    foreach ($variables as $key => $value) {
        $template = str_replace('{{ ' . $key . ' }}', $value, $template);
    }

    // Send the email
    $result = smtp_mailer('inquiry.vadvisoroverseas@gmail.com', 'New Referral Submission', $template);

    // Respond to the frontend
    $response = ["sent" => ($result === 'Sent'), "message" => 'Thank you for reaching out to us, our team will get back to you shortly'];
    echo json_encode($response);
} else {
    echo json_encode(["sent" => false, "message" => "Oops! Something went wrong, please try again."]);
}

function smtp_mailer($to, $subject, $msg)
{
    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->Host = "smtp.gmail.com"; // Use Hostinger SMTP if needed
    $mail->Port = 587;
    $mail->IsHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Username = "inquiry.vadvisoroverseas@gmail.com"; // Update with actual email
    $mail->Password = "lthfoopwjbkwwnzv"; // Use an App Password, not direct password
    $mail->SetFrom("inquiry.vadvisoroverseas@gmail.com");
    $mail->Subject = $subject;
    $mail->Body = $msg;
    $mail->AddAddress($to);
    $mail->SMTPOptions = ['ssl' => [
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => false
    ]];

    if (!$mail->Send()) {
        return $mail->ErrorInfo;
    } else {
        return 'Sent';
    }
}

?>
