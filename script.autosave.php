<?php
require_once('connection_bdd/connection_bdd.php');

$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$mail = $_POST['email'];
$phone = $_POST['phone'];
$company = $_POST['company'];
$country = $_POST['country'];
$postal = $_POST['postal'];
function addresse_mail_existe($mail){
    $sql="SELECT * FROM inscrits where mail=?";
    $bdd = connectionDb();
    $stmt= $bdd->prepare($sql);
    $stmt->bindValue(1, $mail);
    $stmt->execute();
    $don = $stmt->fetch();
    if(empty($don)){
      return false;
    }else {
      return true;
    }
}

if(addresse_mail_existe($mail)==false){
  $sql ="INSERT INTO inscrits(nom,prenom,mail,phone,company,country,postal)";
  $sql .="VALUES(?,?,?,?,?,?,?)";
  $bdd = connectionDb();
  $stmt= $bdd->prepare($sql);
  $stmt->bindValue(1, $nom);
  $stmt->bindValue(2, $prenom);
  $stmt->bindValue(3, $mail);
  $stmt->bindValue(4, $phone);
  $stmt->bindValue(5, $company);
  $stmt->bindValue(6, $country);
  $stmt->bindValue(7, $postal);
  $stmt->execute();
  sleep(2);
  header('Content-Type: application/json');
  echo json_encode("ok");
//echo json_encode(array('nom' => $nom,'prenom' => $prenom ,'mail' => $mail, 'phone' => $phone, 'company' => $company , 'country' => $country , 'postal' => $postal));
}else {
  echo json_encode("addresse_mail_existe");
}


?>