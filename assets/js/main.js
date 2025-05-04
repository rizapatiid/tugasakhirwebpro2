(function ($) {
  $(document).ready(function () {

    $(".hamburger_menu").on("click", function (e) {
      e.preventDefault();
      $(".slide-bar").toggleClass("show");
      $("body").addClass("on-side");
      $('.body-overlay').addClass('active');
      $(this).addClass('active');
    });
  
    $(".close-mobile-menu > a").on("click", function (e) {
      e.preventDefault();
      $(".slide-bar").removeClass("show");
      $("body").removeClass("on-side");
      $('.body-overlay').removeClass('active');
      $('.hamburger_menu').removeClass('active');
    });
    

    {
      function animateElements() {
        $('.progressbar').each(function () {
          var elementPos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          var percent = $(this).find('.circle').attr('data-percent');
          var percentage = parseInt(percent, 10) / parseInt(100, 10);
          var animate = $(this).data('animate');
          if (elementPos < topOfWindow + $(window).height() - 10 && !animate) {
            $(this).data('animate', true);
            $(this).find('.circle').circleProgress({
              startAngle: -Math.PI / 2,
              value: percent / 100,
              size: 180,
              thickness: 10,
              emptyFill: "#fff",
              fill: {
                color: '#49A6FF'
              }
            }).on('circle-animation-progress', function (event, progress, stepValue) {
              $(this).find('div').text((stepValue*100).toFixed() + "%");
            }).stop();
          }
        });
      }
    
      // Show animated elements
      animateElements();
      $(window).scroll(animateElements);
    };
     // sticky header active
     if ($("#header").length > 0) {
      $(window).on("scroll", function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
          $("#header").removeClass("sticky");
        } else {
          $("#header").addClass("sticky");
        }
      });
    }

          //Aos animation active
            AOS.init({
              offset: 100,
              duration: 400,
              easing: "ease-in-out",
              anchorPlacement: "top-bottom",
              disable: "mobile",
              once: false,
            });


            //Video poppup
            if ($(".play-btn").length > 0) {
              $(".play-btn").magnificPopup({
                type: "iframe",
              });
            };

              // page-progress
              var progressPath = document.querySelector(".progress-wrap path");
              var pathLength = progressPath.getTotalLength();
              progressPath.style.transition = progressPath.style.WebkitTransition =
                "none";
              progressPath.style.strokeDasharray = pathLength + " " + pathLength;
              progressPath.style.strokeDashoffset = pathLength;
              progressPath.getBoundingClientRect();
              progressPath.style.transition = progressPath.style.WebkitTransition =
                "stroke-dashoffset 10ms linear";
              var updateProgress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength) / height;
                progressPath.style.strokeDashoffset = progress;
              };
              updateProgress();
              $(window).scroll(updateProgress);
              var offset = 50;
              var duration = 550;
              jQuery(window).on("scroll", function () {
                if (jQuery(this).scrollTop() > offset) {
                  jQuery(".progress-wrap").addClass("active-progress");
                } else {
                  jQuery(".progress-wrap").removeClass("active-progress");
                }
              });
              jQuery(".progress-wrap").on("click", function (event) {
                event.preventDefault();
                jQuery("html, body").animate({ scrollTop: 0 }, duration);
                return false;
              });

              //product colors
              const colors = $(".accordion1 .accordion-item");
              colors.on("click", function () {
                $(".accordion1 .accordion-item").removeClass("active");
                $(this).addClass("active");
              });

              //tes1 active
              const tes1 = $(".controls li");
              tes1.on("click", function () {
                $(".controls li").removeClass("active");
                $(this).addClass("active");
              });

              $("#ce-toggle1").click(function (event) {
                $(".plan-toggle-wrap1").toggleClass("active");
              });
              
              $("#ce-toggle1").change(function () {
                if ($(this).is(":checked")) {
                  $(".tab-content #yearly1").hide();
                  $(".tab-content #monthly1").show();
                } else {
                  $(".tab-content #yearly1").show();
                  $(".tab-content #monthly1").hide();
                }
              });

              $(".case1-slider").slick({
                autoplay:true,
                autoplaySpeed:1500,
                margin: "30",
                slidesToShow: 3,
                arrows: true,
                centerMode: false,
                loop: true,
                centerMode: false,
                prevArrow: $(".testimonial-prev-arrow1"),
                nextArrow: $(".testimonial-next-arrow1"),
                draggable: true,
                centerPadding: "40px",
                dots: false,
                scroll: true,
                responsive: [
                  {
                    breakpoint: 769,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: "40px",
                      slidesToShow: 2,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: "40px",
                      slidesToShow: 1,
                    },
                  },
                ],
              });


              $('.tes3-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: false,
                prevArrow: $(".testimonial3-prev-arrow"),
                nextArrow: $(".testimonial3-next-arrow"),
              });

              $('.tes7-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: false,
                asNavFor: '.iamge-slider',
                prevArrow: $(".testimonial7-prev-arrow"),
                nextArrow: $(".testimonial7-next-arrow"),
              });

              $('.iamge-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: false,
                asNavFor: '.tes7-slider',
                fade: true,
              });

              $('.team-logo-slider').owlCarousel({
                loop:true,
                margin:10,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:3,
                        nav:false
                    },
                    1000:{
                        items:5,
                        nav:false,
                        loop:false
                    }
                }
            });


  });


    //preloader
    $(window).on("load", function (event) {
      setTimeout(function () {
        $(".preloader").fadeToggle();
      }, 500);
    });

    	/* Text Effect Animation */
	if ($('.text-anime-style-1').length) {
		let staggerAmount 	= 0.05,
			translateXValue = 0,
			delayValue 		= 0.5,
		   animatedTextElements = document.querySelectorAll('.text-anime-style-1');
		
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.words, {
				duration: 1,
				delay: delayValue,
				x: 20,
				autoAlpha: 0,
				stagger: staggerAmount,
				scrollTrigger: { trigger: element, start: "top 85%" },
				});
		});		
	}
	
	if ($('.text-anime-style-2').length) {				
		let	 staggerAmount 		= 0.05,
			 translateXValue	= 20,
			 delayValue 		= 0.5,
			 easeType 			= "power2.out",
			 animatedTextElements = document.querySelectorAll('.text-anime-style-2');
		
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.chars, {
					duration: 1,
					delay: delayValue,
					x: translateXValue,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%"},
				});
		});		
	}
	
	if ($('.text-anime-style-3').length) {		
		let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');
		
		 animatedTextElements.forEach((element) => {
			//Reset if needed
			if (element.animation) {
				element.animation.progress(1).kill();
				element.split.revert();
			}

			element.split = new SplitText(element, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(element, { perspective: 400 });

			gsap.set(element.split.chars, {
				opacity: 0,
				x: "50",
			});

			element.animation = gsap.to(element.split.chars, {
				scrollTrigger: { trigger: element,	start: "top 95%" },
				x: "0",
				y: "0",
				rotateX: "0",
				opacity: 1,
				duration: 1,
				ease: Back.easeOut,
				stagger: 0.02,
			});
		});		
	}

  $('select').niceSelect();

  
            
})(jQuery);




function itemactive() {
  jQuery('.testimonial-carousel').on('slide.bs.carousel', function (evt) {
      jQuery('.testimonial-carousel .controls li.active').removeClass('active');
      jQuery('.testimonial-carousel .controls li:eq('+$(evt.relatedTarget).index()+')').addClass('active');
    })
};