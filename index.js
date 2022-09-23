document.addEventListener("click", showNav)

function showNav() {
    document.getElementById('nav').style.display = "block";
    document.getElementById('hideme').style.display = "none";
    var introvid = document.getElementById('introvid');
    introvid.currentTime = introvid.duration;
}