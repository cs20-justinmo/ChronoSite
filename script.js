//preloads image
var image = new Image();
image.src = "img/logohover.png";

//plays select sound
function play() {
    var audio = document.getElementById("select");
    audio.play();
}

//shows navigation on index
function showNav() {
    document.getElementById('nav').style.display = "block";
    document.getElementById('hideme').style.display = "none";
}