
(function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


function openMenu() {
  var items = document.getElementById('nav-items');
  if (items.style.display == "none") {
    items.style.display = "flex";
  } else {
    items.style.display = "none";
  }
}

$(document).ready(function(){
  var currentSlide = $(".slideshow-container .mySlides:first-child"); // Get the first slide initially
  currentSlide.fadeIn(1000); // Fade in the first slide

  setInterval(function() {
    currentSlide.fadeOut(1000, function() { // Fade out the current slide
      currentSlide = currentSlide.next(".mySlides"); // Get the next slide
      if (!currentSlide.length) { // If there's no next slide, go back to the first one
        currentSlide = $(".slideshow-container .mySlides:first-child");
      }
      console.log(`currentSlide => ${JSON.stringify(currentSlide)}`);
      currentSlide.fadeIn(2000); // Fade in the next slide
    });
  }, 5000); // Set interval for slide change (5 seconds in this example)
});

document.addEventListener("DOMContentLoaded", function() {
  // Simulate loading
  var loadingBar = document.getElementById("loading-bar");
  loadingBar.style.display.width = "2%";
  var randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 to 4 seconds
  
  var startTime = new Date().getTime();
  var endTime = startTime + randomTime;
  
  var interval = setInterval(function() {
      var now = new Date().getTime();
      var progress = now - startTime;
      var percentage = (progress / randomTime) * 100;
      loadingBar.style.width = percentage + "%";
      
      if (now >= endTime) {
        clearInterval(interval);
        document.getElementById("loading-page").style.display = "none";
      }
  }, 10); // Update every 10 milliseconds
});

$(document).ready(function() {

  Fancybox.bind('[data-fancybox]', {
    Html : {
      youtube: {
        controls: 0,
        rel: 0,
        fs: 0
      }
    }
  });
});