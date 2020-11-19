$(document).ready(function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
      $(".nav-sticky").addClass("fixed-top");
    } else {
      $(".nav-sticky").removeClass("fixed-top");
    }
  });
  $(".navbar-toggler").focus(function () {
    $(".navbar-toggler").css("outline", "0");
  });

  if ($("body").innerWidth() < 992) {
    $(".nav-link i").removeClass("fa-angle-down").addClass("fa-angle-right");
    $(".nav-item").click(function () {
      $(".menu").addClass("position-static");

      if ($(".menu").hasClass("d-block")) {
        $(this).children(".menu").removeClass("d-block").addClass("d-none");
      } else {
        $(this).children(".menu").addClass("d-block");
      }
    });
    $(".nav-link").removeClass("active");

    $(".navbar-toggler").click(function () {
      if ($(this).children().hasClass("fa-bars")) {
        $(this).children().removeClass("fa-bars").addClass("fa-times");
      } else {
        $(this).children().removeClass("fa-times").addClass("fa-bars");
      }
    });
    $(".nav-link").click(function () {
      if ($(this).children().hasClass("fa-angle-right")) {
        $(this)
          .children()
          .removeClass("fa-angle-right")
          .addClass("fa-angle-down");
      } else {
        $(this)
          .children()
          .removeClass("fa-angle-down")
          .addClass("fa-angle-right");
      }
    });
  }
});
setTimeout(() => {
  $(".preloader").removeClass("active");
}, 500);

$(".owl-carousel.myall").owlCarousel({
  loop: false,
  margin: 30,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    767: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".myowl").owlCarousel({
  loop: true,
  margin: 10,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2.6,
      dotsEach: 2,
    },
  },
});
