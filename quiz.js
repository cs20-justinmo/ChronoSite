let quizScore = 0;
function checkAnswers() {
    selectPlay();

    //Input
    let ans1 = document.getElementById('q1').value;
    let ans2 = document.getElementById('q2').value;
    ans2 = ans2.toLowerCase();
    let ans3 = document.getElementById('q3').value;
    ans3 = ans3.toLowerCase();
    let ans4 = document.getElementById('q4').value;
    ans4 = ans4.toLowerCase();
    let ans5 = document.getElementById('q5').value;
    ans5 = ans5.toLowerCase();
    let ans6 = document.getElementById('q6').value;
    ans6 = ans6.toLowerCase();
    let ans7 = document.getElementById('q7').value;
    ans7 = ans7.toLowerCase();
    let ans8 = document.getElementById('q8').value;
    ans8 = ans8.toLowerCase();
    quizScore = 0;

    //Process
    if (ans1 == '1995') {
        quizScore++;
    }
    if (ans2 == 'snes' ||
        ans2 == 'ds' ||
        ans2 == 'playstation' ||
        ans2 == 'pc') {
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
        ans8 == 'tech') {
            quizScore++;
        }

    let percentScore = quizScore / 8 * 100;

    //Output
    let resultsText = document.getElementById('finalResults');
    resultsText.innerHTML = `Score: ${quizScore}/8 (${percentScore}%)`
}

document.getElementById("check").addEventListener("click", checkAnswers)