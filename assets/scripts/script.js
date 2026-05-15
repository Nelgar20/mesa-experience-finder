// Questions and answers
const questions = [
    {
        question: "For what occasion do you require our service?",
        answers: [
            { text: "Learn cooking techniques", category: "cookingLessons" },
            { text: "Romantic dinner", category: "privateDining" },
            { text: "Family gathering", category: "privateDining, specialEvent" },
            { text: "Special event", category: "specialEvent" }
        ]
    },
    {
        question: "How many guests will be attending?",
        answers: [
            { text: "0", category: "cookingLessons" },
            { text: "2", category: "privateDining" },
            { text: "3-6", category: "privateDining, specialEvent" },
            { text: "7+", category: "specialEvent" }
        ]
    },
    {
        question: "What kind of experience are you looking for?",
        answers: [
            { text: "An interactive cooking lesson", category: "cookingLessons" },
            { text: "A relaxed dining experience", category: "privateDining" },
            { text: "Host a memorable event", category: "specialEvent" }
        ]
    },
    {
        question: "What atmosphere would you like to create?",
        answers: [
            { text: "Warm and casual", category: "cookingLessons" },
            { text: "Elegant and intimate", category: "privateDining" },
            { text: "Lively and celebratory", category: "specialEvent" }
        ]
    }
];

let currentQuestionIndex = 0;

let score = {
    cookingLessons: 0,
    privateDining: 0,
    specialEvent: 0
};

// HTML elements
const startBtn = document.getElementById("str-btn");
const introSection = document.getElementById("intro");
const quizSection = document.getElementById("quiz-box");
const questionText = document.getElementById("question-text")


// Start quiz
startBtn.addEventListener("click", startQuiz);

// Functions

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;

    introSection.classList.add("hide");
    quizSection.classList.remove("hide");

    // showQuestion();
}

// Display the questions
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

}