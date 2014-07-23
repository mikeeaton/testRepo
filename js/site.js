$(function() {

	// fade in/out Logo	

	$(window).scroll(function(){
	   if ($(this).scrollTop() > 200) {
            $('.logo-hide').fadeIn();
        } else {
            $('.logo-hide').fadeOut();
        }
	});
	
	// Curtain Slide Up
	
	$.fn.scrollView = function () {
	  return this.each(function () {
	    $('html, body').animate({
	      scrollTop: $(this).offset().top
	    }, 600);
	  });
	}	
	
	$('a.curtain-scroll-btn').click(function (event) {
	  event.preventDefault();
	  $('.scroll-to').scrollView();
	});


	// Modal

	$(".share-e").click(function(){
		$(".email-modal").show();
	});

	$(".modal-close-btn").click(function(){
		$(".email-modal").hide();
	});
	  	  

	// Expandable Menus
		
		$("a.nav-expand").click(function(){
			$(".m-home-header>nav>ul").toggle();
		});

		$("a.nav-expand").click(function(){
			$(".m-header>nav>ul").toggle();
		});

		$("a.nav-expand-a").click(function(){
			$("nav.expertise ul").slideToggle(300);
			$(".edit").toggle();
		});

		$("a.nav-expand-b").click(function(){
			$("nav.related ul").slideToggle(300);
		});

		$("a.nav-expand-c").click(function(){
			$("nav.related-list ul").slideToggle(300);
		});

		$("a.nav-expand-d").click(function(){
			$("nav.popular-list ul").slideToggle(300);
		});

		$("a.nav-expand").click(function(){
			$(".m-home-nav>ul.m-nav").toggle();
		});
		  

	// Main Dropdown Menu Functions

	  $(".share").hover(function(){
		$(".share>.list").fadeToggle(300);
	  });	
	  
	  $(".all").hover(function(){
		$(".all>.list").fadeToggle(300);
	  });
	  
	  $(".rel").hover(function(){
		$(".rel>.list").fadeToggle(300);
	  });
	  
	  $(".read").hover(function(){
		$(".read>.list").fadeToggle(300);
	  });
	  
	  
	// Sub Menu

	  $(".avatar-menu").hover(function(){
	    $(".sub-menu").fadeToggle(300);
	  });
	  
	  
	// Aside EDIT Function

	  $(".edit").click(function(){
	    $(".x-edit").toggle();
	    $(".number").toggle();
	    $("label").toggleClass("label-hide");
	  });
	  
	// Incremental Slider
	  
    	$( ".ui-slider" ).slider({
            value:250,
            min: 0,
            max: 500,
            step: 250,
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.value );
            }
        });
        
      
    // Single Checkbox Selection 
        
    	$(":checkbox").on('change', function () {
       		$('[name="' + $(this).attr('name') + '"]').not(this).prop('checked', false);
	   	});
	   	
    
    // Expandable Menus

		$("a.panel-a").click(function(){
			$(".user-panel-a").show();
			$(".user-panel-b, .user-panel-c, .user-panel-d, .user-panel-e, .user-panel-f, .user-panel-g, .user-panel-h, .user-panel-i, .user-panel-j, .user-panel-k, .user-panel-l, .user-panel-m, .user-panel-n").hide();
			$(".panel-a").addClass("user-active");
			$(".panel-b, .panel-c, .panel-d, .panel-e, .panel-f, .panel-g, .panel-h, .panel-i, .panel-j, .panel-k, .panel-l, .panel-m, .panel-n").removeClass("user-active");
		});

		$("a.panel-b").click(function(){
			$(".user-panel-b").show();
			$(".user-panel-a, .user-panel-c, .user-panel-d, .user-panel-e, .user-panel-f, .user-panel-g, .user-panel-h, .user-panel-i, .user-panel-j, .user-panel-k, .user-panel-l, .user-panel-m, .user-panel-n").hide();
			$(".panel-b").addClass("user-active");
			$(".panel-a, .panel-c, .panel-d, .panel-e, .panel-f, .panel-g, .panel-h, .panel-i, .panel-j, .panel-k, .panel-l, .panel-m, .panel-n").removeClass("user-active");
		});

		$("a.panel-c").click(function(){
			$(".user-panel-c").show();
			$(".user-panel-a, .user-panel-b, .user-panel-d, .user-panel-e, .user-panel-f, .user-panel-g, .user-panel-h, .user-panel-i, .user-panel-j, .user-panel-k, .user-panel-l, .user-panel-m, .user-panel-n").hide();
			$(".panel-c").addClass("user-active");
			$(".panel-a, .panel-b, .panel-d, .panel-e, .panel-f, .panel-g, .panel-h, .panel-i, .panel-j, .panel-k, .panel-l, .panel-m, .panel-n").removeClass("user-active");
		});

		$("a.panel-d").click(function(){
			$(".user-panel-d").show();
			$(".user-panel-a, .user-panel-b, .user-panel-c, .user-panel-e, .user-panel-f, .user-panel-g, .user-panel-h, .user-panel-i, .user-panel-j, .user-panel-k, .user-panel-l, .user-panel-m, .user-panel-n").hide();
			$(".panel-d").addClass("user-active");
			$(".panel-a, .panel-b, .panel-c, .panel-e, .panel-f, .panel-g, .panel-h, .panel-i, .panel-j, .panel-k, .panel-l, .panel-m, .panel-n").removeClass("user-active");
		});

		$("a.panel-e").click(function(){
			$(".user-panel-e").show();
			$(".user-panel-a, .user-panel-b, .user-panel-c, .user-panel-d, .user-panel-f, .user-panel-g, .user-panel-h, .user-panel-i, .user-panel-j, .user-panel-k, .user-panel-l, .user-panel-m, .user-panel-n").hide();
			$(".panel-e").addClass("user-active");
			$(".panel-a, .panel-b, .panel-c, .panel-d, .panel-f, .panel-g, .panel-h, .panel-i, .panel-j, .panel-k, .panel-l, .panel-m, .panel-n").removeClass("user-active");
		});
		
		$("a.panel-f").click(function(){
			$(".user-panel-f").show();
			$(".user-panel-a, .user-panel-b, .user-panel-c, .user-panel-d, .user-panel-e, .user-panel-g, .user-panel-h, .user-panel-i, .user-panel-j, .user-panel-k, .user-panel-l, .user-panel-m, .user-panel-n").hide();
			$(".panel-f").addClass("user-active");
			$(".panel-a, .panel-b, .panel-c, .panel-d, .panel-e, .panel-g, .panel-h, .panel-i, .panel-j, .panel-k, .panel-l, .panel-m, .panel-n").removeClass("user-active");
		});
		
		$("a.panel-g").click(function(){
			$(".user-panel-g").show();
			$(".user-panel-a, .user-panel-b, .user-panel-c, .user-panel-d, .user-panel-e, .user-panel-f, .user-panel-h, .user-panel-i, .user-panel-j, .user-panel-k, .user-panel-l, .user-panel-m, .user-panel-n").hide();
			$(".panel-g").addClass("user-active");
			$(".panel-a, .panel-b, .panel-c, .panel-d, .panel-e, .panel-f, .panel-h, .panel-i, .panel-j, .panel-k, .panel-l, .panel-m, .panel-n").removeClass("user-active");
		});
		
		$("a.panel-h").click(function(){
			$(".user-panel-h").show();
			$(".user-panel-a, .user-panel-b, .user-panel-c, .user-panel-d, .user-panel-e, .user-panel-f, .user-panel-g, .user-panel-i, .user-panel-j, .user-panel-k, .user-panel-l, .user-panel-m, .user-panel-n").hide();
			$(".panel-h").addClass("user-active");
			$(".panel-a, .panel-b, .panel-c, .panel-d, .panel-e, .panel-f, .panel-g, .panel-i, .panel-j, .panel-k, .panel-l, .panel-m, .panel-n").removeClass("user-active");
		});
		
		$("a.panel-i").click(function(){
			$(".user-panel-i").show();
			$(".user-panel-a, .user-panel-b, .user-panel-c, .user-panel-d, .user-panel-e, .user-panel-f, .user-panel-g, .user-panel-h, .user-panel-j, .user-panel-k, .user-panel-l, .user-panel-m, .user-panel-n").hide();
			$(".panel-i").addClass("user-active");
			$(".panel-a, .panel-b, .panel-c, .panel-d, .panel-e, .panel-f, .panel-g, .panel-h, .panel-j, .panel-k, .panel-l, .panel-m, .panel-n").removeClass("user-active");
		});
		
		$("a.panel-j").click(function(){
			$(".user-panel-j").show();
			$(".user-panel-a, .user-panel-b, .user-panel-c, .user-panel-d, .user-panel-e, .user-panel-f, .user-panel-g, .user-panel-h, .user-panel-i, .user-panel-k, .user-panel-l, .user-panel-m, .user-panel-n").hide();
			$(".panel-j").addClass("user-active");
			$(".panel-a, .panel-b, .panel-c, .panel-d, .panel-e, .panel-f, .panel-g, .panel-h, .panel-i, .panel-k, .panel-l, .panel-m, .panel-n").removeClass("user-active");
		});
		
		$("a.panel-k").click(function(){
			$(".user-panel-k").show();
			$(".user-panel-a, .user-panel-b, .user-panel-c, .user-panel-d, .user-panel-e, .user-panel-f, .user-panel-g, .user-panel-h, .user-panel-i, .user-panel-j, .user-panel-l, .user-panel-m, .user-panel-n").hide();
			$(".panel-k").addClass("user-active");
			$(".panel-a, .panel-b, .panel-c, .panel-d, .panel-e, .panel-f, .panel-g, .panel-h, .panel-i, .panel-j, .panel-l, .panel-m, .panel-n").removeClass("user-active");
		});
		
		$("a.panel-l").click(function(){
			$(".user-panel-l").show();
			$(".user-panel-a, .user-panel-b, .user-panel-c, .user-panel-d, .user-panel-e, .user-panel-f, .user-panel-g, .user-panel-h, .user-panel-i, .user-panel-j, .user-panel-k, .user-panel-m, .user-panel-n").hide();
			$(".panel-l").addClass("user-active");
			$(".panel-a, .panel-b, .panel-c, .panel-d, .panel-e, .panel-f, .panel-g, .panel-h, .panel-i, .panel-j, .panel-k, .panel-m, .panel-n").removeClass("user-active");
		});
		
		$("a.panel-m").click(function(){
			$(".user-panel-m").show();
			$(".user-panel-a, .user-panel-b, .user-panel-c, .user-panel-d, .user-panel-e, .user-panel-f, .user-panel-g, .user-panel-h, .user-panel-i, .user-panel-j, .user-panel-k, .user-panel-l, .user-panel-n").hide();
			$(".panel-m").addClass("user-active");
			$(".panel-a, .panel-b, .panel-c, .panel-d, .panel-e, .panel-f, .panel-g, .panel-h, .panel-i, .panel-j, .panel-k, .panel-l, .panel-n").removeClass("user-active");
		});
		
		$("a.panel-n").click(function(){
			$(".user-panel-n").show();
			$(".user-panel-a, .user-panel-b, .user-panel-c, .user-panel-d, .user-panel-e, .user-panel-f, .user-panel-g, .user-panel-h, .user-panel-i, .user-panel-j, .user-panel-k, .user-panel-l, .user-panel-m").hide();
			$(".panel-n").addClass("user-active");
			$(".panel-a, .panel-b, .panel-c, .panel-d, .panel-e, .panel-f, .panel-g, .panel-h, .panel-i, .panel-j, .panel-k, .panel-l, .panel-m").removeClass("user-active");
		});
	
		
		
		
	
});