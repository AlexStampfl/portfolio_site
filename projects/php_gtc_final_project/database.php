<?php
//***MAKE SURE YOU CHANGE YOUR DBNAME, USERNAME & PASSWORD HERE
//CHECK phpmyadmin that you have yourusename_myguitarshop1 database
//and that it is named like this
    $dsn = 'mysql:host=prometheus.gtc.edu;dbname=astampfl_HomeGym';
    $username = 'astampfl';
    $password = 'GTC$@mple23';

    try {
        $db = new PDO($dsn, $username, $password);
    } catch (PDOException $e) {
        $error_message = $e->getMessage();
        include('database_error.php');
        exit();
    }
?>