export function welcomePrompt(){
    let person = prompt("Enter thy name:");
    localStorage.setItem('fname', person);

    let storedPerson = localStorage.getItem('fname');
    document.getElementById('fname').innerHTML = "Hey " + storedPerson + ", welcome!";
}


