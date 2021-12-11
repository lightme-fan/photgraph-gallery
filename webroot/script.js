// Grabbing all images which are not active
const images = document.querySelectorAll('.portfolio_image');

// Grabbing the active image
const activeImage = document.querySelector('.image_slider_active');
const firstImage = document.querySelector('.portfolio_image-one');
const allImages = Array.from(document.querySelectorAll('.picture'))
const imagesToSlide = Array.from(document.querySelectorAll('.pic'))
const leftIcon = document.querySelector('.button-slider:nth-of-type(1)')
const rightIcon = document.querySelector('.button-slider:nth-of-type(2)')

var num = 7;
var curing = 1;

// Handling the slider
const slider = (e) => {
  const clickedImage = e.target;
   activeImage.src = clickedImage.src
   firstImage.classList.remove('portfolio_image-one')
   images.forEach(image => image.style.opacity = 0.5)
   clickedImage.style.opacity = 1;
}

const prevImage = () => {
  if(curing > 1){
    activeImage.src = imagesToSlide[curing - 1].src;
    curing = curing - 1;
  }else{
    alert("This is the first image");
  }
}

const nextImage = () => {
  if(curing < num){
    activeImage.src = imagesToSlide[curing + 1].src;
    curing = curing + 1;
  }else{
    alert("This is the last image");
  }
}

leftIcon.addEventListener(('click'), prevImage)
rightIcon.addEventListener(('click'), nextImage)

// Event listeners for images by looping through them
images.forEach(image => image.addEventListener(('click'), slider));