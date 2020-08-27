<?php

use PHPMailer\PHPMailer\PHPMailer;

require_once('../../vendor/phpmailer/phpmailer/src/SMTP.php');
require_once('../../vendor/phpmailer/phpmailer/src/Exception.php');
require_once('../../vendor/phpmailer/phpmailer/src/POP3.php');
require_once('../../vendor/phpmailer/phpmailer/src/PHPMailer.php');

define('GMailUSER', '***********@gmail.com'); // utilisateur Gmail
define('GMailPWD', '***************'); // Mot de passe Gmail

function smtpMailer($to, $from, $from_name, $subject, $body) {
	$mail = new PHPMailer();  // Cree un nouvel objet PHPMailer
	$mail->IsSMTP(); // active SMTP
	$mail->SMTPDebug = 0;  // debogage: 1 = Erreurs et messages, 2 = messages seulement
	$mail->SMTPAuth = true;  // Authentification SMTP active
	$mail->SMTPSecure = 'ssl'; // Gmail REQUIERT Le transfert securise
	$mail->Host = 'smtp.gmail.com';
	$mail->Port = 465;
	$mail->Username = GMailUSER;
	$mail->Password = GMailPWD;
	$mail->SetFrom($from, $from_name);
	$mail->Subject = $subject;
	$mail->Body = $body;
	$mail->AddAddress($to);
	if(!$mail->Send()) {
		return 'Mail error: '.$mail->ErrorInfo;
	} else {
		return true;
	}
}

if(isset($_POST['envoi'])) {
		$result = smtpmailer('***********@gmail.com', $_POST['email'], "$_POST[email]<$_POST[email]>", 'Depuis le portfolio', $_POST['message']);
		if (true !== $result)
		{
			// erreur -- traiter l'erreur
			echo $result;
		} else {
			header("Location: http://olmedo-vera.fr/#0");
		}
	
}

?>
