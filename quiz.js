let quizScore = 0;
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
    quizScore = 0;

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
        }
    if (ans3 == 'hironobu sakaguchi' ||
        ans3 == 'yuji horii' ||
        ans3 == 'akira toriyama' ||
        ans3 == 'sakaguchi hironobu' ||
        ans3 == 'horii yuji' ||
        ans3 == 'toriyama akira') {
            quizScore++;
    }
    if (ans4 == '1000' ||
        ans4 == '1000ad' ||
        ans4 == '1000 ad') {
            quizScore++;
        }
    if (ans5 == 'lavos') {
        quizScore++;
    }
    if (ans6 == 'yasunori mitsuda' ||
        ans6 == 'mitsuda yasunori') {
            quizScore++;
        }
    if (ans7 == 'light' ||
        ans7 == 'shadow' ||
        ans7 == 'water' ||
        ans7 == 'ice' ||
        ans7 == 'fire' ||
        ans7 == 'lightning') {
            quizScore++;
        }
    if (ans8 == 'technique' ||
        ans8 == 'tech' ||
        ans8 == 'techniques' ||
        ans8 == 'techs') {
            quizScore++;
        }

    //Calculate percentage
    let percentScore = quizScore / 8 * 100;

    //Output
    let resultsText = document.getElementById('finalResults');
    resultsText.innerHTML = `Score: ${quizScore}/8 (${percentScore}%)`
}

document.getElementById("check").addEventListener("click", checkAnswers)