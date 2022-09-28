//Make audio quiet by default
document.getElementById("bgmintro").volume = 0.6;
document.getElementById("bgmloop").volume = 0.6;

//Change audio to the loop
document.getElementById("bgmintro").addEventListener("ended", audioSwitch)

function audioSwitch() {
    let BGMintro = document.getElementById("bgmintro");
    let BGMloop = document.getElementById("bgmloop");
    BGMintro.style.display = "none";
    BGMloop.style.display = "block";
    BGMloop.play();
}

//Check answers on button press
document.getElementById("check").addEventListener("click", checkAnswers)

function checkAnswers() {
    //Located on script.js
    selectPlay();

    //Input
    let ans1 = document.getElementById('q1').value.toLowerCase();
    let ans2 = document.getElementById('q2').value.toLowerCase();
    let ans3 = document.getElementById('q3').value.toLowerCase();
    let ans4 = document.getElementById('q4').value.toLowerCase();
    let ans5 = document.getElementById('q5').value.toLowerCase();
    let ans6 = document.getElementById('q6').value.toLowerCase();
    let ans7 = document.getElementById('q7').value.toLowerCase();
    let ans8 = document.getElementById('q8').value.toLowerCase();
    let quizScore = 0;
    let questionText = document.getElementsByClassName("qtext");

    //Process
    //Check answers
    if (ans1 == '1995') {
        quizScore++;
        questionText[0].style.color = "lime";
    } else {
        questionText[0].style.color = "red";
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
        questionText[1].style.color = "lime";
    } else {
        questionText[1].style.color = "red";
    }

    if (ans3 == 'hironobu sakaguchi' ||
        ans3 == 'yuji horii' ||
        ans3 == 'akira toriyama' ||
        ans3 == 'sakaguchi hironobu' ||
        ans3 == 'horii yuji' ||
        ans3 == 'toriyama akira') {
        quizScore++;
        questionText[2].style.color = "lime";
    } else {
        questionText[2].style.color = "red";
    }

    if (ans4 == '1000' ||
        ans4 == '1000ad' ||
        ans4 == '1000 ad') {
        quizScore++;
        questionText[3].style.color = "lime";
    } else {
        questionText[3].style.color = "red";
    }

    if (ans5 == 'lavos') {
        quizScore++;
        questionText[4].style.color = "lime";
    } else {
        questionText[4].style.color = "red";
    }

    if (ans6 == 'yasunori mitsuda' ||
        ans6 == 'mitsuda yasunori') {
        quizScore++;
        questionText[5].style.color = "lime";
    } else {
        questionText[5].style.color = "red";
    }

    if (ans7 == 'light' ||
        ans7 == 'shadow' ||
        ans7 == 'water' ||
        ans7 == 'ice' ||
        ans7 == 'fire' ||
        ans7 == 'lightning') 
    {
        quizScore++;
        questionText[6].style.color = "lime";
    } else {
        questionText[6].style.color = "red";
    }

    if (ans8 == 'technique' ||
        ans8 == 'tech' ||
        ans8 == 'techniques' ||
        ans8 == 'techs') 
    {
        quizScore++;
        questionText[7].style.color = "lime";
    } else {
        questionText[7].style.color = "red";
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