//Preloads "Home Hover" image
if (window.location.pathname == '/quiz.html' || window.location.pathname == '/about.html') {
  var image = new Image();
  image.src = "img/logohover.png";
}

//Plays sound on navigation button hover
document.getElementById("selectbutton1").addEventListener("mouseover", selectPlay);
document.getElementById("selectbutton2").addEventListener("mouseover", selectPlay);
document.getElementById("selectCurrent").addEventListener("mouseover", selectPlay);

function selectPlay() {
    var selectSound = document.getElementById("selectSound");
    selectSound.play();
}

//Plays this sound when trying to navigate to current page
document.getElementById("selectCurrent").addEventListener("click", navbad)

function navbad() {
    var navbadSound = document.getElementById("navbad");
    navbadSound.play();
}

//New version of tabs on about page that uses event listeners
//Used on About Page only
let tablinks = document.getElementsByClassName("tablinks")
for (let i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener("click", newChar)
  tablinks[i].currentValue = i;
}

function newChar(evt) {
  let tabValue = evt.currentTarget.currentValue;

  // Get all elements with class="tabcontent" and hide them
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Show the current tab
  let tabName = tablinks[tabValue].innerHTML;
  document.getElementById(tabName).style.display = "block";
}

//Makes Quiz Page BGM quiet by defualt
//Used on Quiz Page only
if (window.location.pathname == '/quiz.html') {
  var quizBGM = document.getElementById("bgm");
  quizBGM.volume = 0.3;
}