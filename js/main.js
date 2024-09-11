///JS Menu Content
// 1. // GSAP Scroll for smooth scroll
// 2. // Globe Icon Switch On Hover
// 3. // Mobile Menu Icon Toggle
console.log("Js Connected");

// (1.) Start GSAP plugin register---animating with GSAP below
gsap.registerPlugin(ScrollTrigger);

// Lenis smooth website scrolling---gsap
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


// 2. // Globe Icon Switch On Hover
// Select the image element
const globeIcon = document.getElementById('globe-icon');

// Define the original and hover image sources
const originalSrc = 'images/icon-globe.svg';
const hoverSrc = 'images/icon-red-globe.svg';

// Add event listener for mouseover (hover)
globeIcon.addEventListener('mouseover', function() {
    globeIcon.style.opacity = 0; // Start fading out

    setTimeout(function() {
        globeIcon.src = hoverSrc; // Change the image source
        globeIcon.style.opacity = 1; // Fade in the new image
    }, 300); // Wait for the fade-out to complete
});

// Add event listener for mouseout (hover ends)
globeIcon.addEventListener('mouseout', function() {
    globeIcon.style.opacity = 0; // Start fading out

    setTimeout(function() {
        globeIcon.src = originalSrc; // Change back to the original image
        globeIcon.style.opacity = 1; // Fade in the original image
    }, 300); // Wait for the fade-out to complete
});

// (3.) Mobile Menu Icon Toggle//////////
let Menubutton = document.querySelector(".container-mobile-top-logo");

// Function to toggle hamburger menu
function swapMenuIcon() {
    Menubutton.classList.toggle("container-mobile-top-logo-swap");
    console.log("Menu Triggered");
}
// Adding event listeners
Menubutton.addEventListener("click", swapMenuIcon, false);

// mode switcher//////
const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
// //////////
let currentIndex = 0; // Track the current slide index
const slides = document.querySelectorAll('.expe-slide'); // All slides
const circles = document.querySelectorAll('.circle'); // All circles
let startX = 0; // Store the starting X position for touch

function showSlide(index) {
    // Hide all slides and reset circles
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        circles[i].classList.remove('active');
    });

    // Show the current slide and set the corresponding circle active
    slides[index].classList.add('active');
    circles[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Loop through slides
    showSlide(currentIndex);
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop backwards through slides
    showSlide(currentIndex);
}

// Initialize the first slide
showSlide(currentIndex);

// Automatically slide every 4 seconds
const autoSlide = setInterval(nextSlide, 4000);

// Event listeners for manual circle clicks (optional)
circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        clearInterval(autoSlide); // Stop auto-slide on manual interaction
        currentIndex = index;
        showSlide(currentIndex);
    });
});

// Touch event handling for swipe
document.querySelector('#expe-main').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Get the initial touch position
});

document.querySelector('#expe-main').addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX; // Get the position when touch ends

    // Determine swipe direction
    if (startX > endX + 50) {
        nextSlide(); // Swipe left -> show next slide
    } else if (startX < endX - 50) {
        previousSlide(); // Swipe right -> show previous slide
    }
});
