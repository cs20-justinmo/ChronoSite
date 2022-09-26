//Make audio quiet by default
var quizBGM = document.getElementById("bgm");
quizBGM.volume = 0.3;

//Change audio to the loop
quizBGM.addEventListener("ended", audioSwitch)

function audioSwitch() {
    let BGMLoop = document.getElementById("hiddenbgm");
    quizBGM.style.display = "none";
    BGMLoop.style.display = "block";
    BGMLoop.play();
}

//Check answers on button press
document.getElementById("check").addEventListener("click", checkAnswers)

function checkAnswers() {
    selectPlay();

    //Input
    let ans1 = document.getElementById('q1').value;
    let ans2 = document.getElementById('q2').value;
    let ans3 = document.getElementById('q3').value;
    let ans4 = document.getElementById('q4').value;
    let ans5 = document.getElementById('q5').value;
    let ans6 = document.getElementById('q6').value;
    let ans7 = document.getElementById('q7').value;
    let ans8 = document.getElementById('q8').value;
    let quizScore = 0;

    //Process
    //Convert to lowercase
    ans2 = ans2.toLowerCase();
    ans3 = ans3.toLowerCase();
    ans4 = ans4.toLowerCase();
    ans5 = ans5.toLowerCase();
    ans6 = ans6.toLowerCase();
    ans7 = ans7.toLowerCase();
    ans8 = ans8.toLowerCase();

    //Check answers
    if (ans1 == '1995') {
        quizScore++;
        document.getElementById("q1text").style.color = "lime";
    } else {
        document.getElementById("q1text").style.color = "red";
    }

    if (ans2 == 'snes' ||
        ans2 == 'super nintendo entertainment system' ||
        ans2 == 'nintendo ds' ||
        ans2 == 'ds' ||
        ans2 == 'playstation' ||
        ans2 == 'pc' ||
        ans2 == 'phone' ||
        ans2 == 'iphone' ||
        ans2 == 'ios' ||
        ans2 == 'android') {
        quizScore++;
        document.getElementById("q2text").style.color = "lime";
    } else {
        document.getElementById("q2text").style.color = "red";
    }

    if (ans3 == 'hironobu sakaguchi' ||
        ans3 == 'yuji horii' ||
        ans3 == 'akira toriyama' ||
        ans3 == 'sakaguchi hironobu' ||
        ans3 == 'horii yuji' ||
        ans3 == 'toriyama akira') {
        quizScore++;
        document.getElementById("q3text").style.color = "lime";
    } else {
        document.getElementById("q3text").style.color = "red";
    }

    if (ans4 == '1000' ||
        ans4 == '1000ad' ||
        ans4 == '1000 ad') {
        quizScore++;
        document.getElementById("q4text").style.color = "lime";
    } else {
        document.getElementById("q4text").style.color = "red";
    }

    if (ans5 == 'lavos') {
        quizScore++;
        document.getElementById("q5text").style.color = "lime";
    } else {
        document.getElementById("q5text").style.color = "red";
    }

    if (ans6 == 'yasunori mitsuda' ||
        ans6 == 'mitsuda yasunori') {
        quizScore++;
        document.getElementById("q6text").style.color = "lime";
    } else {
        document.getElementById("q6text").style.color = "red";
    }

    if (ans7 == 'light' ||
        ans7 == 'shadow' ||
        ans7 == 'water' ||
        ans7 == 'ice' ||
        ans7 == 'fire' ||
        ans7 == 'lightning') 
    {
        quizScore++;
        document.getElementById("q7text").style.color = "lime";
    } else {
        document.getElementById("q7text").style.color = "red";
    }

    if (ans8 == 'technique' ||
        ans8 == 'tech' ||
        ans8 == 'techniques' ||
        ans8 == 'techs') 
    {
        quizScore++;
        document.getElementById("q8text").style.color = "lime";
    } else {
        document.getElementById("q8text").style.color = "red";
    }

    //Calculate percentage
    let percentScore = quizScore / 8 * 100;

    //Output
    document.getElementById("numScore").innerHTML = quizScore;
    document.getElementById("percentScore").innerHTML = percentScore;
    if (quizScore == 0) {
        document.getElementById("finalResults").style.color = "black";
        document.getElementById("extra-message").innerHTML = "..."
    } else if (quizScore >= 1 && quizScore <= 3) {
        document.getElementById("finalResults").style.color = "red";
        document.getElementById("extra-message").innerHTML = "Try again..."
    } else if (quizScore >= 4 && quizScore <= 5) {
        document.getElementById("finalResults").style.color = "yellow";
        document.getElementById("extra-message").innerHTML = "OK..."
    } else if (quizScore == 6 || quizScore == 7) {
        document.getElementById("finalResults").style.color = "lime";
        document.getElementById("extra-message").innerHTML = "Superb!"
    } else {
        document.getElementById("finalResults").style.color = "cyan";
        document.getElementById("extra-message").innerHTML = "Perfect score!"
    }
}