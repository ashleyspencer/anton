
/* CAROUSEL */
/* ////////////////// */
/* ////////////////// */
/* ////////////////// */
$('.carousel').carousel({
    interval: 6000,
    pause: "false"
});
  
$('.carousel').on('slid.bs.carousel', function (data) {
    var activeSlide = data.to;
    console.log(activeSlide);
    var carouselSlider = document.getElementsByClassName('carousel-indicators-slider')[0];
    carouselSlider.style.left = (activeSlide * 16.6).toString() + '%';
});

/* CAROUSEL */
/* ////////////////// */
/* ////////////////// */
/* ////////////////// */
$('[data-toggle="slide-collapse"]').on('click', function() {
    $navMenuCont = $($(this).data('target'));
    $navMenuCont.animate({
      'width': 'toggle'
    }, 350);
    $(".menu-overlay").fadeIn(500);
  
  });
  $(".menu-overlay").click(function(event) {
    $(".navbar-toggle").trigger("click");
    $(".menu-overlay").fadeOut(500);
  });