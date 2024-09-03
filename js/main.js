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