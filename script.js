//your JS code here. If required.
// Get the modal
var modal = document.getElementByClassName("modal");

// Get the button that opens the modal
var btn1 = document.getElementByClassName("openModal");

// Get the <span> element that closes the modal
var btn2 = document.getElementsByClassName("close-modal")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
btn2.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}