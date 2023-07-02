$(document).ready(function() {
  var navLinks = $('.navbar-nav .nav-link'); // Get all navigation links
  var logo = $('#logo'); // Get the logo element
  
  $(window).scroll(function() {
    var currentPosition = $(window).scrollTop(); // Get the current scroll position
    
    // Check if current scroll position is on an odd-numbered page
    if ((Math.floor(currentPosition / $(window).height()) + 1) % 2 !== 0) {
      // Add the 'nav-scroll' class to navigation links and the 'logo-scroll' class to the logo
      navLinks.addClass('nav-scroll');
      logo.addClass('logo-scroll');
    } else {
      // Remove the 'nav-scroll' class from navigation links and the 'logo-scroll' class from the logo
      navLinks.removeClass('nav-scroll');
      logo.removeClass('logo-scroll');
    }
  });
});

$(document).ready(function() {
  var text = "Hello,\nworld! This is an animated text.";

  function animateText() {
    $('.animated-text').empty(); // Clear the previous text

    // Display each character with a delay
    var i = 0;
    var intervalId = setInterval(function() {
      if (text[i] === '\n') {
        $('.animated-text').append('<br>'); // Add a line break
      } else {
        $('.animated-text').append(text[i]);
      }
      i++;
      if (i === text.length) {
        clearInterval(intervalId); // Stop the interval when all characters are displayed
        setTimeout(animateText, 2000); // Call the animateText function again after 2 seconds
      }
    }, 100);
  }

  animateText(); // Call the animation function initially
});