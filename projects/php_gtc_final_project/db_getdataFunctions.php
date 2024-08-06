<?php
require_once("database.php");
function addContactForm($firstname, $lastname, $email){
    //add contact form to the database
    $query = 'INSERT INTO ContactForm(FirstName, LastName, Email)
            VALUES(:FirstName, :LastName, :Email)';
    
    $statement = $GLOBALS['db']->prepare($query);
    $statement -> bindValue(':FirstName', $firstname);
    $statement -> bindValue(':LastName', $lastname);
    $statement -> bindValue(':Email', $email);
    $statement -> execute();
    $statement -> closeCursor();
}
//function to retreive data from db, and display it
function getCustomers(){
    $queryAllCustomers = 'SELECT * FROM ContactForm';
    $statement2 = $GLOBALS['db']->prepare($queryAllCustomers);
    $statement2->execute();
    $customers = $statement2->fetchAll();
    $statement2->closeCursor();
    return $customers;
}
?>