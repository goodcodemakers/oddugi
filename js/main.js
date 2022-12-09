let images = [
  "./images/mainimg1.jpg",
  "./images/mainimg2.jpg",
  "./images/mainimg3.jpg",
];
let main = document.querySelector(".mainImages");
let num = 0;
function sliden() {
  num++;
  if (num == 3) {
    num = 0;
  }
  main.style.background = `url(${images[num]})`;
}

setInterval(sliden, 3000);

/// 스와이프 부분
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let mapImages = [
  "./images/china.png",
  "./images/US.png",
  "./images/japan.png",
  "./images/australia.png",
  "./images/vletnam.png",
  "./images/canada.png",
];

let mapMenu = document.querySelectorAll(".map-menu ul li");
let map = document.querySelector(".map-world");

for (let i = 0; i < mapMenu.length; i++) {
  mapMenu[i].addEventListener("click", function () {
    map.style.background = `url(${mapImages[i]})`;
  });
}
