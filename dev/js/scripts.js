import { gsap } from "gsap";

// gsap.to("#circle", { duration: 4, x: 200 });

// gsap.from("#blue-square", { duration: 4, scale: 2, alpha: 0, delay: 2, repeat: -1, yoyo: true });

let shapeTL = gsap.timeline();

shapeTL.to("#circle", {duration: 1, scaleX:1, scaleY:0, transformOrigin: "50% 50%", yoyo: true, repeat: 3})
    // .to("#circle", {duration: .5, scaleX:1, scaleY:0, transformOrigin: "50% 50%", yoyo: true, repeat: 3})
    .to("#circle", {duration: 2, scaleX:50, scaleY:50, transformOrigin: "20% 50%", yoyo: true})



// .to("#circle", {duration: 1, scaleX:1, scaleY:0, transformOrigin: "50% 50%", yoyo: true, repeat: 4})
//     .to("#circle", {duration: 1, scaleX:2, scaleY:2, yoyo: true, repeat:1})
//     .to("#circle", {duration: .5, scaleX:1, scaleY:0})
//     .to("#circle", {duration: 1, scaleX:1, scaleY:1, transformOrigin: "50% 50%", yoyo: true})
//     .to("#circle", {duration: 1, scaleX:1, scaleY:2, transformOrigin: "50% 50%", yoyo: true, repeat: 1})
//     .to("#circle", {duration: 1, scaleX:2, scaleY:1, transformOrigin: "50% 50%", yoyo: true, repeat: 1})
//     .to("#circle", {duration: .5, scaleX:1, scaleY:0})
//     // .to("#circle", {duration: 1, x:-600, y:600})