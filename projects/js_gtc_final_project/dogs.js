function clickableDogs() {
    //bella
    document.getElementById("bella").addEventListener("click", function(event) {
        let paragraph = document.createElement("p"); // Create a new paragraph element
        let woof = document.createTextNode("My Dog Bella"); // Create a text node, variable ("woof") can be called anything
        paragraph.appendChild(woof); // Append the text node to the paragraph element
        paragraph.classList.add("woof"); // Assign a class to the paragraph element
        document.getElementById("throwawayp1").appendChild(paragraph); // Append the throwaway paragraph id
    });

    //tootsie
    document.getElementById("tootsie").addEventListener("click", function(event){
        let paragraph = document.createElement("p");
        let bark = document.createTextNode("My Dog Toosie RIP");
        paragraph.appendChild(bark);
        paragraph.classList.add("bark");
        document.getElementById("throwawayp2").appendChild(paragraph);
    });

    //best friends
    document.getElementById("bestfriends").addEventListener("click", function(event){
        let paragraph = document.createElement("p");
        let doggie = document.createTextNode("Bella & Sassy are best friends");
        paragraph.appendChild(doggie);
        paragraph.classList.add("doggie");
        document.getElementById("throwawayp3").appendChild(paragraph);
    });
    
    //crazy dogs 3
    document.getElementById("crazydogs3").addEventListener("click", function(event){
        let paragraph = document.createElement("p");
        let doggo = document.createTextNode("Bella & Sassy");
        paragraph.appendChild(doggo);
        paragraph.classList.add("doggo");
        document.getElementById("throwawayp4").appendChild(paragraph);
    })
}

clickableDogs();