$(window).on('load', function(){
  $('.loader .inner').fadeOut('500', function(){
    $('.loader').fadeOut('750')
  })
})

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

  var skillsTopOffset = $('.skillsSection').offset().top;
  var statsTopOffset = $('.statsSection').offset().top;
  var countUpFinished = false

  $(window).scroll(function(){
    if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
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
    }

    if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200){
      $('.counter').each( function(){
        var element = $(this)
        var endval = parseInt(element.text())
        element.countup(endval)
      } )

      countUpFinished = true

    }
  })

  $("[data-fancybox]").fancybox();

  $('.items').isotope({
    filter: '*',
    asimationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  })

  $('#filters a').click(function(){
    $('#filters .current').removeClass('current')
    $(this).addClass('current')

    var selector = $(this).attr('data-filter')

    $('.items').isotope({
      filter: selector,
      asimationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
      }
    })

    return false
  })

  /* Section 10 Video 47 */
	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});

  const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
	}

});
