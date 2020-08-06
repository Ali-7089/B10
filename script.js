var t1 = gsap.timeline();

t1.from('#nav img', {
    opacity:0,
    y:-30,
    duration:1,
    ease:'expo.easeInOut'
})

.from('#nav #links a', {
    opacity:0,
    x:30,
    stagger:.2,
    duration:1,
    ease:'expo.easeInOut'
})

.from('#nav>a', {
    opacity:0,
    y:-30,
    ease:'expo.easeInOut'
})

.from('#main .elem', {
    opacity:0,
    stagger:.2,
    y:20,
    ease:'expo.easeInOut'
})

.from('#bigimg img', {
    opacity:0,
    y:30,
    scale:1.2,
    duration:1,
    ease:'expo.easeInOut'
})

gsap.from('#entrylevel', {
    scrollTrigger:{
        trigger:'#entrylevel',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y:50,
    opacity:0,
    ease:'expo.easeInOut'
})

gsap.from('#entercourses .enterelem', {
    scrollTrigger: {
        trigger: '#entercourses',
        toggleActions: 'play pause resume reverse',
    },
    y: 30,
    stagger:.3,
    opacity: 0,
    duration: 1,
    ease:'expo.easeInOut'
})


gsap.from('#coursebanner .course', {
    scrollTrigger:{
        trigger:'#coursebanner',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y: 30,
    duration: 2,
    delay: 2,
    stagger:.3 ,
    opacity:0,
    ease:'expo.easeInOut'
})

gsap.from('#brandswork .brelem', {
    scrollTrigger:{
        trigger:'#brandswork',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y:50,
    duration: 1,
    stagger:.2,
    opacity:0,
    ease:'expo.easeInOut'
})

gsap.from('#showcasegreen .shelem', {
    scrollTrigger:{
        trigger:'#showcasegreen',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    x:-50,
    duration: 2,
    stagger:.4,
    opacity:0,
    ease:'expo.easeInOut'
})

gsap.from('#statstext .stelem', {
    scrollTrigger:{
        trigger:'#statstext',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y:30,
    duration: 2,
    stagger:.4,
    opacity:0,
    ease:'expo.easeInOut'
})







