// Loading animaiton

window.addEventListener("load", function () {
  var animation = $(".loading-animation");
  setTimeout(function () {
    animation.parentNode.removeChild(animation);
  }, 60000); // 60000 milliseconds = 1 minute
});
// -------------- nav bar --------------

// Get the navigation bar element
const $navBar = $("header");

// Get the section element that triggers the class change
const $section_2 = $(".section_2");
const $section_3 = $(".section_3");
const $section_4 = $(".section_4");
const $section_5 = $(".section_5");
const $section_6 = $(".section_6");

const $myElement = $(".title p");

// Get the section's offset from the top of the page
const sectionOffset = $section_2.offset().top;
const section_3_Offset = $section_3.offset().top;
const section_4_Offset = $section_4.offset().top;
const section_5_Offset = $section_5.offset().top;
const section_6_Offset = $section_6.offset().top;

// Add an event listener to the window object to detect scrolling
$(window).scroll(() => { 
  // Get the current scroll position
  const scrollPosition = $(this).scrollTop();

  // Check if the scroll position has passed the section
  if (scrollPosition < sectionOffset) {
    $navBar.removeClass("active");
    $myElement.text("Portfolio");
  }
  else if (scrollPosition >= sectionOffset && scrollPosition < section_3_Offset) {
    // Add the "active" class to the navigation bar
    $navBar.addClass("active");
    $myElement.text("02");
  } else if (scrollPosition >= section_3_Offset && scrollPosition < section_4_Offset) {
    // Add the "active" class to the navigation bar
    $myElement.text("03");
  } else if   (scrollPosition >= section_4_Offset && scrollPosition < section_5_Offset) {
    // Add the "active" class to the navigation bar
    $myElement.text("04");
  }
  else if   (scrollPosition >= section_5_Offset && scrollPosition < section_6_Offset) {
    // Add the "active" class to the navigation bar
    $myElement.text("05");
  } else {
    // Remove the "active" class from the navigation bar
    $myElement.text("06");
  }
});

// -------------- nav bar end --------------



// animation on scroll 

const scrollTargets = document.querySelectorAll(".scroll-target");

window.onscroll = function() {
    const scrollPosition = window.pageYOffset + window.innerHeight;

    scrollTargets.forEach(function(scrollTarget) {
        if (scrollPosition >= scrollTarget.offsetTop) {
            scrollTarget.classList.add("fade-u");
        } else {
            scrollTarget.classList.remove("fade-u");
        }
    });
};