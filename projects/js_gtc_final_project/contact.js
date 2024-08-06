/* function checkFormFields(){
    const firstname = document.forms[0].elements["firstname"].value;
    const lastname = document.forms[0].elements["lastname"].value;
    const email = document.forms[0].elements["email"].value;
    const number = document.forms[0].elements["number"].value;

    let submitbtn = document.getElementById("eventsubmitbtn");
    if (firstname !== "" && lastname !== "" && email !== "" && number !== ""){
        submitbtn.disabled = false;
    } else {
        submitbtn.disabled = true;
    }
}
 */

//replace checkFormFields() with jQuery
function checkFormFields() {
    const firstname = $("form:eq(0) [name='firstname']").val();
    const lastname = $("form:eq(0) [name='lastname']").val();
    const email = $("form:eq(0) [name='email']").val();
    const number = $("form:eq(0) [name='number']").val();
  
    let submitbtn = $("#eventsubmitbtn");
    if (firstname !== "" && lastname !== "" && email !== "" && number !== "") {
      submitbtn.prop("disabled", false);
    } else {
      submitbtn.prop("disabled", true);
    }
  }
  

function submitEventListener(){
    let submitbtn = document.getElementById("eventsubmitbtn");
   document.forms[0].addEventListener("input", function(event) {
       checkFormFields();
    });
    submitbtn.addEventListener('click', function(event){
        let form = document.forms[0];
        if (form.checkValidity()){
            let reply = document.getElementById('gigForm').innerHTML = '<p>Thanks for contacting us, we will get back to you asap!</p><a class="home-button" href="index.html">Home</a>';
            event.preventDefault();
        } else {
            form.reportValidity();
        }
      });
    }
   submitEventListener();



function toArray(){
   document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get user selections
    const checkboxes = document.getElementsByName('options');
    const selectedOptions = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedOptions.push(checkboxes[i].value);
      }
    }
    // Convert selections to an array or object
    const feedbackData = {
      options: selectedOptions
    };
    // Alternatively, you can use an array instead of an object
    // const feedbackData = selectedOptions;
    
    // Convert array or object to a string
    const feedbackDataString = JSON.stringify(feedbackData);
    
    // Log the feedback data string
    console.log(feedbackDataString);

    // Log the selectedOptions array
     console.log(selectedOptions);
  });
}
  
