class Question {
    constructor(question, answer, hint) {
        this.question = question;
        this.answer = answer.toLowerCase();
        this.hint = hint;
    }
}

const questions = [
    new Question("Quelle est ma date de naissance ?", "17 juillet 2000", ["Je suis cancer", "Même année que toi", "Le 17 wesh"]),
    new Question("Combien de groupes d'amis j'ai ?", "3", ["Le skate", "Le bac", "Les vieux"]),
    new Question("Comment s'appelle ma Lilie ?", "Alexis", ["Alias ch'Pum", "En vrai t'abuses"]),
    new Question("En qui je crois ?", "Moi-même", ["Le mec de Lisa", "Le gars avec un bras cassé"]),
    new Question("Combien de nuances de Matthieu ?", "40", ["Petite private joke juste parce que je suis con", "(18 x 6 + 34) : 34 x 4 - 31", "39 + 1"]),
    new Question("Sur quelle musique de Bob Dylan est-ce qu'on s'est embrassés pour la première fois ?", "Hurricane", ["C'est un cyclone tropical", "En vrai tu l'aimes pas et je te demande ça j'abuse non ?", "C'est une musique sur un boxeur américain noir"]),
    new Question("C'est quoi mes fleurs préférées ?", "Les clochettes", ["Souviens-toi des abeilles", "Ce sont des fleurs violettes"]),
    new Question("Est-ce que je suis beau ?", "Oui", ["Si t'as dit non, c'est que tu me mens"]),
    new Question("De qui suis-je amoureux ?", "Lisa", ["Elle a de beaux yeux bleus", "Elle vit à Laon", "Elle pratique l'atrophication des muscles"]),
    new Question("", "", [""])
];

let currentIndex = 0;
let hintIndex = 0;
let nbErreur = 0;

let startBox = document.getElementById("start-box");
let startButton = document.getElementById("start-button");

let questionBox = document.getElementById("question-box");
let questionText = document.getElementById("question-text");
let answerInput = document.getElementById("answer-input");
let feedBackText = document.getElementById("feedback-text");
let validButton = document.getElementById("valid-button");
let hintList = document.getElementById("hint-list");

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

validButton.addEventListener("click", function () {
    if (answerInput.value.toLowerCase() === questions[currentIndex].answer) {
        currentIndex++;
        displayQuestion();
    } else {
        feedBackText.textContent = "Bah alors on me connait pas ?!";

        if (hintIndex < questions[currentIndex].hint.length) {
            let hint = document.createElement('li');

            hint.textContent = questions[currentIndex].hint[hintIndex];
            hintList.appendChild(hint);

            hintIndex++;
            nbErreur++;
        } else if (hintIndex == questions[currentIndex].hint.length) {
            let hint = document.createElement('li');

            hint.textContent = `Réponse: ${questions[currentIndex].answer}`;
            hintList.appendChild(hint);

            hintIndex++;
            nbErreur++;
        }
    }
});

