




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



