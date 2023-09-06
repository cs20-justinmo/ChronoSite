//Check answers on button press
document.getElementById("check").addEventListener("click", checkAnswers)

function checkAnswers() {
    //Located on script.js
    selectPlay();

    //Calculate score
    let score = 0;
    score += markQuestion(1, "1995");
    score += markQuestion(2, "snes");
    score += markQuestion(3, "hironobu sakaguchi");
    score += markQuestion(4, "1000ad");
    score += markQuestion(5, "lavos");
    score += markQuestion(6, "yasunori mitsuda");
    score += markQuestion(7, "light");
    score += markQuestion(8, "tech");

    //Calculate percentage
    let percentScore = score / 8 * 100;

    //Output final score, percentage, and feedback
    document.getElementById("numScore").innerHTML = score;
    document.getElementById("percentScore").innerHTML = percentScore;
    if (score == 0) {
        document.getElementById("finalResults").style.color = "black";
        document.getElementById("extra-message").innerHTML = "..."
    } else if (score <= 3) {
        document.getElementById("finalResults").style.color = "red";
        document.getElementById("extra-message").innerHTML = "Try again..."
    } else if (score <= 5) {
        document.getElementById("finalResults").style.color = "yellow";
        document.getElementById("extra-message").innerHTML = "OK..."
    } else if (score <= 7) {
        document.getElementById("finalResults").style.color = "lime";
        document.getElementById("extra-message").innerHTML = "Superb!"
    } else {
        document.getElementById("finalResults").style.color = "cyan";
        document.getElementById("extra-message").innerHTML = "Perfect score!"
    }
}

function markQuestion(qNum, correctAnswer) {
    let userAns = document.getElementById(`q${qNum}`).value.toLowerCase();
    let questionText = document.getElementsByClassName("qtext");
    let questionFeedback = document.getElementsByClassName("qfeedback");
    if (userAns == correctAnswer) {
        questionText[qNum - 1].style.color = "lime";
        questionFeedback[qNum - 1].innerHTML = "Correct";
        return 1;
    } else {
        questionText[qNum - 1].style.color = "red";
        questionFeedback[qNum - 1].innerHTML = "Incorrect";
        return 0;
    }
}


//Below is old audio stuff, ignore for CS20 assignment
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

