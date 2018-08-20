/* CAROUSEL */
/* ////////////////// */
/* ////////////////// */
/* ////////////////// */
checkWidth();

$('.carousel').carousel({
    interval: 6000,
    pause: "false"
});
  
$('.carousel').on('slid.bs.carousel', function (data) {
    var activeSlideIndex = data.to;
    var carouselSlider = document.getElementsByClassName('carousel-indicators-slider')[0];
    carouselSlider.style.left = (activeSlideIndex * 16.6).toString() + '%';
});

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

$(window).resize(checkWidth);

function checkWidth() {
    var windowSize = $(window).width();
    var carouselItems = document.getElementsByClassName("carousel-item");

    if(windowSize < 321) {
        for(var i = 0; i < carouselItems.length; i++) {
            var imgUrl = "url(public/img/home_slide_mob" + i + ".jpg)";
            $(carouselItems[i]).css("background-image",imgUrl);
        }
    } else if(windowSize > 320) {
        for(var i = 0; i < carouselItems.length; i++) {
            var imgUrl = "url(public/img/home_slide" + i + ".jpg)";
            $(carouselItems[i]).css("background-image",imgUrl);
        }
    }
}

$("#projects-link").bind("click",showProjects);
$("#services-link").bind("click",hideProjects);

function showProjects(e) {
    var projectAnchors = $(".project-a");
    var locationAnchors = $(".location-a");
    var yearAnchors = $(".year-a");

    for(var i = 0; i < locationAnchors.length; i++) {
        var locationAnchor = locationAnchors[i];
        $(locationAnchor).click(filterSelected);
    }

    for(var i = 0; i < yearAnchors.length; i++) {
        var yearAnchor = yearAnchors[i];
        $(yearAnchor).click(filterSelected);
    }

    $(".mega-nav-container").css("pointer-events","all");
    var megaNavContainer = document.getElementsByClassName('mega-nav-container')[0];
    megaNavContainer.className = "mega-nav-container animIn";

    var anchorMasks = document.getElementsByClassName("anchor-mask");

    setTimeout(function() {
        for(var i = 0; i < anchorMasks.length; i++) {
            anchorMasks[i].className = "anchor-mask anchor-in";
        }
    }, 500);
}

function filterSelected(e) {

    if( $(this).hasClass("location-a") ) {
        var projectAnchors = $(".project-a");
        var targetLocation = $(this).attr("data-location");
        var locationAnchors = $(".location-a");

        for(var i = 0; i < projectAnchors.length; i++) {
            $(locationAnchors[i]).removeClass("active");
            var projectAnchorLocation = $(projectAnchors[i]).attr("data-location");
            $(projectAnchors[i]).removeClass("active");
            

            if( projectAnchorLocation == targetLocation) {
                $(projectAnchors[i]).addClass("active");
            }
        }

        $(this).addClass("active");
    } else {

    }

}

function hideProjects(e) {
    $(".mega-nav-container").css("pointer-events","none");
    var megaNavContainer = document.getElementsByClassName('mega-nav-container')[0];

    setTimeout(function() {
        megaNavContainer.className = "mega-nav-container animIn animOut";
    }, 500);

    var anchorMasks = document.getElementsByClassName("anchor-mask");
    for(var i = 0; i < anchorMasks.length; i++) {
        anchorMasks[i].className = "anchor-mask anchor-in anchor-out";
    }
}   