




let blob = document.querySelector(".hausBlob");
let sguigg = document.querySelector(".hausSguigg");


// setInterval(function(){
//     blob.style.opacity = '1';

// }, 3000)

(function() {     // function expression closure to contain variables
    var i = 0;
    var pics = [ "img/hausSquiggRender.png", "img/blobH.png" ];
    var logo = document.getElementById('logo-img');  // el doesn't change
    
    function toggle() {
        logo.src = pics[i];           // set the image
        i = (i + 1) % pics.length;  // update the counter
    }
    setInterval(toggle, 300000);
})();             // invoke the function expression


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
}



function init() {
    let tlSideBar = gsap.timeline();
    tlSideBar.from(".marquee2", {
        x: -130,
        duration: .6,
    }).from(".marquee1", {
        x: 130,
        duration: .6,
    }, "<").from(".nav-left", {
        x: -130,
        duration: .6,
    }).from(".nav-right", {
        x: 130,
        duration: .6,
    }, "<")

    barba.init({
        transitions: [{
            name: 'default-transition',
            leave() {
                // create your stunning leave animation here
            },
            enter(data) {
                mainContentAnim()
            }
        }]
    });
}
init()