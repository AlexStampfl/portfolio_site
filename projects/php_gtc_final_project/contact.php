<?php
    include("header.php");
    //require_once("database.php");
?>
<h1>Contact</h1>
<div id="formborder">
<form method="post" action="form.php">
    <textarea placeholder="write your message here"></textarea>
    <br>
    <label>First Name</label>
    <br>
    <input type="text" placeholder="First Name" name="firstname" require></input>
    <br>
    <label>Last Name</label>
    <br>
    <input type="text" placeholder="Last Name"name="lastname" require></input>
    <br>
    <label>Email</label>
    <br>
    <input type="email" placeholder="name@gmail.com" name="email" require></input>
    <br>
    <input type="submit"></input>
</form>
</div>

<?php
    include("footer.php");
?>