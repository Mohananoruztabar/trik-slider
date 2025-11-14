const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section2',
            start: '0% 50%',
            end: '100% 50%',
            scrub: 1,
            
        }
    });

    tl.to(".one-img", {
        x: -500,
        rotate: -30
    }, 'a')
    tl.to(".three-img", {
        x: 500,
        rotate: 30
    }, 'a')
    tl.to(".two-img", {
        x: -500,
        rotate: -30,
        delay: -0.5
    }, 'b')
    tl.to(".four-img", {
        x: 500,
        delay: -0.5,
        rotate: 30
    }, 'b')
    tl.to(".sec-3 h2", {
        y: -100,
        opacity: 1,
        delay: -0.4,
    }, 'b')
    tl.to(".sec-3 a", {
        y: -100,
        opacity: 1,
        delay: -0.4,
    }, 'b')
});

mm.add("(max-width: 799px)", () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section2',
            start: '0% 50%',
            end: '100% 80%',
            scrub: 1,
        }
    });

    tl.to(".one-img", {
        x: -200,
        rotate: -30
    }, 'a')
    tl.to(".three-img", {
        x: 200,
        rotate: 30
    }, 'a')
    tl.to(".two-img", {
        x: -200,
        rotate: -30,
        delay: -0.5
    }, 'b')
    tl.to(".four-img", {
        x: 200,
        delay: -0.5,
        rotate: 30
    }, 'b')
    tl.to(".sec-3 h2", {
        y: -100,
        opacity: 1,
        delay: -0.4,
    }, 'b')
    tl.to(".sec-3 a", {
        y: -100,
        opacity: 1,
        delay: -0.4,
    }, 'b')
});