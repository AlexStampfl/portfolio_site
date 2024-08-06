// /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

// document.addEventListener('DOMContentLoaded', function() {
//   const hamburgerButton = document.getElementById('hamburger-button');
//   const myLinks = document.getElementById('myLinks');

//   hamburgerButton.addEventListener('click', function() {
//       if (myLinks.style.display === 'flex') {
//           myLinks.style.display = 'none';
//       } else {
//           myLinks.style.display = 'flex';
//       }
//   });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const hamburgerButton = document.getElementById('hamburger-button');
//     const myLinks = document.getElementById('myLinks');

//     function toggleMenu() {
//         if (myLinks.style.display === 'flex') {
//             myLinks.style.display = 'none';
//         } else {
//             myLinks.style.display = 'flex';
//         }
//     }

//     function adjustMenuDisplay() {
//         if (window.innerWidth > 500) {
//             myLinks.style.display = 'flex'; // Show menu items on larger screens
//         } else {
//             myLinks.style.display = 'none'; // Hide menu items on smaller screens
//         }
//     }

//     hamburgerButton.addEventListener('click', toggleMenu);
//     window.addEventListener('resize', adjustMenuDisplay);

//     // Initial check
//     adjustMenuDisplay();
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const hamburgerButton = document.getElementById('hamburger-button');
//     const myLinks = document.getElementById('myLinks');
//     let isMenuVisible = false; // Track the visibility of the menu

//     function toggleMenu() {
//         if (isMenuVisible) {
//             myLinks.style.display = 'none';
//         } else {
//             myLinks.style.display = 'flex';
//         }
//         isMenuVisible = !isMenuVisible;
//     }

//     function adjustMenuDisplay() {
//         if (window.innerWidth > 500) {
//             myLinks.style.display = 'flex'; // Show menu items on larger screens
//             isMenuVisible = false; // Ensure the menu visibility is tracked correctly
//         } else {
//             myLinks.style.display = 'none'; // Hide menu items on smaller screens
//             isMenuVisible = false; // Reset the menu visibility
//         }
//     }

//     hamburgerButton.addEventListener('click', toggleMenu);
//     window.addEventListener('resize', adjustMenuDisplay);

//     // Initial check
//     adjustMenuDisplay();
// });

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('hamburger-button');
    const myLinks = document.getElementById('myLinks');
    let isMenuVisible = false; // Track the visibility of the menu

    function toggleMenu() {
        if (isMenuVisible) {
            myLinks.style.display = 'none';
        } else {
            myLinks.style.display = 'flex';
        }
        isMenuVisible = !isMenuVisible;
    }

    function adjustMenuDisplay() {
        if (window.innerWidth > 500) {
            myLinks.style.display = 'flex'; // Show menu items on larger screens
            isMenuVisible = false; // Ensure the menu visibility is tracked correctly
        } else {
            myLinks.style.display = 'none'; // Hide menu items on smaller screens
            isMenuVisible = false; // Reset the menu visibility
        }
    }

    hamburgerButton.addEventListener('click', toggleMenu);
    window.addEventListener('resize', adjustMenuDisplay);

    // Initial check
    adjustMenuDisplay();
});



