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

  var firtcycle = 0;

  setTimeout(() => {
    $(".preloader").removeClass("active");
  }, 500);
  var oldactive = document.querySelector(".carousel-item.active");
  var firstchild = oldactive.firstElementChild;
  $(firstchild).css("transition", "all 10s");
  $(firstchild).css("transform", "scale(1.2)");
  $(firstchild).css("max-height", "625px");
  $(firstchild).css("max-width", "100%");

  $("#carouselExampleFade").on("slide.bs.carousel", function () {
    firtcycle++;
    console.log(firtcycle);
    if (firtcycle == 1) {
      var img2 = oldactive.nextElementSibling.firstElementChild;
      $(img2).css("transform", "scale(1)");
      $("h4").addClass("animate__fadeInDownBig");
      $("h2").addClass("animate__fadeInRightBig");
      $("a").addClass("animate__fadeInUp");
      setTimeout(() => {
        $(img2).css("transition", "all 10s");
        $(img2).css("transform", "scale(1.2)");
        $(img2).css("max-height", "625px");
        $(img2).css("max-width", "100%");
      }, 1000);
    } else {
      var img1 = oldactive.firstElementChild;
      $(img1).css("transform", "scale(1)");
      $("h4").addClass("animate__fadeInDownBig");
      $("h2").addClass("animate__fadeInRightBig");
      $("a").addClass("animate__fadeInUp");
      setTimeout(() => {
        $(img1).css("transition", "all 10s");
        $(img1).css("transform", "scale(1.2)");
        $(img1).css("max-height", "625px");
        $(img1).css("max-width", "100%");
      }, 1000);

      firtcycle = 0;
    }
  });

  $(".make-box").css("transform", "all 0.5s");
  $("make-box").addClass("animate__fadeInRight");

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
});

var selectedboxitemsgender = [
  ...document.querySelectorAll("#gender .selectboxitems"),
];
var selectedboxitemscategory = [
  ...document.querySelectorAll("#category .selectboxitems"),
];

var gender = document.getElementById("gender");
var category = document.getElementById("category");

selectedboxitemsgender.forEach((s) => {
  FillInput(s);
});
selectedboxitemscategory.forEach((s) => {
  FillInput(s);
});

gender.addEventListener("click", function (e) {
  $("#gendericon").toggleClass("rotate");
  FadeToggle(this.lastElementChild);
});

category.addEventListener("click", function (e) {
  $("#categoryicon").toggleClass("rotate");
  FadeToggle(this.lastElementChild);
});

function FillInput(el) {
  el.addEventListener("click", function () {
    var oldselected = el.parentElement.querySelector(
      ".selectboxitems.selected"
    );
    oldselected.classList.remove("selected");
    this.classList.add("selected");
    var current =
      el.parentElement.parentElement.firstElementChild.firstElementChild;
    current.innerText = "";
    current.innerText = this.innerText;
  });
}
function FadeToggle(el) {
  $(el).fadeToggle("fast");
}
