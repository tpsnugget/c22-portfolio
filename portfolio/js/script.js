$(document).ready(() => {
  $("#slides").superslides({
    animation: "fade",
    pagination: false,
    play: 7500,
  });

  var typed = new Typed(".typed", {
    strings: [
      "Full-Stack Web Developer",
      "REACT / Hooks / Redux",
      "Nodejs / PHP",
      "MySQL / MongoDB",
      "Life-Long Learner",
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  $(".chart").easyPieChart({
    //your options goes here
  });
});
