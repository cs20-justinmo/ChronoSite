//preloads image
var image = new Image();
image.src = "img/logohover.png";

//plays select sound
function play() {
    var audio = document.getElementById("select");
    audio.play();
}

//plays sound when on current page
function navbad() {
    var audio = document.getElementById("select");
    audio.play();
}

//shows navigation on index
function showNav() {
    document.getElementById('nav').style.display = "block";
    document.getElementById('hideme').style.display = "none";
}

//read more button
function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var button = document.getElementById("readMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        button.innerHTML = "Read more";
        more.style.display = "none";
    } 
    else {
        dots.style.display = "none";
        button.innerHTML = "Read less";
        more.style.display = "inline";
    }
}