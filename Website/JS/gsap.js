gsap.from("#navbar",{
    opacity:0,
    duration:1,
    y:10
}) 

//About Section
gsap.from(".about__header .section__subheader",{
    x:-1000,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:" .about__header .section__subheader",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 80%",
        scrub:3
    }
}) 
gsap.from(".about__header .section__header",{
    x:-1000,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".about__header .section__header",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 80%",
        scrub:3
    }
}) 

gsap.from(".about__header .sub_discription",{
    x:-1000,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".about__header .sub_discription",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 80%",
        scrub:3
    }
}) 

gsap.from(".about__header p",{
    x:1000,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".about__header p",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 80%",
        scrub:3
    }
}) 

gsap.from(".section__container .about__grid",{
    y:100,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".section__container .about__grid",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 80%",
        scrub:3
    }
}) 

//Services Section
gsap.from(".product__container h3",{
    y:100,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".product__container h3",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 80%",
        scrub:3
    }
})

gsap.from(".product__container h2",{
    y:100,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".product__container h2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 80%",
        scrub:3
    }
})

gsap.from(".product__container .product__grid",{
    y:100,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".product__container .product__grid",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 80%",
        scrub:3
    }
})
//Gallery section
// gsap.from("#gallery h3",{
//     x:-100,
//     opacity:0,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#gallery h3",
//         scroller:"body",
//         markers:true,
//         start:"top 80%",
//         end:"top 80%",
//         scrub:3
//     }
// })

// gsap.from("#gallery h2",{
    x:100,
//     opacity:0,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#gallery h2",
//         scroller:"body",
//         markers:true,
//         start:"top 80%",
//         end:"top 80%",
//         scrub:3
//     }
// })

//Contact Section
gsap.from("#contact",{
    x:-1000,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#contact",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 80%",
        scrub:3
    }
})

gsap.from("#footer",{
    x:1000,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#footer",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 80%",
        scrub:3
    }
})