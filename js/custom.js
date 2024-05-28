
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

  // var slideshowContainer = $(".slideshow-container");
  // var slides = slideshowContainer.find(".mySlides"); // Get all slides
  // var currentSlideIndex = 0; // Initialize current slide index

  // // Hide all slides except the first one
  // slides.not(":first").hide();

  // setInterval(function() {
  //   slides.eq(currentSlideIndex).fadeOut(500); // Fade out the current slide
  //   currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Get the next slide index
  //   slides.eq(currentSlideIndex).fadeIn(500); // Fade in the next slide
  // }, 5000); // Set interval for slide change (5 seconds in this example)

  function loadPage() {
    var loadingBar = document.getElementById("loading-bar");
    var loadingPage = document.getElementById("loading-page");
  
    // Hide the page content initially
    // document.body.style.display = "none";
  
    // Display the loading page
    loadingPage.style.display = "loading-bar";
  
    // Start time of the page load
    var startTime = performance.now();
  
    // Show loading progress
    var interval = setInterval(function() {
      var currentTime = performance.now();
      var elapsedTime = currentTime - startTime;
      var loadPercentage = Math.min((elapsedTime / 3000) * 100, 100); // Assuming total loading time of 2 seconds
  
      console.log(`loadPercentage => ${loadPercentage}`);
      // loadingBar.style.width = loadPercentage + "%";
  
      if (loadPercentage >= 100) {
        clearInterval(interval);
  
        // Hide the loading page and display the content
        loadingPage.style.display = "none";
        document.body.style.display = "block";
  
        // Start the slideshow after the page is fully loaded
        startSlideshow();
      }
    }, 100);
  }
  
  function startSlideshow() {
    var slideshowContainer = $(".slideshow-container");
    var slides = slideshowContainer.find(".mySlides"); // Get all slides
    var currentSlideIndex = 0; // Initialize current slide index
  
    // Hide all slides except the first one
    slides.not(":first").hide();
  
    setInterval(function() {
      slides.eq(currentSlideIndex).fadeOut(2000); // Fade out the current slide
      currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Get the next slide index
      slides.eq(currentSlideIndex).fadeIn(500); // Fade in the next slide
    }, 5000); // Set interval for slide change (5 seconds in this example)
  }
  
  // Call the loadPage function when the webpage is fully loaded
  loadPage();
  // window.addEventListener('load', loadPage);
  

// document.addEventListener("DOMContentLoaded", function() {
//   // Simulate loading
//   var loadingBar = document.getElementById("loading-bar");
//   loadingBar.style.display.width = "2%";
//   var randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 to 4 seconds
  
//   var startTime = new Date().getTime();
//   var endTime = startTime + randomTime;
  
//   var interval = setInterval(function() {
//       var now = new Date().getTime();
//       var progress = now - startTime;
//       var percentage = (progress / randomTime) * 100;
//       loadingBar.style.width = percentage + "%";
      
//       if (now >= endTime) {
//         clearInterval(interval);
//         document.getElementById("loading-page").style.display = "none";
//       }
//   }, 10); // Update every 10 milliseconds
// });

$(document).ready(function() {

  Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: {
      display: {
        left: ["infobar"],
        middle: [
          "zoomIn",
          "zoomOut",
          "toggle1to1",
          "rotateCCW",
          "rotateCW",
          "flipX",
          "flipY",
        ],
        right: ["slideshow", "thumbs", "close", "fullscreen"],
      },
    },
  });
  
});

document.addEventListener("DOMContentLoaded", function() {
        const text = "Craft CoDe";
        const logoElement = document.getElementById("animatedLogo");
        let index = 0;

        function typeLetter() {
            if (index < text.length) {
                logoElement.textContent += text[index];
                index++;
                setTimeout(typeLetter, 200); // Adjust speed here (milliseconds)
            }
        }

        setTimeout(typeLetter, 100); // Initial delay before starting the animation
    });

// mailer

document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Retrieve form data
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const company = document.getElementById('contact-company').value;
  const message = document.getElementById('contact-message').value;

  // Create a FormData object
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('company', company);
  formData.append('message', message);

  try {
    // Send the form data to the PHP script using fetch
    const response = await fetch('send_email.php', {
      method: 'POST',
      body: formData
    });

    // Handle the response
    const result = await response.text();
    alert(result); // Display the response from the server
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while sending the email.');
  }
});
