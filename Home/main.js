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
let swiper = new Swiper('.swiper', {
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
    767: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    991: {
      slidesPerView: 5,
      spaceBetween: 40
    }
    ,
    1137: {
      slidesPerView: 6,
      spaceBetween: 40
    }
  }
  });
let swiper2 = new Swiper('.swiper.n2', {
    // Optional parameters
  //   direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper.n2 .swiper-button-next',
      prevEl: '.swiper.n2 .swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    // // when window width is >= 480px
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // // when window width is >= 640px
    767: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // 991: {
    //   slidesPerView: 5,
    //   spaceBetween: 40
    // }
    // ,
    1137: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
  });
// const swiperr =  Swiper('.swiper-n2', {
    // Optional parameters
  //   direction: 'vertical',
  //   loop: true,
  
  //   // If we need pagination
    
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev.btn',
  //   },
  
  //   // And if we need scrollbar
  //   slidesPerView: 1,
  // spaceBetween: 10,
  // // Responsive breakpoints
  // breakpoints: {
  //   // when window width is >= 320px
  //   // when window width is >= 640px
  //   767: {
  //     slidesPerView: 2,
  //     spaceBetween: 30
  //   },
  //   991: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   }
  //   ,
  //   1137: {
  //     slidesPerView: 4,
  //     spaceBetween: 30,
  //     // spaceAround:10
  //   }
  // }
  // });
let btns = document.querySelectorAll(".btn");
btns.forEach(function(button){
    button.addEventListener("click",function(){
        button.style.backgroundColor = "transparent";
    })
})