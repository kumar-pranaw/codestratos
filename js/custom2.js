$(document).ready(function() {
	$('#fullpage').fullpage({
		
		//Navigation
		menu: '#menu',
		responsive: 1200, 
		lockAnchors: true,
		anchors:['firstPage', 'secondPage'],
		navigation: false,
		navigationPosition: 'left',
        navigationTooltips:false,  //['firstSlide', 'secondSlide']
		showActiveTooltip: false,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		fitToSection:false,

		//Scrolling
		css3: true,
		scrollingSpeed: 1000,
		autoScrolling: false,
		fitToSection: false,
		fitToSectionDelay: 1000,
		scrollOverflow:true,
		scrollBar: true,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '.section, #element1, .footer-section, .box-cnt-section, .solution-section, .blog-section, .team-section, .asset, .hr-tech-scroll, .solution-pagebanner',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,
		

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#ccc', '#fff'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){
		
		},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
			
	});

	$('#page-down').click(function(){
		$.fn.fullpage.moveSectionDown();
	});
	//$('#page-up').click(function(){
//		$.fn.fullpage.moveTo(1)
//	});

	new WOW().init();

	$("#main-header").load("/templates/header/main-header.html");
	$("#main-footer").load("/templates/footer/main-footer.html");
	
	// iot-page
	$(".arena-list li:nth-child(1)").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(".view-list1").fadeIn();
		$(".view-list5, .view-list2, .view-list3, .view-list4").hide();
	});
	$(".arena-list li:nth-child(2)").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(".view-list2").fadeIn();
		$(".view-list5, .view-list1, .view-list3, .view-list4").hide();
	});
	$(".arena-list li:nth-child(3)").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(".view-list3").fadeIn();
		$(".view-list5, .view-list2, .view-list1, .view-list4").hide();
	});
	$(".arena-list li:nth-child(4)").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(".view-list4").fadeIn();
		$(".view-list5, .view-list2, .view-list3, .view-list1").hide();
	});	
	$(".arena-list li:nth-child(5)").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(".view-list5").fadeIn();
		$(".view-list1, .view-list2, .view-list3, .view-list4").hide();
	});	

	$(".tablist-1").click(function(){
		$(this).addClass('activeid').siblings().removeClass('activeid');
		$(".tab-list").removeClass("activeid");
	});	


	if($(window).width() >= 1024){

		
		$("#tab1").click(function(){
			$("#content1").addClass("activesec").fadeIn();
			$("#content4").hide();
			$("#content2").hide();	
			$("#content3").hide();	
			$("#content5").hide();	
			$("#content6").hide();	
			$("#content7").hide();	
			$("#content8").hide();	
		});	
		$("#tab2").click(function(){
			$("#content2").addClass("activesec").fadeIn();
			$("#content4").hide();
			$("#content1").hide();	
			$("#content3").hide();	
			$("#content5").hide();	
			$("#content6").hide();	
			$("#content7").hide();	
			$("#content8").hide();	
		});	
		$("#tab3").click(function(){
			$("#content3").addClass("activesec").fadeIn();
			$("#content4").hide();
			$("#content2").hide();	
			$("#content1").hide();	
			$("#content5").hide();
			$("#content6").hide();	
			$("#content7").hide();	
			$("#content8").hide();		
		});	
		$("#tab4").click(function(){
			$("#content4").addClass("activesec").fadeIn();
			$("#content1").hide();
			$("#content2").hide();	
			$("#content3").hide();
			$("#content5").hide();
			$("#content6").hide();
			$("#content7").hide();
			$("#content8").hide();	
		});	
		$("#tab5").click(function(){
			$("#content5").addClass("activesec").fadeIn();
			$("#content1").hide();
			$("#content2").hide();	
			$("#content3").hide();
			$("#content4").hide();
			$("#content6").hide();
			$("#content7").hide();
			$("#content8").hide();	
		});	
		$("#tab6").click(function(){
			$("#content6").addClass("activesec").fadeIn();
			$("#content1").hide();
			$("#content2").hide();	
			$("#content3").hide();	
			$("#content5").hide();
			$("#content4").hide();
			$("#content7").hide();
			$("#content8").hide();
		});	
		$("#tab7").click(function(){
			$("#content7").addClass("activesec").fadeIn();
			$("#content1").hide();
			$("#content2").hide();	
			$("#content3").hide();	
			$("#content5").hide();
			$("#content6").hide();
			$("#content4").hide();
			$("#content8").hide();
		});	
		$("#tab8").click(function(){
			$("#content8").addClass("activesec").fadeIn();
			$("#content1").hide();
			$("#content2").hide();	
			$("#content3").hide();
			$("#content5").hide();
			$("#content6").hide();
			$("#content7").hide();
			$("#content4").hide();	
		});	



		$("#tab11").click(function(){
			$("#tab1").addClass("activeid").parent().parent().siblings().find(".tab-list ").removeClass("activeid");
			$(".tablist-1").removeClass("activeid");
			$.fn.fullpage.moveTo(3);
			$("#content1").fadeIn();
			$("#content2").hide();
			$("#content3").hide();
			$("#content4").hide();
			$("#content5").hide();
			$("#content6").hide();
			$("#content7").hide();
			$("#content8").hide();
		});
		$("#tab21").click(function(){
			$("#tab2").addClass("activeid").parent().parent().siblings().find(".tab-list ").removeClass("activeid");
			$(".tablist-1").removeClass("activeid");
			$.fn.fullpage.moveTo(3);
			$("#content2").fadeIn();
			$("#content1").hide();
			$("#content3").hide();
			$("#content4").hide();
			$("#content5").hide();
			$("#content6").hide();
			$("#content7").hide();
			$("#content8").hide();
		});
		$("#tab31").click(function(){
			$("#tab3").addClass("activeid").parent().parent().siblings().find(".tab-list ").removeClass("activeid");
			$(".tablist-1").removeClass("activeid");
			$.fn.fullpage.moveTo(3);
			$("#content3").fadeIn();
			$("#content2").hide();
			$("#content1").hide();
			$("#content4").hide();
			$("#content5").hide();
			$("#content6").hide();
			$("#content7").hide();
			$("#content8").hide();
		});
		$("#tab41").click(function(){
			$("#tab4").addClass("activeid").parent().parent().siblings().find(".tab-list ").removeClass("activeid");
			$(".tablist-1").removeClass("activeid");
			$.fn.fullpage.moveTo(3);
			$("#content4").fadeIn();
			$("#content2").hide();
			$("#content3").hide();
			$("#content1").hide();
			$("#content5").hide();
			$("#content6").hide();
			$("#content7").hide();
			$("#content8").hide();
		});
		$("#tab51").click(function(){
			$("#tab5").addClass("activeid").parent().parent().siblings().find(".tab-list ").removeClass("activeid");
			$(".tablist-1").removeClass("activeid");
			$.fn.fullpage.moveTo(3);
			$("#content5").fadeIn();
			$("#content2").hide();
			$("#content3").hide();
			$("#content4").hide();
			$("#content1").hide();
			$("#content6").hide();
			$("#content7").hide();
			$("#content8").hide();
		});
		$("#tab61").click(function(){
			$("#tab6").addClass("activeid").parent().parent().siblings().find(".tab-list ").removeClass("activeid");
			$(".tablist-1").removeClass("activeid");
			$.fn.fullpage.moveTo(3);
			$("#content6").fadeIn();
			$("#content2").hide();
			$("#content3").hide();
			$("#content4").hide();
			$("#content5").hide();
			$("#content1").hide();
			$("#content7").hide();
			$("#content8").hide();
		});
		$("#tab71").click(function(){
			$("#tab7").addClass("activeid").parent().parent().siblings().find(".tab-list ").removeClass("activeid");
			$(".tablist-1").removeClass("activeid");
			$.fn.fullpage.moveTo(3);
			$("#content7").fadeIn();
			$("#content2").hide();
			$("#content3").hide();
			$("#content4").hide();
			$("#content5").hide();
			$("#content6").hide();
			$("#content1").hide();
			$("#content8").hide();
		});
		$("#tab81").click(function(){
			$("#tab8").addClass("activeid").parent().parent().siblings().find(".tab-list ").removeClass("activeid");
			$(".tablist-1").removeClass("activeid");
			$.fn.fullpage.moveTo(3);
			$("#content8").fadeIn();
			$("#content2").hide();
			$("#content3").hide();
			$("#content4").hide();
			$("#content5").hide();
			$("#content6").hide();
			$("#content7").hide();
			$("#content1").hide();
		});
	}
	
	if($(window).width() < 1023){
		
		$("#tab1").click(function(){
			$("#recruitment").slideToggle('slow');
			$("#employee-engagement").hide();
			$("#on-boarding").hide();	
			$("#workforce-management").hide();	
			$("#performance-management").hide();	
			$("#training-development").hide();	
			$("#employee-benefits").hide();	
			$("#payroll").hide();	
		});	
		$("#tab2").click(function(){
			$("#on-boarding").slideToggle();
			$("#employee-engagement").hide();
			$("#recruitment").hide();	
			$("#workforce-management").hide();	
			$("#performance-management").hide();	
			$("#training-development").hide();	
			$("#employee-benefits").hide();	
			$("#payroll").hide();	
		});	
		$("#tab3").click(function(){
			$("#workforce-management").slideToggle();
			$("#employee-engagement").hide();
			$("#on-boarding").hide();	
			$("#recruitment").hide();	
			$("#performance-management").hide();
			$("#training-development").hide();	
			$("#employee-benefits").hide();	
			$("#payroll").hide();		
		});	
		$("#tab4").click(function(){
			$("#employee-engagement").slideToggle();
			$("#recruitment").hide();
			$("#on-boarding").hide();	
			$("#workforce-management").hide();
			$("#performance-management").hide();
			$("#training-development").hide();
			$("#employee-benefits").hide();
			$("#payroll").hide();	
		});	
		$("#tab5").click(function(){
			$("#performance-management").slideToggle();
			$("#recruitment").hide();
			$("#on-boarding").hide();	
			$("#workforce-management").hide();
			$("#employee-engagement").hide();
			$("#training-development").hide();
			$("#employee-benefits").hide();
			$("#payroll").hide();	
		});	
		$("#tab6").click(function(){
			$("#training-development").slideToggle();
			$("#recruitment").hide();
			$("#on-boarding").hide();	
			$("#workforce-management").hide();	
			$("#performance-management").hide();
			$("#employee-engagement").hide();
			$("#employee-benefits").hide();
			$("#payroll").hide();
		});	
		$("#tab7").click(function(){
			$("#employee-benefits").slideToggle();
			$("#recruitment").hide();
			$("#on-boarding").hide();	
			$("#workforce-management").hide();	
			$("#performance-management").hide();
			$("#training-development").hide();
			$("#employee-engagement").hide();
			$("#payroll").hide();
		});	
		$("#tab8").click(function(){
			$("#payroll").slideToggle();
			$("#recruitment").hide();
			$("#on-boarding").hide();	
			$("#workforce-management").hide();
			$("#performance-management").hide();
			$("#training-development").hide();
			$("#employee-benefits").hide();
			$("#employee-engagement").hide();	
		});	

		$("#tab11").click(function(){
			$.fn.fullpage.moveTo(3);
			$("#content1").fadeIn();
			$("#content2").hide();
			$("#content3").hide();
			$("#content4").hide();
			$("#content5").hide();
			$("#content6").hide();
			$("#content7").hide();
			$("#content8").hide();
		});
		$("#tab21").click(function(){
			$.fn.fullpage.moveTo(3);
			$("#content2").fadeIn();
			$("#content1").hide();
			$("#content3").hide();
			$("#content4").hide();
			$("#content5").hide();
			$("#content6").hide();
			$("#content7").hide();
			$("#content8").hide();
		});
		$("#tab31").click(function(){
			$.fn.fullpage.moveTo(3);
			$("#content3").fadeIn();
			$("#content2").hide();
			$("#content1").hide();
			$("#content4").hide();
			$("#content5").hide();
			$("#content6").hide();
			$("#content7").hide();
			$("#content8").hide();
		});
		$("#tab41").click(function(){
			$.fn.fullpage.moveTo(3);
			$("#content4").fadeIn();
			$("#content2").hide();
			$("#content3").hide();
			$("#content1").hide();
			$("#content5").hide();
			$("#content6").hide();
			$("#content7").hide();
			$("#content8").hide();
		});
		$("#tab51").click(function(){
			$.fn.fullpage.moveTo(3);
			$("#content5").fadeIn();
			$("#content2").hide();
			$("#content3").hide();
			$("#content4").hide();
			$("#content1").hide();
			$("#content6").hide();
			$("#content7").hide();
			$("#content8").hide();
		});
		$("#tab61").click(function(){
			$.fn.fullpage.moveTo(3);
			$("#content6").fadeIn();
			$("#content2").hide();
			$("#content3").hide();
			$("#content4").hide();
			$("#content5").hide();
			$("#content1").hide();
			$("#content7").hide();
			$("#content8").hide();
		});
		$("#tab71").click(function(){
			$.fn.fullpage.moveTo(3);
			$("#content7").fadeIn();
			$("#content2").hide();
			$("#content3").hide();
			$("#content4").hide();
			$("#content5").hide();
			$("#content6").hide();
			$("#content1").hide();
			$("#content8").hide();
		});
		$("#tab81").click(function(){
			$.fn.fullpage.moveTo(3);
			$("#content8").fadeIn();
			$("#content2").hide();
			$("#content3").hide();
			$("#content4").hide();
			$("#content5").hide();
			$("#content6").hide();
			$("#content7").hide();
			$("#content1").hide();
		});
	}
	$( ".section" ).fadeIn( 200 );
	
});

function myFunctionGetAQuote() {
    var user_fname_gq = $("#user_fname_gq").val();
    var user_lname_gq = $("#user_lname_gq").val();
    var user_email_gq =  $("#user_email_gq").val();
    var user_contact_gq =  $("#user_contact_gq").val();
    var user_business_requirement_gq =  $("#user_business_requirement_gq").val();

    var Success = false;
    $.ajax({
        type: "POST"
        , url: "../../serverscript/get_a_quote_on_blur.php"
        , data: {
            user_fname_gq: user_fname_gq
            , user_lname_gq: user_lname_gq
            , user_email_gq: user_email_gq
            , user_contact_gq: user_contact_gq
            , user_business_requirement_gq: user_business_requirement_gq
        }
        , success: function (data) {
            Success = true;
        }
        , error: function (data) {
            Success = false;
        }
    })
} 


function myFunctionApplyJob() {
	var app_name_aj = $("#app_name_aj").val();
	var app_email_aj = $("#app_email_aj").val();
	var app_number_aj =  $("#app_number_aj").val();
	var app_cctc_aj =  $("#app_cctc_aj").val();
	var app_ectc_aj =  $("#app_ectc_aj").val();
	var app_cv_aj =  $("#app_cv_aj").val();

	var Success = false;
	$.ajax({
		type: "POST"
		, url: "../../serverscript/apply_job_on_blur.php"
		, data: {
			app_name_aj: app_name_aj
			, app_email_aj: app_email_aj
			, app_number_aj: app_number_aj
			, app_cctc_aj: app_ectc_aj
			, app_ectc_aj: app_ectc_aj
			, app_cv_aj: app_cv_aj
		}
		, success: function (data) {
			Success = true;
		}
		, error: function (data) {
			Success = false;
		}
	})
} 
$(document).ready(function(){
$(window).scrollTop(0);
	// $('#page-up').click(function(){
	// 	$(window).scrollTop(0);
	// })

	// $("#tabsection").on("mousewheel", function(e){
	// 	if(e.originalEvent.wheelDelta >= 0){
	// 	  var prevEle = $("#tabsection .tab-main").find(".tab-list.activeid").attr("data-prev");
	// 	  if(prevEle){
	// 		  $("#"+prevEle).click();
	// 	  }else{
	// 		$.fn.fullpage.moveTo(2);

	// 		setTimeout(function(){
	// 			$.fn.fullpage.setAllowScrolling(true);
	// 			$.fn.fullpage.setAutoScrolling(true);
	// 			$("body").css("overflow", "auto");
	// 		}, 1000);
			
	// 	  }
	// 	}
	// 	else{
	// 	  var nextEle = $("#tabsection .tab-main").find(".tab-list.activeid").attr("data-next");
	// 	  if(nextEle){
	// 		  $("#"+nextEle).click();
	// 	  }else{
	// 		$.fn.fullpage.moveTo(4);
			
	// 		setTimeout(function(){
	// 			$.fn.fullpage.setAllowScrolling(true);
	// 			$.fn.fullpage.setAutoScrolling(true);
	// 			$("body").css("overflow", "auto");
	// 		}, 1000);
	// 	  }
	// 	}	
		  
	// })

});
