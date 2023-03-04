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
  });

  $(document).on("click", function (event) {
    if (!$(event.target).closest("nav").length) {
      $("nav").removeClass("showNavBar");
    }
  });
});

// pagenation code

// Get the link of the current page
const currentPageLink = window.location.pathname.split("/").pop();

let pages = [
  "index.html",
  "about.html",
  "inspirations.html",
  "contact.html",
  "quote.html",
];

let toNextPage = () => {
  switch (currentPageLink) {
    case pages[0]:
      window.location.href = pages[1];
      break;
    case pages[1]:
      window.location.href = pages[2];
      break;
    case pages[2]:
      window.location.href = pages[3];
      break;
    case pages[3]:
      window.location.href = pages[4];
      break;
    default:
      window.location.href = pages[0];
      break;
  }
};
let toPreviousPage = () => {
  switch (currentPageLink) {
    case pages[0]:
      window.location.href = pages[4];
      break;
    case pages[4]:
      window.location.href = pages[3];
      break;
    case pages[3]:
      window.location.href = pages[2];
      break;
    case pages[2]:
      window.location.href = pages[1];
      break;
    default:
      window.location.href = pages[0];
      break;
  }
};

// Define a function to handle the keydown event on the document
function handleKeyDown(event) {
  // If the key pressed was the down arrow key, do something
  if (event.key === "ArrowDown" || event.key === "ArrowRight") {
    toNextPage();
  } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
    toPreviousPage();
  } else if (event.key === "Enter") {
    $("nav").toggleClass("showNavBar");
  }
}
document.addEventListener("keydown", handleKeyDown);

// Define a function to handle the mouse event on phone screen

function handleScroll(event) {
  // Detect scroll up event
  if (event.changedTouches[0].pageY < startY) {
    toNextPage();
  }
  // Detect scroll down event
  else if (event.changedTouches[0].pageY > startY) {
    toPreviousPage();
  }
}

// Add a scroll event listener to the document
document.addEventListener("touchstart", function (event) {
  startY = event.changedTouches[0].pageY;
});
document.addEventListener("touchmove", handleScroll);

// Define a function to handle the mouse event on tochpad screen
function handleMouseScroll(event) {
  // Detect scroll up event
  if (event.deltaY < 0) {
    toNextPage();
  }
  // Detect scroll down event
  else if (event.deltaY > 0) {
    toPreviousPage();
  }
}

// Add a scroll event listener to the document
document.addEventListener("wheel", handleMouseScroll);

// animation

window.addEventListener("load", function () {
  var animation = $(".loading-animation");
  setTimeout(function () {
    animation.parentNode.removeChild(animation);
  }, 60000); // 60000 milliseconds = 1 minute
});

// Quote API


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
