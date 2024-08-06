// /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

document.addEventListener('DOMContentLoaded', function() {
  const hamburgerButton = document.getElementById('hamburger-button');
  const myLinks = document.getElementById('myLinks');

  hamburgerButton.addEventListener('click', function() {
      if (myLinks.style.display === 'flex') {
          myLinks.style.display = 'none';
      } else {
          myLinks.style.display = 'flex';
      }
  });
});



