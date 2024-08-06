<?php
    include("header.php");
    require_once("database.php");
?>
<h1>Get a Customized Home Workout</h1>
<p>Fill out the form for a customized workout</p>
<br>
<form id="customize" method="post" action="form.php">
    <h3>Personal Information</h3>
    <br>
    <label>First Name</label>
    <input type="text" placeholder="First Name" name="firstname" require></input>
    <label>Last Name</label>
    <input type="text" placeholder="Last Name" name="lastname" require></input>
    <br>
    <label>Email</label>
    <input type="email" placeholder="youremail@gmail.com" name="email" require></input>
    <label>Phone Number</label>
    <input type="text" placeholder="262-555-2575" require></input>
    <br>
    <label>Weight</label>
    <input type="text" require></input>
    <label>Height</label>
    <input type="text" require></input>
    <br>
    <label>BMI (Body Mass Index)</label>
    <input type="text"></input>
    <br>
    <label>BMR (Basal Metabolic Rate)</label>
    <input type="text"></input>
    <br>
    <br>
    <hr>
    <h3>Equipment You Have At Home</h3>
    <br>
    <div id="checkbox">
    <input type="checkbox" id="dumbbells" name="dumbbells" class="checkbox"></input>
    <label for="dumbbells">Dumbbells</label><br>
    <input type="checkbox" id="incline_bench" name="incline_bench" class="checkbox"></input>
    <label for="incline_bench">Incline Bench</label><br>
    <input type="checkbox" id="barbell" name="barbell" class="checkbox"></input>
    <label for="barbell">Barbell</label><br>
    <input type="checkbox" id="power_tower" name="power_tower" class="checkbox"></input>
    <label for="power_tower">Power Tower</label><br>
    <input type="checkbox" id="squat_rack" name="squat_rack" class="checkbox"></input>
    <label for="squat_rack">Squat Rack</label><br>
    <input type="checkbox" id="yoga_mat" name="yoga_mat" class="checkbox"></input>
    <label for="yoga_mat">Yoga Mat</label>
    </div>
    <br>
    <br>
    <hr>
    <h3>Select Your Workout Type</h3>
    <br>
    <div id="radio">
    <input type="radio" id="HITT" name="radio"></input><label>HIT (High Intensity Training)</label>
    <br>
    <input type="radio" id="flex" name="radio"></input><label>Flexibility Training</label>
    <br>
    <input type="radio" id="resist" name="radio"></input><label>Resistance Training<label>
    <br>
    <input type="radio" id="yoga" name="radio"></input><label>Yoga & Pilates</label>
    </div>
    <br>
    <br>
    <hr>
    <h3>Medical Conditions</h3>
    <label>If you have any serious medical conditions, surgeries or accidents, please talk to your doctor before starting our programs</label>
    <br>
    <br>
    <textarea placeholder="Please list any medical conditions you currently have:"></textarea>
    <br>
    <input type="submit" id="submit" name="submit"></input>
    <br>



</form>
<?php
    include("footer.php");
?>