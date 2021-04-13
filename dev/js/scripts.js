import { gsap } from "gsap";

// gsap.to("#circle", { duration: 4, x: 200 });

// gsap.from("#blue-square", { duration: 4, scale: 2, alpha: 0, delay: 2, repeat: -1, yoyo: true });

let shapeTL = gsap.timeline( { repeat: -1 });

shapeTL.from("#circle", {duration: 2, ease: "slow(0.7, 0.7, false)", alpha: 0})
    .to("#circle", {duration: 1, scaleX:1, scaleY:0, transformOrigin: "50% 50%", yoyo: true, repeat: 3})
    .to("#circle", {duration: .5, scaleX:50, scaleY:50, transformOrigin: "20% 50%", yoyo: true})
    .to("#circle", {duration: 1, ease: "power1.out", backgroundColor: "#EEEBE0"})
    .to("#shapes", {duration: .05, ease: "power1.out", backgroundColor: "#E607AE"})
    .to("#circle", {duration: .5, ease: "sine.out", scaleX:1, scaleY:1, transformOrigin: "70% 10%", yoyo: true})
    .to("#circle", {duration: 1, scaleX: 4, scaleY: 1})
    .to("#circle", {duration: 1, ease: "bounce.out", y: 300 })
    .to("#circle", {duration: 1, rotate: 360 })
    .to("#circle", {duration: 1, scaleX: 1, scaleY: 1 }, '-=1')
    .to("#circle", {duration: 1.5, ease: "elastic.out(1, 0.3)", y: -100 })
    .to("#circle", {duration: 1, scaleX:-1, scaleY:-1, transformOrigin: "50% 50%", yoyo: true, repeat: 3})
    .to("#circle", {duration: .5, scaleX:50, scaleY:50, transformOrigin: "50% 20%", yoyo: true})
    .to("#circle", {duration: 1, ease: "power1.out", backgroundColor: "#E607AE"})
    .to("#shapes", {duration: .05, ease: "power1.out", backgroundColor: "#EEEBE0"})
    .to("#circle", {duration:  1, ease: "sine.out", scaleX:1, scaleY:1, transformOrigin: "70% 10%", yoyo: true})
    .to("#circle", {duration: 2, ease: "slow(0.7, 0.7, false)", scaleX:1, scaleY:0, transformOrigin: "50% 50%"})
    .from("#circle", {duration: 2, alpha: 100})



    
    // .to("#circle", {duration: 2, ease: "steps(12)", x: 300, y: 300})
    // .to("#circle", {duration: .5, ease: "bounce.out", x: 300, y: 300})
    // .to("#circle", {duration: .5, ease: "bounce.out", x: -300})
    // .to("#circle", {duration: .5, ease: "bounce.out", x: 100, y: -100})





// .to("#circle", {duration: 1, scaleX:1, scaleY:0, transformOrigin: "50% 50%", yoyo: true, repeat: 4})
//     .to("#circle", {duration: 1, scaleX:2, scaleY:2, yoyo: true, repeat:1})
//     .to("#circle", {duration: .5, scaleX:1, scaleY:0})
//     .to("#circle", {duration: 1, scaleX:1, scaleY:1, transformOrigin: "50% 50%", yoyo: true})
//     .to("#circle", {duration: 1, scaleX:1, scaleY:2, transformOrigin: "50% 50%", yoyo: true, repeat: 1})
//     .to("#circle", {duration: 1, scaleX:2, scaleY:1, transformOrigin: "50% 50%", yoyo: true, repeat: 1})
//     .to("#circle", {duration: .5, scaleX:1, scaleY:0})
//     // .to("#circle", {duration: 1, x:-600, y:600})


// zoom out - .to("#circle", {duration: 1, scaleX:0, scaleY:0, transformOrigin: "50% 50%", yoyo: true})