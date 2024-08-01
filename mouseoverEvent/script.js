// Function to handle mouseover event
function handleMouseOverEvent(event) {
    const img = event.target; // Get the image that is being hovered
    img.src = img.getAttribute('data-hover'); // Change the source to the hover image
}

// Function to handle mouseout event
function handleMouseOutEvent(event) {
    const img = event.target; // Get the image that is no longer being hovered
    img.src = img.getAttribute('data-original'); // Change the source back to the original image
}

// Adding mouseover and mouseout event listeners to all images
document.querySelectorAll('.images img').forEach(img => {
    img.setAttribute('data-original', img.src); // Save the original image source
    img.addEventListener('mouseover', handleMouseOverEvent);
    img.addEventListener('mouseout', handleMouseOutEvent);
});
