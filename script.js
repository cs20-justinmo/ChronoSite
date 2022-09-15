//preloads image on about and quiz pages
var image = new Image();
image.src = "img/logohover.png";

//plays select sound on all pages
function play() {
    var audio = document.getElementById("select");
    audio.play();
}

//plays this sound when trying to navigate to current page
function navbad() {
    var audio = document.getElementById("select");
    audio.play();
}

//shows navigation on index
function showNav() {
    document.getElementById('nav').style.display = "block";
    document.getElementById('hideme').style.display = "none";
    var introvid = document.getElementById('introvid');
    introvid.currentTime = introvid.duration;
}

//tabs for character section in about page
function char(evt, charName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(charName).style.display = "block";
    evt.currentTarget.className += " active";
  }