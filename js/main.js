console.log("Js Connected");

// // GSAP plugin register---animating with GSAP below
gsap.registerPlugin(ScrollTrigger);

// Lenis smooth website scrolling---gsap
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
