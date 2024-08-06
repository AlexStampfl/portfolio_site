function calculateTime(){
document.getElementById("dateForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Get input values
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    // Get current date
    var currentDate = new Date();
    // Calculate time elapsed
    var elapsedYear = currentDate.getFullYear() - year;
    var elapsedMonth = currentDate.getMonth() + 1 - month;
    var elapsedDay = currentDate.getDate() - day;
    // Convert day to month if negative
    if (elapsedDay < 0) {
      elapsedMonth--;
      elapsedDay += new Date(year, month, 0).getDate();
    }
    // Convert month to year if negative
    if (elapsedMonth < 0) {
      elapsedYear--;
      elapsedMonth += 12;
    }
    // Display result
    document.getElementById("result").textContent = "Time elapsed: " + elapsedYear + " years, " + elapsedMonth + " months, " + elapsedDay + " days.";
  });
}
calculateTime();

function jsToJQ(){
  //converting this javascript to jquery:
  
  /* document.getElementById("timemaincontainer").style.color = "darkorange";
  document.getElementById("dateForm").style.color = "darkred";
  document.getElementById("result").style.color = "saddlebrown"; */

  $("#timemaincontainer").css("color", "darkorange");
  $("#dateForm").css("color", "darkred");
  $("#result").css("color", "saddlebrown");
  }

jsToJQ();