import { welcomePrompt } from "./index.js";

window.onload = function(){
    document.getElementById("setname").addEventListener("click", function(){
        welcomePrompt();
    });
    let storedPerson = localStorage.getItem('fname');

    if (storedPerson){
        document.getElementById('fname').innerHTML = "Hey " + storedPerson + ", welcome!";
    }
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
   //lesson # 1 --> CALL THE FUNCTION!!!
   //lesson # 2 --> Keep Your FILES AND FUNCTIONS neat, thin, cohesive and separate, clearly defined!! Keep your html, css and javascript separate.
   //lesson # 3 --> 