$(document).ready(function() {

  $('.carousel').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  var oldScrollTop;

  $(window).scroll(function() {

    var newScrollTop = $(this).scrollTop();

    /* if scrollDistance is +ve: user is scrolling UP
       if scrollDistance is -ve: user is scrolling DOWN */
    var scrollDistance = oldScrollTop - newScrollTop;

    var navHeight = $('.navbar').css('height').replace('px', '');

    /* if screen top is now below the navbar's bottom, AND the user is scrolling DOWN,
       then hide the navbar. */
    if (newScrollTop > navHeight && scrollDistance < 0) {
      $('.navbar').stop().animate({
        top: -navHeight
      }, 150);
    }
    /* if screen top is above the navbar's bottom, OR the user is scrolling UP,
       then show the navbar. */
    else {
      $('.navbar').stop().animate({
        top: 0
      }, 150);
    }

    oldScrollTop = newScrollTop;

  });

});
