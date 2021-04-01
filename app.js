var tl = gsap.timeline({
    defaults: {duration: 0.5, ease:'none', opacity: 0}
});

var tl2 = gsap.timeline({defaults: { duration: 1, delay: 3}
});

tl.from('.svg', { y: 40 })
    .from('#screen', { y: 100 }, '+=0.2')
    .from('#Line-1', { y: 70 }, '-=0.2')
    .from('#Line-2', { y: 100 }, '-=0.1')
    .from('#Line-3', { y: 80 }, '-=0.2')
    .from('#Line-4', { y: 100 }, '-=0.3')
    .from('#Line-5', { y: 90 }, '-=0.2');

    tl2.to('.svg', {
        x: 'random(-250, 50, 5)',
        y: 'random(-250, 50, 3)',
        repeat: -1,
        yoyo: true,
        repeatRefresh: true
    });
// gsap.from('.svg', { y:40 });