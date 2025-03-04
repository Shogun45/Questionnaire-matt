class Question {
    constructor(question, answer, difficulty) {
        this.question = question;
        this.answer = answer.toLowerCase();
    }
}

const questions = [
    new Question("Quel est ma date de naissance ?", "17 juillet 2000"),
    new Question("Combien de groupe d'amis j'ai", "3"),
    new Question("Comment s'appelle ma Lilie ?", "Alexis"),
    new Question("En qui je crois ?", "Moi"),
    new Question("Combien de nuances de Matthieu ?", "40")
];

let currentIndex = 0;

let startBox = document.getElementById("start-box");
let startButton = document.getElementById("start-button");

let questionBox = document.getElementById("question-box");

function displayQuestion() {
    if (currentIndex < questions.length) {
        questionText.textContent = questions[currentIndex].question;
        answerInput.value = "";
        feedBackText.textContent = "";
    } else {
        questionBox.style.display = "none";
        victoryBox.style.display = "block";
    }
}

startButton.addEventListener("click", function () {
    startBox.style.display = "none";
    questionBox.style.display = "block";
    displayQuestion();
});

