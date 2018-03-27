// smooth scrolling
$(document).ready(function() {
	$('.nav-link').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 800);

	    return false;
	});
});

// add dim nav-bar
$(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var os = -2 // dim trans starts t #about 
        var ht = $('.intro').height(); 
        if(scroll > os + ht){
            $(".navbar").css("background", "rgba(0,0,0,0.8)");
            $(".navbar").css("transition", ".4s ease-in-out");
        } else {
        	$(".navbar").css("background", "transparent");
        	$(".navbar").css("transition", ".4s ease-in-out");
        }
    });
});

// open resume
$(document).ready(function() {
	$('.resume-button').click(function() {
		window.open('./images/Catherine-Lin-Resume.pdf', '_blank');
	});
});


