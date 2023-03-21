<?php
$to = "halilibrahimkalan.02@gmail.com";
$name = $_POST["firstname"];
$tel = $_POST["phone"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$msg = <<<MSG
$message

İsim: $name
Telefon: $tel
E-Posta: $email
MSG;
// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// Additional headers
$headers = "From: hayproject@hayproject.site\r\n";
$headers .= "Reply-To: hayproject@hayproject.site\r\n";
$headers .= "Content-Type: text/html\r\n";

// Send email
if (mail($to, $subject, $msg, $headers)) {
    echo "E-posta gönderildi.";
} else {
    echo "E-posta gönderilemedi.";
}

header("Location: index.html");
exit;
?>