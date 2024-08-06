<?php 
require_once("db_getdataFunctions.php");
//get the customer data
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];

//validate inputs
if ($firstname == null || $lastname == null || $email == null){
    echo "Invalid data. Check all fields and try again.";
} else {
    //call function to insert customer records
    addContactForm($firstname, $lastname, $email);

    //display the contact form page
    include("viewCustomer.php");
    //display page after submitting form
    //call function that retreive data from db, display on a new page
}
?>