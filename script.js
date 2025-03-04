class Question {
    constructor(question, answer, difficulty) {
        this.question = question;
        this.answer = answer.toLowerCase();
        this.difficulty = difficulty;
    }
}

const questions = [
    new Question("Quel est ma date de naissance ?", "17 juillet 2000", 1),
    new Question("Combien de groupe d'amis j'ai", "3", 2),
    new Question("Comment s'appelle ma Lilie ?", "Alexis", 2),
    new Question("En qui je crois ?", "Moi", 1),
    new Question("Combien de nuances de Matthieu ?", "40", 1)
];

let currentIndex = 0;

let startBox = window.getElementById("start-box");
let startButton = window.getElementById("start-button");

let questionBox = window.getElementById("question-box");
let questionText = window.getElementById("question-text");
let answerInput = window.getElementById("answer-input");
let feedBackText = window.getElementById("feedback-text");

let victoryBox = window.getElementById("victory-box");

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

