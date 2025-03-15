class Question {
    constructor(question, answers, x = 0) {
        this.question = question;
        this.answers = answers;
        this.x = x;
        this.y = 2;

        if ((x * 2) < answers.length)
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
    ], 3),
    new Question("Quelle est ma date de naissance ?", [
        { text: "17/07/2000", valid: true },
        { text: "17/06/2000", valid: false },
        { text: "21/01/2000", valid: false },
    ], 2),
    new Question("Quel est le prénom de ma Lilie ?", [
        { text: "Antonin", valid: false },
        { text: "Ryan", valid: false },
        { text: "Aurélien", valid: false },
        { text: "Alexis", valid: true },
        { text: "Thomas", valid: false },
    ], 3),
    new Question("Combien de nuances de Matthieu ?", [
        { text: "30", valid: false },
        { text: "42", valid: false },
        { text: "50", valid: false },
        { text: "70", valid: false },
        { text: "20", valid: false },
        { text: "40", valid: true },
    ], 3),
    new Question("En qui est-ce que je crois ?", [
        { text: "Dieu", valid: false },
        { text: "Toi", valid: true },
        { text: "Moi", valid: true },
        { text: "JCVD", valid: false },
    ], 2),
    new Question("Sur quelle musique de Bob Dylan nous sommes-nous embrassés pour la première fois ?", [
        { text: "Blowin' in the Wind", valid: false },
        { text: "Pelican", valid: false },
        { text: "Lay Lady Lay", valid: false },
        { text: "Hurricane", valid: true },
        { text: "Like A Rolling Stone", valid: false },
    ], 3),
    new Question("Quelle série est-ce que je regarde par défaut ?", [
        { text: "Matrix", valid: false },
        { text: "Rick & Morty", valid: true },
        { text: "The Walking Dead", valid: false },
        { text: "Les Simpson", valid: false },
    ], 2),
    new Question("Combien de groupes d'amis ai-je ?", [
        { text: '1', valid: false },
        { text: '2', valid: false },
        { text: '3', valid: true },
        { text: '4', valid: false },
    ], 2),
    new Question("Quelles sont mes fleurs préférées ?", [
        { text: 'Les tulipes', valid: false },
        { text: 'Les roses', valid: false },
        { text: 'Les clochettes', valid: true },
        { text: 'Les pissenlits', valid: false },
    ], 2),
    new Question("Est-ce que j'ai confiance en moi ?", [
        { text: 'Oui', valid: false },
        { text: 'Non', valid: true },
    ], 2),
    new Question("La date de notre premier baiser ?", [
        { text: '10/02/2025', valid: false },
        { text: '11/02/2025', valid: true },
        { text: '12/02/2025', valid: false },
    ], 2),
    new Question("Si je pouvais être un super héro, je serais ?", [
        { text: 'Superman', valid: true },
        { text: 'Iron man', valid: true },
        { text: 'Flash', valid: true },
        { text: 'Invincible', valid: true },
        { text: 'Spider-man', valid: true },
        { text: 'Batman', valid: true },
    ], 3),
    new Question("Quelle est ma boisson favorite ?", [
        { text: "Coca", valid: true },
        { text: "Sprite", valid: false },
        { text: "Cyprine", valid: false },
        { text: "Eau", valid: false },
    ], 2),
    new Question("Est-ce que j'aime être dans tes bras ?", [
        { text: "Oui", valid: true },
        { text: "Non", valid: false },
    ], 2),
    new Question("Quest ce que je souhaites avoir au fond de mon jardin ?", [
        { text: "Un potager", valid: false },
        { text: "Une foret", valid: false },
        { text: "Un cimetière", valid: false },
        { text: "Un rucher", valid: true },
    ], 2),
    new Question("Quelle est ma chanson préférée en ce moment (depuis plus d'un an le moment quand même) ?", [
        { text: "Regarder les filles pleurer - Saez", valid: false },
        { text: "The Rat - The Walkmen", valid: true },
        { text: "Lose Yourself - Eminem", valid: false },
        { text: "Souffle le vent - Odezenne", valid: false },
    ], 2),
    new Question("Où est-ce que j'aimerais partir en vacances avec toi ?", [
        { text: "Espagne", valid: true },
        { text: "Canada", valid: false },
        { text: "Grèce", valid: false },
        { text: "Islande", valid: false },
    ], 2),
    new Question("Quelle est ma pizza préférée ?", [
        { text: "Margherita", valid: false },
        { text: "Reine", valid: false },
        { text: "Hawaïenne", valid: false },
        { text: "4 Fromages", valid: true },
    ], 2),
    new Question("Quelles étaient les couleur de la voiture que tu m'as offerte a la st-Valentin ?", [
        { text: "Rouge - Gris - Vert", valid: false },
        { text: "Rouge - Bleu - Orange", valid: true },
        { text: "Vert - Noir - Bleu", valid: false },
        { text: "Bleu - Blanc - Rouge", valid: false },
    ], 2),
    new Question("C'est quoi mon idée pour un prochain tatouage ?", [
        { text: "Une carte de UNO", valid: false },
        { text: "Ton prénom", valid: false },
        { text: "Un tortue ninja", valid: false },
        { text: "Logo in utero", valid: true },
    ], 2),
    new Question("C'est quoi ma passion ultime ?", [
        { text: "Coder", valid: true },
        { text: "La branlette", valid: false },
        { text: "Les vroom vroom mobile", valid: false },
        { text: "D la réponse D", valid: false },
    ], 2),
    new Question("Le prénom de ma soeur ?", [
        { text: "Jeanne", valid: false },
        { text: "Elise", valid: true },
        { text: "Michelle", valid: false },
        { text: "Jean-claude", valid: false },
    ], 2),
    new Question("J'ai déjà fais un rêve érotique avec toi ?", [
        { text: 'Oui', valid: true },
        { text: 'Non', valid: false },
    ], 2),
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
    ], 8),
    new Question("Est-ce que j'ai envie de t'embrasser là, maintenant, tout de suite, incessamment sous peu ?", [
        { text: 'Oui', valid: true },
        { text: 'Non', valid: false },
    ], 2),
];

console.log(questions.length);

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

const secondChanceButton = document.getElementById("second-chance-button");

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

secondChanceButton.addEventListener("click", function () {
    actualLife = initialLife;
    defeatBox.style.display = "none";
    questionBox.style.display = "block";
    displayQuestion();
    drawLife();
});
