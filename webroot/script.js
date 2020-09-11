// Grabbing all images which are not active
const images = document.querySelectorAll('.portfolio_image');

// Grabbing the active image
const activeImage = document.querySelector('.image_slider_active');

// Handling the slider
const slider = (e) => {
  const clickedImage = e.target;
  if (clickedImage) {
    activeImage.src = clickedImage.src;
  }
}

// Event listner
images.forEach(image => image.addEventListener(('click'), slider));