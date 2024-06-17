// function showingMenu(Menu){
    
// }
let menu = document.querySelector("header nav ul li .fa-bars" );
let end = document.querySelector(".secondheader .parts .part1 .bx-x");
menu.addEventListener("click", function() {
    let parts = document.querySelector(".secondheader");
    parts.style.right = "0%";
});
end.addEventListener("click", function() {
    let parts = document.querySelector(".secondheader");
    parts.style.right = "100%";
});
const swiper = new Swiper('.swiper', {
    // Optional parameters
  //   direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
  });
