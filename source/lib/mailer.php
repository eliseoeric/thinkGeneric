<?php 

require_once('template.php');

if($_SERVER['REQUEST_METHOD'] == 'POST'){
  $fullName = strip_tags(trim($_POST['fullName']));
  $fullName = removeLineBreak($fullName);
  // $company = strip_tags(trim($_POST['company']));
  // $company = removeLineBreak($company);
  $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
  $phone = strip_tags(trim($_POST['phone']));
  $phone = removeLineBreak($phone);
  $website = strip_tags(trim($_POST['website']));
  $message = trim($_POST['message']);

  if(empty($fullName) OR empty($message) OR empty($phone) or !filter_var($email, FILTER_VALIDATE_EMAIL)){
    if(empty($fullName)){
      $errorCode = 1;
      echo "Please enter a name.";
      header("HTTP/1.0 400 Bad Request");
    } else if (empty($message)){
      $errorCode = 2;
      echo "It doesn't look like you left a message! Please tell us more about your project!";
      header("HTTP/1.0 400 Bad Request");
    } else if ($phone){
      $errorCode = 3;
      echo "Whoops! We need a phone number to contact you.";
      header("HTTP/1.0 400 Bad Request");
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
      $errorCode = 4;
      echo "That doesn't look like a valid email...";
      header("HTTP/1.0 400 Bad Request");
    }
    exit;
  }

  $recipient = "eric@thinkgeneric.com, info@thinkgeneric, gene@thinkgeneric.com";
  $subject = "Think Generic Website Inquiry";

  $emailContents = build_the_email($fullName, $email, $phone, $website, $message);

  $emailHeaders = "From: $fullName <$email>";
  $emailHeaders .= "MIME-Version: 1.0\r\n";
  $emailHeaders .= "Content-Type: text/html; charset=utf-8\r\n";

  if(mail($recipient, $subject, $emailContents, $emailHeaders)){
    header("HTTP/1.0 200 OK");
    echo "Thank you!  We will get back to you shortly.";
  } else {
    header("HTTP/1.0 500 Internal Server Error");
    echo "Oops! Something went wrong on our end and we couldn't send your message.";
  }
} else {
  header("HTTP/1.0 403 Forbidden");
  echo "There was a problem with your submission. Please try again.";
}

function removeLineBreak($name){
  $name = str_replace(array("\r","\n"), array(" ", " "), $name);
  return $name;
}
 ?>