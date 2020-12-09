// Grabbing all images which are not active
const images = document.querySelectorAll('.portfolio_image');

// Grabbing the active image
const activeImage = document.querySelector('.image_slider_active');

// Handling the slider
const slider = (e) => {
  const clickedImage = e.target;
  if (clickedImage) {
    activeImage.src = clickedImage.src;
    activeImage.classList.add('portfolio_image_on_active')
  }
}

// Event listner for images by looping through them
images.forEach(image => image.addEventListener(('click'), slider));