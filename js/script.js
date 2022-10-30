let searchBtn = document.querySelector(".search-btn"),
    form = document.querySelector(".form"),
    closeForm = document.querySelector(".form__btn_close");

searchBtn.addEventListener("click", function(){
    form.classList.add("form-active");
});

closeForm.addEventListener("click", function(e){
    e.preventDefault();
    form.classList.remove("form-active");
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
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
  });

// Accordion
// new Accordion('.question-list', {
//     elementClass: ".question-list__item",
//     triggerClass: ".question-list__btn"
// });

new Accordion('.question-list');