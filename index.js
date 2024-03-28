var tl = gsap.timeline();
tl.from(".page1 img", {
  opacity: 0,
  duration: 1,
});
tl.from(".compony , .nav_tags, .nav_icon, .btn_nav", {
  y: -200,
  duration: 1,
  stagger: 0.2,
});

tl.from(".bg_sh h1", {
  x: -100,
  opacity: 0,
  duration: 0.7,
  delay: 0.5,
});
tl.from(".bg_sh p", {
  x: -100,
  opacity: 0,
  duration: 0.7,
  //   delay,
});

tl.from(".bg_sh .btn", {
  y: 100,
  opacity: 0,
  duration: 0.9,
  //   delay,
});

tl.to(".bg_sh .btn", {
  y: 10,
  duration: 0.9,
  repeat: -1,
  yoyo: true,
});

// page2 -------->
gsap.from(".page2 .line1,.page2 .line2", {
  y: 100,
  // delay: 0.5,
  duration: 0.7,
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".page2 .line1,.page2 .line2",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 20%",
  },
});

gsap.from("#about img, #about .line,#about h1,#about p", {
  y: 100,
  // delay: 0.5,
  duration: 0.7,
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about img, #about .line,#about h1,#about p",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 20%",
  },
});
gsap.from(
  ".page4 .left_div .line,.page4 .left_div h1,.page4 .left_div p,.page4 .left_div h2 , .page4 img",
  {
    y: 100,
    // delay: 0.5,
    duration: 0.7,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger:
        ".page4 .left_div .line,.page4 .left_div h1,.page4 .left_div p,.page4 .left_div h2 , .page4 img",
      scroller: "body",
        // markers: true,
      start: "top 60%",
      end: "top 20%",
    },
  }
);
gsap.from(".footer .allCards ", {
  scale: 0,
  // delay: 0.5,
  duration: 0.7,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".footer .allCards ",
    scroller: "body",
      // markers: true,
    start: "top 60%",
    end: "top 20%",
  },
});
