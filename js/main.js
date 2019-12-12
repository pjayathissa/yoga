// Scroll to a certain element

function scrollSmoothly(id) {
document.querySelector(id).scrollIntoView({ 
  behavior: 'smooth' 
});
}