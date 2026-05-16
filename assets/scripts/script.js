// Questions and answers
const questions = [
    {
        question: "For what occasion do you require our service?",
        answers: [
            { text: "Learn cooking techniques", category: ["cookingLessons"] },
            { text: "Romantic dinner", category: ["privateDining"] },
            { text: "Family gathering", category: ["privateDining", "specialEvent"] },
            { text: "Special event", category: ["specialEvent"] }
        ]
    },
    {
        question: "How many guests will be attending?",
        answers: [
            { text: "0", category: ["cookingLessons"] },
            { text: "2", category: ["privateDining"] },
            { text: "3-6", category: ["privateDining"] },
            { text: "7+", category: ["specialEvent"] }
        ]
    },
    {
        question: "What kind of experience are you looking for?",
        answers: [
            { text: "An interactive cooking lesson", category: ["cookingLessons"] },
            { text: "A relaxed dining experience", category: ["privateDining"] },
            { text: "Host a memorable event", category: ["specialEvent"] }
        ]
    },
    {
        question: "What atmosphere would you like to create?",
        answers: [
            { text: "Warm and casual", category: ["cookingLessons", "privateDining"] },
            { text: "Elegant and intimate", category: ["privateDining"] },
            { text: "Lively and celebratory", category: ["specialEvent"] }
        ]
    }
];

let currentQuestionIndex = 0;
let selectedAnswers = null

let score = {
    cookingLessons: 0,
    privateDining: 0,
    specialEvent: 0
};

// HTML elements
const startBtn = document.getElementById("str-btn");
const nextBtn = document.getElementById("nxt-btn");
const restartBtn = document.getElementById("restart-btn");

const introSection = document.getElementById("intro");
const quizSection = document.getElementById("quiz-box");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-btn");

const privateDiningCard = document.getElementById("private-dining");
const specialEventCard = document.getElementById("special-events");
const cookingLessonsCard = document.getElementById("cooking-lessons");


// Start quiz
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    selectedAnswers = null;
    score = {
        cookingLessons: 0,
        privateDining: 0,
        specialEvent: 0
    }

    cookingLessonsCard.classList.add("hide");
    privateDiningCard.classList.add("hide");
    specialEventCard.classList.add("hide");
    restartBtn.classList.add("hide");

    introSection.classList.add("hide");
    quizSection.classList.remove("hide");

    showQuestion();
}

// Display the questions
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionText.textContent = currentQuestion.question;
    answerButtons.innerHTML = "";

    currentQuestion.answers.forEach(function (answer) {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn", "border");
        answerButtons.appendChild(button);

        button.addEventListener("click", function () {
            selectedAnswers = answer.category;

            const buttons = document.querySelectorAll(".answer-btn");
            buttons.forEach(function (button) {
                button.classList.remove("selected");
            });

            button.classList.add("selected");
        });
    });
}

// Next question
nextBtn.addEventListener("click", nextQuestion);

function nextQuestion() {
    if (selectedAnswers === null) {
        alert("Please select an answer to continue!");
        return;
    }

    selectedAnswers.forEach(function (category) {
        score[category]++;
    });

    currentQuestionIndex++;
    selectedAnswers = null;
    console.log(score)

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Display results cards
function showResult() {
    quizSection.classList.add("hide");

    const highScore = Math.max(
        score.cookingLessons,
        score.privateDining,
        score.specialEvent
    );

    if (score.cookingLessons === highScore) {
        cookingLessonsCard.classList.remove("hide");
    }

    if (score.privateDining === highScore) {
        privateDiningCard.classList.remove("hide");
    }

    if (score.specialEvent === highScore) {
        specialEventCard.classList.remove("hide");
    }

    restartBtn.classList.remove("hide")
}

// Restart the quiz
restartBtn.addEventListener("click", startQuiz);