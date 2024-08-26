$(document).ready(function() {
    // Sticky navbar on scroll
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Scroll-up button show/hide
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll to top on click
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll for menu items
    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animations
    

    new Typed(".typing", {
        strings: ["Programmer", "Developer", "Designer"], 
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    
// About Styling :

    "Writer", "Consultant"
    new Typed(".typing-2", {
        strings: ["Programmer", "Developer", "Designer",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel setup
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // Download CV functionality
    $('#download-cv').click(function() {
        window.location.href = '𝗡𝗮𝗱𝗲𝗲𝗺-𝗔𝗵𝗺𝗮𝗱-𝗖𝗩✍️📚.pdf'; // Update with your CV file path
    });


    // Profile section functionality
    $('#profile-btn').click(function() {
        $('html, body').animate({
            scrollTop: $('#profile-section').offset().top // Smooth scroll to profile section
        }, 1000);
    });
});


// Checking Resume and revealing the close prompt
document.getElementById('check-resume').addEventListener('click', function(e) {
    e.preventDefault();
    const resumeContainer = document.getElementById('resume-container');
    const promptMessage = document.getElementById('prompt-message');

    resumeContainer.style.display = 'block'; // Show the resume
    this.style.display = 'none'; // Hide the "Check Resume" button

    // Simulate resume reading and reveal close prompt after a delay
    setTimeout(function() {
        promptMessage.style.display = 'block';
    }, 3000); // Delay for demo purposes, adjust as needed
});

// Close Resume functionality
document.getElementById('close-resume').addEventListener('click', function(e) {
    e.preventDefault();
    const resumeContainer = document.getElementById('resume-container');
    const promptMessage = document.getElementById('prompt-message');

    resumeContainer.style.display = 'none'; // Hide the resume
    document.getElementById('check-resume').style.display = 'inline-block'; // Show "Check Resume" button
    promptMessage.style.display = 'none'; // Hide close prompt
});

// Download CV functionality
document.getElementById('download-cv').addEventListener('click', function() {
    window.open('𝗡𝗮𝗱𝗲𝗲𝗺-𝗔𝗵𝗺𝗮𝗱-𝗖𝗩✍️📚.pdf', '_blank'); // Update with your CV file path
});

// Contact Form :
document
        .getElementById("contactForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          const name = document.querySelector(".field.name input").value;
          const email = document.querySelector(".field.email input").value;
          const subject = document.querySelector(
            '.field input[type="text"]:nth-child(2)'
          ).value;
          const message = document.querySelector(".textarea textarea").value;

          const emailBody = `Name: ${encodeURIComponent(
            name
          )}\nEmail: ${encodeURIComponent(
            email
          )}\nSubject: ${encodeURIComponent(
            subject
          )}\nMessage: ${encodeURIComponent(message)}`;
          const mailtoLink = `mailto:nadeemahmed7793@gmail.com?subject=${encodeURIComponent(
            subject
          )}&body=${emailBody}`;

          window.location.href = mailtoLink;
        });





























        
// Competed :



