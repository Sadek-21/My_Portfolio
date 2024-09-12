<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Validate inputs
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Set the recipient email address
        $to = "mohsade2000@gmail.com";  // Change this to your email
        $subject = "New Feedback from $name";

        // Email content
        $body = "Name: $name\nEmail: $email\nMessage: $message";

        // Send the email
        if (mail($to, $subject, $body)) {
            echo "Message sent successfully!";
        } else {
            echo "Message could not be sent. Please try again later.";
        }
    } else {
        echo "Please fill out all the fields.";
    }
}
?>
