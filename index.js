gsap.to('.imgOne', {
  scrollTrigger: {
    trigger: '.imgOne',
    start: 'top 60%',
    end: '+=40%',
    scrub: 2,
    // markers: {
    //   startColor: 'purple',
    //   endColor: 'fuchsia',
    //   fontSize: '2rem',
    // },
  },
  y: 73,
  duration: 1,
});

gsap.to('.imgTwo', {
  scrollTrigger: {
    trigger: '.imgTwo',
    start: 'top 65%',
    end: '+=40%',
    scrub: 2,
  },
  y: 30,
  duration: 1,
});
