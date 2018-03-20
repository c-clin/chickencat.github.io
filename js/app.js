// smooth scrolling
$(document).ready(function() {
	$('.nav-link').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 800);

	    return false;
	});
});

// open resume
$(document).ready(function() {
	$('.resume-button').click(function() {
		window.open('./images/Catherine-Lin-Resume.pdf', '_blank');
	});
});


