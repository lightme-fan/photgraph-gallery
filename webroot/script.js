const activePic = document.querySelector('.portfolio_image_slider_active');
console.log(activePic);

const images = document.querySelectorAll('.portfolio_image');
console.log(images);

images.forEach(image => image.addEventListener('click', (e) => {
    const clickImage = e.target;
    if (clickImage) {
      const image = e.target.closest('.portfolio_image');
      activePic.innerHTML = image;
    }
}))