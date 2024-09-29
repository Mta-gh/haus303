// For logo change
// let blob = document.querySelector(".hausBlob");
// let sguigg = document.querySelector(".hausSguigg");


// setInterval(function(){
//     blob.style.opacity = '1';

// }, 3000)

// (function() {     // function expression closure to contain variables
//     var i = 0;
//     var pics = [ "img/hausSquiggRender.png", "img/blobH.png" ];
//     var logo = document.getElementById('logo-img');  // el doesn't change

//     function toggle() {
//         logo.src = pics[i];           // set the image
//         i = (i + 1) % pics.length;  // update the counter
//     }
//     setInterval(toggle, 300000);
// })();             // invoke the function expression


// Onclick event for books
let bookArticle = document.querySelectorAll('.book-article')

for (let i = 0; i<bookArticle.length; i++) {
    bookArticle[i].addEventListener("click", function(){
        console.log(bookArticle);
    });
}

function mainContentAnim() {
    let tl = gsap.timeline();
    tl.from(".main", {
        duration: 0.8,
        opacity: 0,
        filter: "blur(45px)",
        // scale: 0,
        ease: "back",
    })
};

function helloHello() {
    // let tl = gsap.timeline();
    gsap.to(".main", {
        duration: 0.8,
        y: -2000,
    });
    console.log('hello hello')
};


function singleBookAnim() {
    let tl = gsap.timeline();
    tl.from(".book-pop__up", {
        duration: 0.8,
        opacity: 0,
        scale: 1.2,
        filter: "blur(45px)",
        display:"none",
        ease: "expo.out",
    })
};

function singleBookAnimLeave() {
    let tl = gsap.timeline();
    tl.to(".book-pop__up", {
        duration: 0.3,
        opacity: 0,
        scale: 1.2,
        y: -200
    })
}

function logoSize() {
    gsap.to(".logo", {
        duration: .3,
        scale: .66,
    })
}

function swiper() {
    // swiper
    const swiper = new Swiper('.swiper', {
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

function enterAnim() {
    let tl = gsap.timeline();
    tl.from(".anime__item", {
        // y: -500,
        duration: 0.6,
        delay: 0.6,
        stagger: 0.2,
        opacity: 0,
        filter: "blur(45px)",
        ease: "expo.out",
    });
}


function init() {
    let tlSideBar = gsap.timeline();
    // // For phase 2
    // tlSideBar.from(".marquee2", {
    //     x: -130,
    //     duration: .6,
    // }).from(".marquee1", {
    //     x: 130,
    //     duration: .6,
    // }, "<").from(".nav-left", {
    //     x: -130,
    //     duration: .6,
    // }).from(".nav-right", {
    //     x: 130,
    //     duration: .6,
    // }, "<");
    window.scrollTo(0, 0);
    
    
    tlSideBar.from(".marquee2", {
        x: -130,
        duration: .6,
    }).from(".nav-left", {
        x: -130,
        duration: .6,
    });
    
    
    if (window.matchMedia('(max-width: 768px)').matches) {
        let tlTopBar = gsap.timeline();
        tlTopBar.from(".header", {
            y: -130,
            duration: .6,
        });
    };
    
    
    barba.init({
        sync: true,
        transitions: [{
            name: 'general-transition',
            async leave(data) {
                window.scrollTo(0, 0);
                swiper()
                
            },
            async enter(data) {
                window.scrollTo(0, 0);
                swiper();
                // enterAnim()
            },
            async once(data) {
                swiper();
                // enterAnim()
            },
        },{
            name: 'home',
            enter(data) {
                if (window.matchMedia('(min-width: 768px)').matches) {
                    logoSize();
                };
                swiper()
            },
            from: {
                namespace: [
                    'home'
                ]}
            }
        ]
    });
    
    // Burger Menu
    $(".burger__menu, .top__bar").click(function () {
        $(".top__bar").toggleClass("active");
        $(".burger__menu").toggleClass("active__burger");
    });
    $(".header__bg").click(function () {
        $(".top__bar").removeClass("active");
        $(".burger__menu").removeClass("active__burger");
    });
    
    $(document).ready(function() {
        
        "use strict";
        
        $(".about__item").mouseover(function () {
            let $src = $(this).data("source");
            $(".cursor__popup").show(); 
            $(".cursor__img").attr("src", $src); 
        });
        
        $(".about__item").mouseleave(function () {
            $(".cursor__popup").hide(); 
            $(".cursor__img").attr("src",null); 
        });
    });
    $(document).mousemove(function(e) {
        $(".cursor__popup").offset({
            left: e.pageX,
            top: e.pageY + 20
        });
    });
    
}
init()


// transitions: [{
//     async leave(data) {
//     window.scrollTo(0, 0);
//     const done = this.async();
//     contentAnimLeave();
//     pageTransition();
//     await delay(1000);
//     done();

// },
//  async enter(data) {
//     // gsap.set(".overlay__transition", { opacity: 0 });
//     window.scrollTo(0, 0);
//     contentAnimEnter();
//     titleSplit();
// },
// async once(data) {
//     contentAnimEnter();
//     titleSplit()
