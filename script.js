class Question {
    constructor(question, answers, x = 0, y = 0, hint = []) {
        this.question = question;
        this.answers = answers;
        this.hint = hint;
        this.x = x;
        this.y = y;

        if ((x * y) < answers.length)
            console.error(`For question ${question} x * y not equal to answers length`);
    }
}

/*const questions = [
    new Question("C'est quoi mes fleurs préférées ?", "Les clochettes", ["Souviens-toi des abeilles", "Ce sont des fleurs violettes"]),
    new Question("Est-ce que je suis beau ?", "Oui", ["Si t'as dit non, c'est que tu me mens"]),
    new Question("De qui suis-je amoureux ?", "Lisa", ["Elle a de beaux yeux bleus", "Elle vit à Laon", "Elle pratique l'atrophication des muscles"]),
    new Question("Quel taille je fais ?", "1,83", ["Plus grand que toi déjà", "51 cm de plus que Mimie Mathy"]),
    new Question("C'est quoi mes autres prénoms ?", "André Edouard", ["Andros", "Le prénom du personnage de Robert Pattinson dans Twilight mais francisais"]),
    new Question("Quelle est mon film préférée ?", "Matrix", ["Les machines bouhouhouh", "Monde virtuel"]),
    new Question("Les prénoms de mon frère et ma soeur ?", "Alexandre Elise", ["En russe le nom court serait Sacha", "Eglise sans le G"]),
    new Question("Ma grande passion ?", "Coder", [""]),
    new Question("", "")
];*/

const questions = [
    new Question("Quelle taille fais-je ?", [
        { text: "1,81m", valid: false },
        { text: "1,82m", valid: false },
        { text: "1,83m", valid: true },
        { text: "1,84m", valid: false },
        { text: "1,85m", valid: false },
    ], 3, 2, []),
    new Question("Quelle est ma date de naissance ?", [
        { text: "17/07/2000", valid: true },
        { text: "17/06/2000", valid: false },
        { text: "21/01/2000", valid: false },
    ], 2, 2),
    new Question("Quel est le prénom de ma Lilie ?", [
        { text: "Antonin", valid: false },
        { text: "Ryan", valid: false },
        { text: "Aurélien", valid: false },
        { text: "Alexis", valid: true },
        { text: "Thomas", valid: false },
    ], 3, 2),
    new Question("Combien de nuances de Matthieu ?", [
        { text: "30", valid: false },
        { text: "42", valid: false },
        { text: "50", valid: false },
        { text: "70", valid: false },
        { text: "20", valid: false },
        { text: "40", valid: true },
    ], 3, 2),
    new Question("En qui est-ce que je crois ?", [
        { text: "Dieu", valid: false },
        { text: "Toi", valid: true },
        { text: "Moi", valid: true },
        { text: "JCVD", valid: false },
    ], 2, 2),
    new Question("Sur quelle musique de Bob Dylan nous sommes-nous embrassés pour la première fois ?", [
        { text: "Blowin' in the Wind", valid: false },
        { text: "Pelican", valid: false },
        { text: "Lay Lady Lay", valid: false },
        { text: "Hurricane", valid: true },
        { text: "Like A Rolling Stone", valid: false },
    ], 3, 2),
    new Question("Quelle série est-ce que je regarde par défaut ?", [
        { text: "Matrix", valid: false },
        { text: "Rick & Morty", valid: true },
        { text: "The Walking Dead", valid: false },
        { text: "Les Simpson", valid: false },
    ], 2, 2),
    new Question("Combien de groupes d'amis ai-je ?", [
        { text: '1', valid: false },
        { text: '2', valid: false },
        { text: '3', valid: true },
        { text: '4', valid: false },
    ], 2, 2),
    new Question("Quelles sont mes fleurs préférées ?", [
        { text: 'Les tulipes', valid: false },
        { text: 'Les roses', valid: false },
        { text: 'Les clochettes', valid: true },
        { text: 'Les pissenlits', valid: false },
    ], 2, 2),
    new Question("Qu'est-ce que j'adore chez toi ?", [
        { text: 'Tes yeux', valid: true },
        { text: 'Ton sourire', valid: true },
        { text: 'Ton rire', valid: true },
        { text: 'Ton humour', valid: true },
        { text: 'Ton boule', valid: true },
        { text: 'Ta gentillesse', valid: true },
        { text: 'Tes cheveux dans ma bouche', valid: true },
        { text: 'Tes câlins', valid: true },
        { text: 'Ta chaleur', valid: true },
        { text: 'Ton charisme', valid: true },
        { text: 'Ton élégance', valid: true },
        { text: 'Tes bisous', valid: true },
    ], 8, 2),
    new Question("Est-ce que j'ai envie de t'embrasser là, maintenant, tout de suite, incessamment sous peu ?", [
        { text: 'Oui', valid: true },
        { text: 'Non', valid: false },
    ], 2, 2),
];

let currentIndex = 0;   // Index de la question en cours
let hintIndex = 0;      // Index de l'indice en cours
let initialLife = 3;    // PDV initial
let actualLife = initialLife;     // PDV actuel

let questionAnswered = false; // Question en cours repondu ou pas

const startBox = document.getElementById("start-box");
const startButton = document.getElementById("start-button");

const questionBox = document.getElementById("question-box");
const questionText = document.getElementById("question-text");
const answersBox = document.getElementById("answers-box");
const feedBackText = document.getElementById("feedback-text");
const lifeBox = document.getElementById("life-box");

const footer = document.getElementById("footer");

const victoryBox = document.getElementById("victory-box");
const defeatBox = document.getElementById("defeat-box");

const waitTime = 2000;

let answerButtons = [];

questionBox.style.display = "none";
victoryBox.style.display = "none";
defeatBox.style.display = "none";

function displayQuestion() {
    questionAnswered = false;
    answersBox.innerHTML = "";

    if (currentIndex < questions.length) {
        let question = questions[currentIndex];

        questionText.textContent = question.question;

        let answerIndex = 0;

        for (let i = 0; i < question.x; i++) {
            let rowNode = document.createElement('div');
            rowNode.classList = "row mb-4";

            for (let y = 0; y < question.y; y++) {
                if (answerIndex < question.answers.length) {
                    let answer = question.answers[answerIndex];
                    let colNode = document.createElement('div');
                    colNode.classList = "col";

                    let answerButton = document.createElement("button");
                    answerButton.classList = `btn btn-blue btn-lg btn-answer ${answer.valid ? 'valid' : ''}`;
                    answerButton.textContent = answer.text;

                    answerButtons.push(answerButton);

                    colNode.appendChild(answerButton);

                    rowNode.appendChild(colNode);
                    answerIndex++;
                }
            }
            answersBox.appendChild(rowNode);
        }

        answerButtons.forEach(function (button) {
            button.addEventListener("click", () => handleClick(button));
        });

        feedBackText.textContent = "";
    } else {
        questionBox.style.display = "none";
        victoryBox.style.display = "block";
    }

    currentIndex++;
}

function handleClick(button) {
    if (questionAnswered) return;

    questionAnswered = true;

    answerButtons.forEach(function (button) {
        button.classList.remove("btn-blue");

        if (button.classList.contains("valid"))
            button.classList.add("btn-green");
        else
            button.classList.add("btn-red");
    });

    if (button.classList.contains("valid")) {
        setTimeout(function () { displayQuestion(); }, waitTime);
    }
    else {
        actualLife--;
        drawLife();
        if (actualLife === 0)
            setTimeout(function () { displayDefeat(); }, waitTime);
        else {
            setTimeout(function () { displayQuestion(); }, waitTime);
        }
    }
}

function drawLife() {
    lifeBox.innerHTML = "";

    let createHeart = function (image) {
        let heartContainer = document.createElement("div");
        heartContainer.className = "col";

        let heart = document.createElement("img");
        heart.src = image;
        heart.className = "heart";

        heartContainer.appendChild(heart);

        lifeBox.appendChild(heartContainer);
    };

    for (let i = 0; i < actualLife; i++) {
        // afficher l'image <link rel="preload" href="./img/heart.png" as="image">
        createHeart('./img/heart.png');
    }

    for (let i = 0; i < initialLife - actualLife; i++) {
        // afficher l'image  <link rel="preload" href="./img/heart_empty.png" as="image">
        createHeart('./img/heart_empty.png');
    }
}

function displayDefeat() {
    questionBox.style.display = "none";
    defeatBox.style.display = "block";
}

startButton.addEventListener("click", function () {
    startBox.style.display = "none";
    questionBox.style.display = "block";
    footer.style.display = "none";
    displayQuestion();
    drawLife();
});
