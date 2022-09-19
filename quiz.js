//dummy code lol
let quizScore = 0;
function checkAnswers() {
    selectPlay();

    let ans1 = document.getElementById('q1').value;
    quizScore = 0;

    if (ans1 == '1995') {
        score++;
    }

    percentScore = quizScore / 8 * 100;
}