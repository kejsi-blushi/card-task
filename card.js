function openPopup() {
  var popup = document.querySelector(".popup");
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

//Another way (remove onclick attribute in button element)
// var openButton = document.getElementById("open-button");
// openButton.addEventListener("click", function(){
//   document.getElementById("popup").style.display = "flex";
// });

// var closeButton = document.getElementById("close-button");
// closeButton.addEventListener("click", function(){
//   document.getElementById("popup").style.display = "none";
// });

// Another way (using predifined functions and remove onclick attribute in button element)
// var openButton = document.getElementById("open-button");
// openButton.addEventListener("click", openPopup);

// var closeButton = document.getElementById("close-button");
// closeButton.addEventListener("click", closePopup);
