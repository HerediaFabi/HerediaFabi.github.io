$(document).ready(function(){
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll(".slide-in");
    
    const appearOptions = {
        threshold: 0, //Las cosas se ven cuando caben en la pantalla
        rootMargin: "0px 0px -250px 0px" //Las cosas se ven cuando tienen margen de -100px
    };

    const appearOnScroll = new IntersectionObserver
    (function(
        entries, 
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
        })
    }, 
    appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });

    // $("#intro").fadeIn(5000);
});