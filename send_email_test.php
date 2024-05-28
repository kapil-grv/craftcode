<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer autoload file
require 'vendor/autoload.php';

// Retrieve command-line arguments
$name = $argv[1] ?? '';
$email = $argv[2] ?? '';
$company = $argv[3] ?? '';
$message = $argv[4] ?? '';

// Debugging output
echo "Name: $name\n";
echo "Email: $email\n";
echo "Company: $company\n";
echo "Message: $message\n";

// Validate email address
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Email address is valid\n";
    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host = 'sg2plzcpnl490951.prod.sin2.secureserver.net '; // Your SMTP server hostname
        $mail->SMTPAuth = true;
        $mail->Username = 'contact@craftcode.in'; // Your SMTP username
        $mail->Password = 'Mambo69$86'; // Your SMTP password
        $mail->Port = 587; // Your SMTP port (usually 587 for TLS/STARTTLS)

        //Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('kapilgrv@gmail.com', 'Contact Page'); // Replace with recipient email address

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Contact Form Submission';
        $mail->Body = "Name: $name<br>Email: $email<br>Company: $company<br>Message: $message";

        // Send email
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }
} else {
    echo 'Invalid email address';
}
?>

