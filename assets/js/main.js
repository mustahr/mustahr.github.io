
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//  check if class exist
let ImgClass = $('.img')[0];
let ContentId = $('#content')[0];
let ContentClass = $('.content')[0];
let ImageClass = $('.image')[0];
let TextId = $('#text')[0];
let TextClass = $('.text')[0];
let image_cont = $('.image_cont')[0];
let Container__horizontal = $(".container__horizontal")[0];
let PanelClass = $(".panel")[0];
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Loading animaiton

window.addEventListener("load", function () {
  var animation = $(".loading-animation");
  setTimeout(function () {
    animation.parentNode.removeChild(animation);
  }, 60000); // 60000 milliseconds = 1 minute
});

/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// Images animation
img = $(".img");
const smoother = ScrollSmoother.create({
  content: "#content",
  smooth: 3,
  effects: true,
  rotationX: 180,
  smoothTouch: 0.1,
});
smoother.effects('.image', { speed: 0.4 });

// To make the first title stiky while scrolling
ScrollTrigger.create({
  trigger: ".content", // What element triggers the scroll
  scrub: 0.5, // Add a small delay of scrolling and animation. `true` is direct
  start: "top top", // Can be top, center, bottom
  end: "bottom bottom", // Can be top, center, bottom
  pin: ".text",
  pinSpacing: true,
});
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// To animate the first title

gsap.registerPlugin(SplitText);

let tl = gsap.timeline(),
  mySplitText = new SplitText("#text", { type: "words,chars" }),
  chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set("#text", { perspective: 400 });

tl.from(chars, {
  duration: 0.8,
  opacity: 0,
  scale: 2,
  //   y: 80,
  x: 20,
  //   rotationX: 180,
  transformOrigin: "0% 50% -50",
  ease: "back",
  stagger: 0.1,
});


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// Panigation of the first page
// Get the section element that triggers the class change
if (image_cont) {
  const $image_1 = $(".image_1");
  const $image_2 = $(".image_2");
  const $image_3 = $(".image_3");
  const $image_4 = $(".image_4");
  const $image_5 = $(".image_5");
  const $image_6 = $(".image_6");
  const $image_7 = $(".image_7");

  const $myElement = $("#page");

  // Get the image's offset from the top of the page
  const image_1_Offset = $image_1.offset().top + 200;
  const image_2_Offset = $image_2.offset().top + 200;
  const image_3_Offset = $image_3.offset().top + 200;
  const image_4_Offset = $image_4.offset().top + 200;
  const image_5_Offset = $image_5.offset().top + 100;
  const image_6_Offset = $image_6.offset().top;
  const image_7_Offset = $image_7.offset().top;

  // Add an event listener to the window object to detect scrolling
  $(window).scroll(() => {
    // Get the current scroll position
    const scrollPosition = $(this).scrollTop();

    // Check if the scroll position has passed the image
    if (scrollPosition < image_1_Offset) {
      $myElement.text("1");
    } else if (
      scrollPosition >= image_1_Offset &&
      scrollPosition < image_2_Offset
    ) {
      // Add the "active" class to the navigation bar
      $myElement.text("2");
    } else if (
      scrollPosition >= image_2_Offset &&
      scrollPosition < image_3_Offset
    ) {
      // Add the "active" class to the navigation bar
      $myElement.text("3");
    } else if (
      scrollPosition >= image_3_Offset &&
      scrollPosition < image_4_Offset
    ) {
      // Add the "active" class to the navigation bar
      $myElement.text("4");
    } else if (
      scrollPosition >= image_4_Offset &&
      scrollPosition < image_5_Offset
    ) {
      // Add the "active" class to the navigation bar
      $myElement.text("5");
    } else if (
      scrollPosition >= image_5_Offset &&
      scrollPosition < image_6_Offset
    ) {
      // Add the "active" class to the navigation bar
      $myElement.text("5");
    } else if (
      scrollPosition >= image_6_Offset &&
      scrollPosition < image_7_Offset
    ) {
      // Add the "active" class to the navigation bar
      $myElement.text("6");
    } else if (scrollPosition >= image_7_Offset) {
      // Remove the "active" class from the navigation bar
      $myElement.text("7");
    } else {
      $myElement.text("7");
    }
  });
}
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Circles Cursor Follower
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");
const card = document.querySelectorAll(".card");

let posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.02, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 20,
        top: posY - 20
      }
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });
  }
});

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

card.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
    follower.classList.add("active");
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
    follower.classList.remove("active");
  });
});


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

//  Button Hover Animation
$(".btn-hover").on("mouseenter", function (e) {
  var x = e.pageX - $(this).offset().left;
  var y = e.pageY - $(this).offset().top;

  $(this).find("span").css({
    top: y,
    left: x,
  });
  follower.classList.add("active");
});

$(".btn-hover").on("mouseout", function (e) {
  var x = e.pageX - $(this).offset().left;
  var y = e.pageY - $(this).offset().top;

  $(this).find("span").css({
    top: y,
    left: x,
  });
  follower.classList.remove("active");

});


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Button Move Animation
const all_btns = gsap.utils.toArray(".btn_wrapper");
if (all_btns.length > 0) {
  var all_btn = gsap.utils.toArray(".btn_wrapper");
} else {
  var all_btn = gsap.utils.toArray("#btn_wrapper");
}
const all_btn_cirlce = gsap.utils.toArray(".btn-item");
all_btn.forEach((btn, i) => {
  $(btn).mousemove(function (e) {
    callParallax(e);
  });
  function callParallax(e) {
    parallaxIt(e, all_btn_cirlce[i], 80);
  }

  function parallaxIt(e, target, movement) {
    var $this = $(btn);
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    gsap.to(target, 0.5, {
      x: ((relX - $this.width() / 2) / $this.width()) * movement,
      y: ((relY - $this.height() / 2) / $this.height()) * movement,
      ease: Power2.easeOut,
    });
  }
  $(btn).mouseleave(function (e) {
    gsap.to(all_btn_cirlce[i], 0.5, {
      x: 0,
      y: 0,
      ease: Power2.easeOut,
    });
  });
});

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// Horizontal Scrolling
gsap.registerPlugin(ScrollTrigger);

if (PanelClass) {
  let sections = gsap.utils.toArray('.panel');
  gsap.to(sections, {
    xPercent: -110 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.container__horizontal',
      pin: true,
      scrub: 1,
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: () => '+=' + document.querySelector('.container__horizontal').offsetWidth,
    },
  });
}