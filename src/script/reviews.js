if(window.innerWidth < 1000){
  //remove class
  document.getElementById("back_image").classList.remove("background-div");
  document.getElementById("about_txt").style.paddingTop = "20%";
}

var slidesPerView_ = 3;
if (window.innerWidth < 768) {

  document.querySelectorAll('.column').forEach(column => {
    column.classList.remove('column');
  });
  document.getElementById("benefits_text_").style.display = "unset";
  document.getElementById('typewriter_').remove();
  document.getElementById("carouselExampleCaptions").style.width = "100%";
  slidesPerView_ = 1;
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: slidesPerView_,
    spaceBetween: 30,
    slidesPerGroup: 1,
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



  