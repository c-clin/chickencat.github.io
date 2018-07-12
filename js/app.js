$(document).ready(function() {
  // smooth scrolling
  $('.nav-link').click(function() {
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top
      },
      800
    );

    return false;
  });
  // // open resume
  // $('.resume-button').click(function() {
  //     window.open('./images/Portfolio-Resume.pdf', '_blank');
  // });

  // add dim nav-bar
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var os = -2; // dim trans starts t #about
    var ht = $('.intro').height();
    if (scroll > os + ht) {
      $('.navbar').css('background', 'rgba(0,0,0,0.5)');
      $('.navbar').css('transition', '.4s ease-in-out');
    } else {
      $('.navbar').css('background', 'transparent');
      $('.navbar').css('transition', '.4s ease-in-out');
    }
  });
  // typing effect
  var typed = new Typed('#sub-title', {
    strings: ["hi i'm Catherine, ^500 a frontend developer^600     :)^300"],
    typeSpeed: 15,
    loop: true,
    showCursor: false
  });

  // animation on scroll
  $('.js--about-me').waypoint(
    function(direction) {
      $('.js--about-me').addClass('animated fadeInUp');
    },
    {
      offset: '50%'
    }
  );

  $('.js--row-1').waypoint(
    function(direction) {
      $('.js--row-1').addClass('animated fadeInRight');
    },
    {
      offset: '50%'
    }
  );

  $('.js--row-2').waypoint(
    function(direction) {
      $('.js--row-2').addClass('animated fadeInLeft');
    },
    {
      offset: '50%'
    }
  );

  $('.js--row-3').waypoint(
    function(direction) {
      $('.js--row-3').addClass('animated fadeInUp');
    },
    {
      offset: '50%'
    }
  );
});
