let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}



var swiper = new Swiper(".course-slider", {
    spaceBetween:20,
    grabCursor:true,
    loop:true,
   
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
     
    },
    768: {
      slidesPerView: 3,
      
    },
    1024: {
      slidesPerView: 4,
     
    },
  },

});


var swiper = new Swiper(".tutors-slider", {
  spaceBetween:20,
  grabCursor:true,
  loop:true,
 
pagination: {
  el: ".swiper-pagination",
  clickable:true,
},

breakpoints: {
  640: {
    slidesPerView: 2,
   
  },
  768: {
    slidesPerView: 3,
    
  },
  1024: {
    slidesPerView: 4,
   
  },
},

});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween:20,
  grabCursor:true,
  loop:true,
 
pagination: {
  el: ".swiper-pagination",
  clickable:true,
},

breakpoints: {
  640: {
    slidesPerView: 2,
   
  },
  768: {
    slidesPerView: 3,
    
  },
  1024: {
    slidesPerView: 4,
   
  },
},

});





