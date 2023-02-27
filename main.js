$(document).ready(function () {
  var navBar = $("nav");
  var navHeight = navBar.outerHeight();
  var lastScrollTop = 0;

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > lastScrollTop && scrollTop > navHeight) {
      // Scroll down and past the navbar
      navBar.addClass("hide-nav");
    } else {
      // Scroll up or not past the navbar
      navBar.removeClass("hide-nav");
    }

    lastScrollTop = scrollTop;
  });
});

// for the drop menu
$(document).ready(function () {
  $(".arrow").click(function () {
    $("nav").toggleClass("showNavBar");
    $(".arrow").toggleClass("arrow-rot");
  });

  $(document).on("click", function (event) {
    if (!$(event.target).closest("nav").length) {
      $("nav").removeClass("showNavBar");
      $(".arrow").removeClass("arrow-rot");
    }
  });
});

// change the content of the about me section

let textArray = ["DEVELOPER", "DESIGNER", "FREELANCER"];
let index = 0;
let charIndex = 0;
let myText = $("#skills");

function showText() {
  if (charIndex < textArray[index].length) {
    myText.text(myText.text() + textArray[index][charIndex]);
    charIndex++;
  } else {
    index = (index + 1) % textArray.length;
    charIndex = 0;
    myText.text("");
  }
}

setInterval(showText, 300);

// skills

$(document).ready(function ($) {
  function animateElements() {
    $(".progressbar").each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var percent = $(this).find(".circle").attr("data-percent");
      var animate = $(this).data("animate");
      if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
        $(this).data("animate", true);
        $(this)
          .find(".circle")
          .circleProgress({
            // startAngle: -Math.PI / 2,
            value: percent / 100,
            size: 400,
            thickness: 15,
            fill: {
              color: "#cf1f1f",
            },
          })
          .on(
            "circle-animation-progress",
            function (event, progress, stepValue) {
              $(this)
                .find("strong")
                .text((stepValue * 100).toFixed(0) + "%");
            }
          )
          .stop();
      }
    });
  }

  animateElements();
  $(window).scroll(animateElements);
});

$(document).ready(function () {
  getQuote();

  $(".new-quote").click(function () {
    getQuote();
  });
});

function getQuote() {
  $.ajax({
    url: "https://api.quotable.io/random",
    method: "GET",
    success: function (response) {
      $(".quote").text(response.content);
      $(".author").text("- " + response.author);
    },
    error: function () {
      console.log("Error: Failed to get a quote from the API");
    },
  });
}


$(document).ready(function() {
    $('.img').click(function() {
      $(this).toggleClass('fullscreen');
    });
  });
