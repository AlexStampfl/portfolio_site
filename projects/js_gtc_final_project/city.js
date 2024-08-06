function photosAlive() {
    //this function makes the images clickable by attaching event listeners to the images.
    //I then create a throw away paragraph tag in the html that I write my images descriptions to
    
    //air_show
    document.getElementById("air_show").addEventListener("click", function(event) {
        let paragraph = document.createElement("p"); // Create a new paragraph element
        let airshow_text = document.createTextNode("Photographer: Alex Stampfl, Location: Chicago, When: 2015 Air & Water Show"); // Create a text node
        paragraph.appendChild(airshow_text); // Append the text node to the paragraph element
        paragraph.classList.add("airshow_text"); // Assign a class to the paragraph element
        document.getElementById("airshow_info").appendChild(paragraph); // Append the paragraph element to the "airshow_info" element
    });

    
    //chicago
    document.getElementById("chicago").addEventListener("click", function(event){
        let paragraph = document.createElement("p");
        let chicago_text = document.createTextNode("Downtown Chicago");
        paragraph.appendChild(chicago_text);
        paragraph.classList.add("chicago_text");
        document.getElementById("chicagopic_info").appendChild(paragraph);
    });


    //new york
    document.getElementById("ny").addEventListener("click", function(event){
        let paragraph = document.createElement("p");
        let ny_text = document.createTextNode("Time Square, New York City");
        paragraph.appendChild(ny_text);
        paragraph.classList.add("ny_text");
        document.getElementById("ny_info").appendChild(paragraph);
    });


    document.getElementById("watarun").addEventListener("click", function(event){
        let paragraph = document.createElement("p");
        let temple = document.createTextNode("Watarun, temple next to river in capital city of Bangkok, Thailand");
        paragraph.appendChild(temple);
        paragraph.classList.add("temple");
        document.getElementById("wat").appendChild(paragraph);
    })
}

photosAlive();
