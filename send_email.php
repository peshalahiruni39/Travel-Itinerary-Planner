<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["user_name"]));
    $email = filter_var(trim($_POST["user_email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["user_message"]);

    $recipient = "peshalahiruni39@gmail.com";
    $subject = "New Contact from Travel Planner: $name";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        echo "<script>alert('Thank you! Your message has been sent.'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('Oops! Something went wrong.'); window.history.back();</script>";
    }
} else {
    header("Location: contact.html");
}
?>