// $(function() {
//   let mainbottom = $('#main').offset().top;
//
//   $(window).on('scroll', function() {
//     if (w > 580 && navbar.is(':hidden')) {
//       ('.navbar').addClass('past-main')
//     }
//   })
// })

jQuery(function($) {
  `use strict`

  let mainbottom = $(`#main`).offset().top;

  $(window).on(`scroll`, function() {
    w = Math.round($(window).scrollTop())
    if (w > mainbottom) {
      $(`.navbar`).addClass(`past-main`)
      $(`.navbar`).addClass(`effect-main`)
    } else {
      $(`.navbar`).removeClass(`past-main`)
    }
  })

  /* Wow Init */

  new WOW().init()

  /* Owl Carousel */

  $(`.reviews`).owlCarousel({
    autoPlay: true,
    items: 1,
    pagination: false,
    singleItem: true,
    slideSpeed: 200
  })

  $(function() {
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
      });
    });
})

$(document).on('click.nav', '.navbar-collapse.in', function(e) {
  if ($(e.target).is('a')) {
    $(this).removeClass('in').addClass('collapse')
  }
})
