<?php
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize and collect form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate the data
    if(!empty($name) && !empty($email) && !empty($message)) {
        if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Send the email
            $to = "mohsade2000@gmail.com"; // Replace with your email
            $subject = "New message from $name";
            $body = "Email: $email\n\nMessage:\n$message";
            $headers = "From: no-reply@example.com";

            if(mail($to, $subject, $body, $headers)) {
                echo "Message sent successfully!";
            } else {
                echo "Error sending message.";
            }
        } else {
            echo "Invalid email format.";
        }
    } else {
        echo "Please fill out all fields.";
    }
} else {
    echo "Invalid request method.";
}
?>
