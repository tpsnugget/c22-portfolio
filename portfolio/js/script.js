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
    items: 4,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      938: {
        items: 4,
      },
    },
  });

  $(".chart").easyPieChart({
    easing: 'easeInout',
    barColor: '#fff',
    trackColor: false,
    scaleColor: false,
    lineWidth: 4,
    size: 152,
    onStep: function(from, to, percent){
      $(this.el).find('.percent').text(Math.round(percent))
    }
  });
});
