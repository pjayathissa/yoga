// Scroll to a certain element

function scrollSmoothly(id) {
document.querySelector(id).scrollIntoView({ 
  behavior: 'smooth' 
});
}

// Get the modal
var modal = document.getElementById('breath-modal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	console.log("clicked")	
	var modal = document.getElementById('breath-modal');
	console.log(event)
	console.log(event.target.closest('.w3-modal'))
	console.log(modal)
  if (event.target.closest('.w3-modal') !== null) {
  	console.log("event is a modal")
    event.target.closest('.w3-modal').style.display = "none";
  }
}