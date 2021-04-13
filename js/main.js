const responsive = {
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:1
    },
    960:{
        items:1
    }
};

$(document).ready(function(){
    $('.toggle-menu').click(function(){
        $('.nav').toggleClass('activ')
    })
})

      ///////////////owl carousel////////////////
      $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-pre'),$('.owl-navigation .owl-nav-next')],
        responsive:responsive,
    });
    ///////scroll top///////////
    $(".move-up span").click(function(){
        $("html,body").animate({
            scrollTop:0},100);
    });
     // AOS ////////
     AOS.init();

  