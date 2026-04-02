// fade in
gsap.from(".footer", {
  scrollTrigger: ".footer",
  y: 100,
  opacity: 1,
  duration: 1,
});

// fade out
gsap.from(".footer", {
  scrollTrigger: ".footer",
  y: 100,
  opacity: 0,
  duration: 1,
});