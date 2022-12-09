let subImagesSlides = ["../images/sub2-1sl1.png", "../images/sub2-1sl2.png"];

let sub2_1slides = document.querySelector(".movesample img");

let i = 0;
setInterval(() => {
  i++;
  if (i == subImagesSlides.length) {
    i = 0;
  }
  sub2_1slides.src = `${subImagesSlides[i]}`;
}, 3000);
