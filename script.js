//preloads image on about and quiz pages
if (window.location.pathname == '/quiz.html' || window.location.pathname == '/about.html') {
  var image = new Image();
  image.src = "img/logohover.png";
}

//plays select sound
document.getElementById("selectbutton1").addEventListener("mouseover", selectPlay);
document.getElementById("selectbutton2").addEventListener("mouseover", selectPlay);
document.getElementById("selectCurrent").addEventListener("mouseover", selectPlay);

function selectPlay() {
    var selectSound = document.getElementById("selectSound");
    selectSound.play();
}

//plays this sound when trying to navigate to current page
document.getElementById("selectCurrent").addEventListener("click", navbad)

function navbad() {
    var navbadSound = document.getElementById("navbad");
    navbadSound.play();
}

//tabs for character section in about page
//This one doesn't use event listeners because I don't know how to use parameters with them.
function char(evt, charName) {
    // Get all elements with class="tabcontent" and hide them
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    let tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(charName).style.display = "block";
    evt.currentTarget.className += " active";
}

//make audio quiet by default on quiz page
if (window.location.pathname == '/quiz.html') {
  var quizBGM = document.getElementById("bgm");
  quizBGM.volume = 0.3;
}