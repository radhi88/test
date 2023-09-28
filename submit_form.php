<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set the recipient email address
    $to = "radhi-ksa@hotmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";

    // Construct the email content
    $emailContent = "Name: $name\n";
    $emailContent .= "Email: $email\n\n";
    $emailContent .= "Message:\n$message\n";

    // Set the email headers
    $headers = "From: $name <$email>";

    // Send the email
    if (mail($to, $subject, $emailContent, $headers)) {
        echo "Thank you for contacting us. We will get back to you soon!";
    } else {
        echo "Failed to send the email. Please try again later.";
    }
}
?>
