// Questions and answers
const questions = [
    {
        question: "For what occasion do you require our service?",
        answers: [
            {
                text: "Learn cooking techniques",
                score: ""
            },
            {
                text: "Romantic dinner",
                score: ""
            },
            {
                text: "Family gathering",
                score: ""
            },
            {
                text: "Special event",
                score: ""
            }
        ]
    },
    {
        question: "How many guest will be attending?",
        answers: [
            {
                text: "0",
                score: ""
            },
            {
                text: "2",
                score: ""
            },
            {
                text: "3-6",
                score: ""
            },
            {
                text: "7+",
                score: ""
            }
        ]
    },
    {
        question: "What kind of experience are you looking for?",
        answers: [
            {
                text: "An interactive cooking lesson",
                score: ""
            },
            {
                text: "A relaxed dining experience",
                score: ""
            },
            {
                text: "Host a memorable event",
                score: ""
            }
        ]
    },
    {
        question: "What atmosphere would you like to create?",
        answers: [
            {
                text: "Warm and casual",
                score: ""
            },
            {
                text: "Elegant and intimate",
                score: ""
            },
            {
                text: "Lively and celebratory",
                score: ""
            }
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