// var multipleCardCarousel = document.querySelector("#carouselExampleControls");
// // if (window.matchMedia("(min-width: 576px)").matches) {
//   var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//     interval: false
//   });
//   var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//   var cardWidth = $(".carousel-item").width();
//   var scrollPosition = 0;
//   $("#carouselExampleControls .carousel-control-next").on("click", function () {
//     if (scrollPosition < carouselWidth - cardWidth * 3) {
//       scrollPosition += cardWidth;
//       $("#carouselExampleControls .carousel-inner").animate(
//         { scrollLeft: scrollPosition },
//         100
//       );
//     }
//   });
//   $("#carouselExampleControls .carousel-control-prev").on("click", function () {
//     if (scrollPosition > 0) {
//       scrollPosition -= cardWidth;
//       $("#carouselExampleControls .carousel-inner").animate(
//         { scrollLeft: scrollPosition },
//         700
//       );
//     }
//   });
// // } else {
// //   $(multipleCardCarousel).addClass("slide");
// // }



$(document).ready(function () {
  //Owl
  $('.hero-slider').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      dots: false,
      navText: ['PREV', 'NEXT'],
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 7000,
      responsive: {
          0: {
              nav: false,
          },
          768: {
              nav: true,
          }
      }
  })

  $('#projects-slider').owlCarousel({
      loop: true,
      items: 2,
      dots: true,
      smartSpeed: 600,
      center: true,
      autoplay: true,
      autoplayTimeout: 6000,
      responsive: {
          0: {
              items: 1,
              nav: false
          },
          768: {
              items: 2,
              margin: 8,
              nav:true
          }
      }
  })

  $('.reviews-slider').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      navText: ['PREV', 'NEXT'],
      smartSpeed: 1500,
      items: 1,
      margin: 24,
      autoplay: true,
      autoplayTimeout: 7000,
  })
});

jQuery("#carousel").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin:-5,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 4
    }
  }
});
$('.navbar-collapse a').click(function() {
$(".navbar-collapse").collapse('hide');
});
// ************************************************************************
$('#toggle-left-menu').click(function() {
if ($('#left-menu').hasClass('small-left-menu')) {
    $('#left-menu').removeClass('small-left-menu');
} else {
    $('#left-menu').addClass('small-left-menu');
}
$('#logo').toggleClass('small-left-menu');
$('#page-container').toggleClass('small-left-menu');
$('#header .header-left').toggleClass('small-left-menu');

$('#logo .big-logo').toggle('300');
$('#logo .small-logo').toggle('300');
$('#logo').toggleClass('p-0 pl-1');
});

$(document).on('mouseover', '#left-menu.small-left-menu > ul > li', function() {
if (!$(this).hasClass('has-sub')) {
    var label = $(this).find('span').text();
    var position = $(this).position();
    $('#show-lable').css({
        'top': position.top + 79,
        'left': position.left + 59,
        'opacity': 1,
        'visibility': 'visible'
    });

    $('#show-lable').text(label);
} else {
    var position = $(this).position();
    $(this).find('ul').addClass('open');

    if ($(this).find('ul').hasClass('open')) {
        const height = 47;
        var count_submenu_li = $(this).find('ul > li').length;
        if (position.top >= 580) {
            var style = {
                'top': (position.top + 100) - (height * count_submenu_li),
                'height': height * count_submenu_li + 'px'
            }
            $(this).find('ul.open').css(style);
        } else {
            var style = {
                'top': position.top + 79,
                'height': height * count_submenu_li + 'px'
            }

            $(this).find('ul.open').css(style);
        }

    }
}

});

$(document).on('mouseout', '#left-menu.small-left-menu li a', function(e) {
$('#show-lable').css({
    'opacity': 0,
    'visibility': 'hidden'
});
});

$(document).on('mouseout', '#left-menu.small-left-menu li.has-sub', function(e) {
$(this).find('ul').css({
    'height': 0,
});
});

$(window).resize(function() {
windowResize();
});

$(window).on('load', function() {
windowResize();
});

$('#left-menu li.has-sub > a').click(function() {
var _this = $(this).parent();

_this.find('ul').toggleClass('open');
$(this).closest('li').toggleClass('rotate');

_this.closest('#left-menu').find('.open').not(_this.find('ul')).removeClass('open');
_this.closest('#left-menu').find('.rotate').not($(this).closest('li')).removeClass('rotate');
_this.closest('#left-menu').find('ul').css('height', 0);

if (_this.find('ul').hasClass('open')) {
    const height = 47;
    var count_submenu_li = _this.find('ul > li').length;
    _this.find('ul').css('height', height * count_submenu_li + 'px');
}
});


function windowResize() {
var width = $(window).width();
if (width <= 992) {
    $('#left-menu').addClass('small-left-menu');
    $('#logo').addClass('small-left-menu p-0 pl-1');
} else {
    $('#left-menu').removeClass('small-left-menu');
    $('#logo').removeClass('small-left-menu p-0 pl-1');
}
}







