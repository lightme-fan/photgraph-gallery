// Grabbing all images which are not active
const images = document.querySelectorAll('.portfolio_image');

// Grabbing the active image
const activeImage = document.querySelector('.image_slider_active');
const firstImage = document.querySelector('.portfolio_image-one');
const allImages = Array.from(document.querySelectorAll('.picture'))
console.log(allImages);

// Handling the slider
const slider = (e) => {
  const clickedImage = e.target;
   activeImage.src = clickedImage.src
   firstImage.classList.remove('portfolio_image-one')
   images.forEach(image => image.style.opacity = 0.5)
   clickedImage.style.opacity = 1;
}

// Event listner for images by looping through them
images.forEach(image => image.addEventListener(('click'), slider));