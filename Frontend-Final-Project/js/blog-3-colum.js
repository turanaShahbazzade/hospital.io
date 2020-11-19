setTimeout(() => {
  $(".preloader").removeClass("active");
}, 500);

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

var cards = [...document.querySelectorAll("#Blog .card")];
var blog = document.querySelector("#Blog");
var firstsection = document.querySelector("#blogGrid");
const height = $(firstsection).outerHeight();
const heightfirst = $(blog).outerHeight() / 2;
var cardholders = document.querySelector(".cardholders");
var children = Array.from($(cardholders).children());

var findCard = [];
console.log(heightfirst);

$(window).scroll(function () {
  console.log($(window).scrollTop());

  if ($(window).scrollTop() >= height) {
    var firsts = document.querySelectorAll(".card.first");
    firsts.forEach((f) => {
      f.classList.add("fadeInUp");
      f.style.opacity = "1";
    });
  }
  if ($(window).scrollTop() >= heightfirst) {
    var seconds = document.querySelectorAll(".card.seconds");
    seconds.forEach((s) => {
      s.classList.add("fadeInUp");
      s.style.opacity = "1";
    });
  }
});


