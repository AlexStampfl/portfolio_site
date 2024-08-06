//create photo class, and create photo objects in the class
class Photo {
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    seePhoto(){
        //console.log(`This is ${this.name} in ${this.location}`);
        const objElement = document.getElementById("obj");
        objElement.innerHTML += `<br>This is ${this.name} in ${this.location}`;
        objElement.innerHTML += `<br>This is ${JSON.stringify(this)}<br>`;
    }   
}

function photoInstance(){
//create new instance of the photo object
const photo1 = new Photo("Air and Water Show", "Chicago");
photo1.seePhoto();
const photo2 = new Photo("Michigan Ave", "Chicago");
photo2.seePhoto();
const photo3 = new Photo("Time Square", "New York");
photo3.seePhoto();
const photo4 = new Photo("Lilly", "Japan");
photo4.seePhoto();
const photo5 = new Photo("Sunflower", "Pleasant Prairie");
photo5.seePhoto();
}
photoInstance();


function clickPhoto(){
//air and water show image
document.getElementById("objair").addEventListener("click", function(event){// get the image id
    const airobj = document.getElementById("pair");//creates a <p> tag to be overwritten
    const photo1 = new Photo("Air and Water Show", "Chicago");//create new photo object instance
    airobj.innerHTML = `This is ${photo1.name} in ${photo1.location}`;
});
//chicago downtown image
document.getElementById("objchi").addEventListener("click", function(event){
    const chi_des = document.getElementById("chi_descr");
    const photo2 = new Photo("Michigan Ave", "Chicago");
    chi_des.innerHTML = `This is ${photo2.name} in ${photo2.location}`;
    });
//time square new york image
document.getElementById("time_square").addEventListener("click", function(event){
    const timesquare = document.getElementById("ts");
    const photo3 = new Photo("Time Square", "New York");
    timesquare.innerHTML = `This is ${photo3.name} in ${photo3.location}`;
    });
//lilly flower
document.getElementById("lilly").addEventListener("click", function(event){
    const lil = document.getElementById("lillyp");
    const photo4 = new Photo("Lilly", "Japan");
    lil.innerHTML = `This is ${photo4.name} in ${photo4.location}`;
    });
//sunflower
document.getElementById("sunflower").addEventListener("click", function(event){
    const sunf = document.getElementById("sunf");
    const photo5 = new Photo("Sunflower", "Pleasant Prairie");
    sunf.innerHTML = `This is ${photo5.name} in ${photo5.location}`;
    });
}
clickPhoto();

function rateFavorite(){
    let favorites = []; // Array to store selected favorites
    let count = 0; // Counter to keep track of number of selections

    // Map checkbox values to image names
    const imageMap = {
        option1: " Air and Water Show ",
        option2: " Michigan Ave ",
        option3: " Time Square ",
        option4: " Lilly ",
        option5: " Sunflower "
    };

    document.getElementById("submitBtn").addEventListener("click", function() {
        const checkboxes = document.getElementsByName("options");

        // Loop through checkboxes
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                // If checkbox is checked, add selected value to favorites array
                const index = count + 1;
                favorites.splice(0, 0, index + " . " + imageMap[checkboxes[i].value]); // Insert at beginning of array

                // Disable checkbox
                checkboxes[i].disabled = true;
                checkboxes[i].parentNode.style.color = 'gray'; // Add style to gray out the text

                // Increment counter
                count++;

                // If all three favorites are selected, disable remaining checkboxes
                if (count === 3) {
                    for (let j = 0; j < checkboxes.length; j++) {
                        checkboxes[j].disabled = true;
                        checkboxes[j].parentNode.style.color = 'gray'; // Add style to gray out the text
                    }
                    break;
                }
            }
        }
        // If all three favorites are selected, generate JSON data and display
        if (count === 3) {
            const jsonData = favorites.join("\n"); // Use join() method to concatenate array elements with line break
            //console.log(`Your Top Three Favorites Were:\n${jsonData}`); // You can modify this to send the data to server or perform other operations
            document.getElementById("finalresults").innerHTML = `Your Top Three Favorites Were:\n${jsonData}`;
        }
    });
}
rateFavorite();
