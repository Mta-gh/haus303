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


function init() {
    let tlSideBar = gsap.timeline();
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
    
    
    tlSideBar.from(".marquee2", {
        x: -130,
        duration: .6,
    }).from(".nav-left", {
        x: -130,
        duration: .6,
    });
    
    barba.init({
        sync: true,
        transitions: [{
            name: 'general-transition',
            async leave(data) {
                // return gsap.to(".main", {
                //     duration: 0.6,
                //     y: -500,
                //     opacity: 0
                // });
                // helloHello()
                swiper()

            },
            async enter(data) {
                // mainContentAnim();
                // singleBookAnim()
                swiper()
            },
            async once(data) {
                swiper()
            },
        },{
            name: 'home',
            enter(data) {
                logoSize();
                swiper()
            },
            from: {
                namespace: [
                    'home'
                ]
            }
        }
    ]
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


