function processData(data) {

  //retrieve the URL of the first photo in the response data to the photoURL variable
  var photoUrl = data.items[0].media.m;

  //Create an <img> element in your HTML code and give it an ID:
  var imgElement = document.getElementById("dog-photo");

  //If the element is found, we update its src attribute with the photo URL. 
  //If the element is not found (i.e. getElementById returns null), we print an error message to the console.
  if (imgElement) {
    imgElement.src = photoUrl;
  } else {
    console.error("Cannot find img element with ID 'dog-photo'");
  }
}
processData();

//make sure that the <img> tag is defined before the JavaScript code that updates its src attribute.
