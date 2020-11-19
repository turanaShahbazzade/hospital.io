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

var i = 0;

$(".mycounter").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },

    {
      duration: 5000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      },
    }
  );
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
