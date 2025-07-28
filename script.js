

// const questions = [  // json question and answers
//     {
//     question: "which is large animal in the world ?",
//     answers:[
//         {text: "Shark" ,correct:false},
//         {text: "Blue whale" ,correct:true},
//         {text: "Elephant" ,correct:false},
//         {text: "Giraffe" ,correct:false},
//     ]
// },
//     {
//     question: "which is smallest country in the world ?",
//     answers:[
//         {text: "Vatican City" ,correct:true},
//         {text: "Bhutan" ,correct:false},
//         {text: "Nepal" ,correct:false},
//         {text: "Shri Lanka" ,correct:false},
//     ]
// },
//     {
//     question: "which is the largest desert in the world ?",
//     answers:[
//         {text: "Kalahari" ,correct:false},
//         {text: "Gobi" ,correct:false},
//         {text: "Sahara" ,correct:false},
//         {text: "Antarctica" ,correct:true},
//     ]
// },
//     {
//     question: "which is the smallest continent in the world ?",
//     answers:[
//         {text: "Asia" ,correct:false},
//         {text: "Australia" ,correct:true},
//         {text: "Arctic" ,correct:false},
//         {text: "Africa" ,correct:false},
//     ]
// },
// ];


// const questionElement = document.getElementById("question");
// const answersButton = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     showQuestion();
// }

// function showQuestion(){
//      resetState()
//     let questionIndex= questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + "." +questionIndex.question;


// questionIndex.answers.forEach(answer=>{
//     const button = document.createElement("button");
//     button.innerHTML = answer.text
//     button.classList.add("btn");
//     answersButton.appendChild(button);
//     if (answer.correct) {
//         button.dataset.correct = answer.correct;
//     }
//     button.addEventListener("click",selectAnswer);
   
// })

// }
// function resetState() {
//     nextButton.style.display = 'none';
//     while (answersButton.firstChild) {
//         answersButton.removeChild(answersButton.firstChild);
//     }
// }

// function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true" ;
//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     }else{
//         selectedBtn.classList.add("incorrect");
//     }
//     Array.from(answersButton.children).forEach(button =>{
//         if (button.dataset.correct === "true") {
//             button.classList.add("correct");

//         }
//         button.disabled = true;
//     })
//     nextButton.style.display = "block";
// }

// function showScore(){
//     resetState();
//    questionElement.innerHTML = `your scored ${score} out of ${questions.length}`;
//     nextButton.innerHTML = "Play Again";
//     nextButton.style.display = "block";
// }

// function handleNextButton(){
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         showQuestion();
//     }else{
//         showScore();
//     }
// }

// nextButton.addEventListener("click" , ()=>{
//     if (currentQuestionIndex < questions.length) {
//         handleNextButton();
//     }
//     else{
//         startQuiz()
//     }
// })
// startQuiz()



// Array of quiz questions, each with a question and multiple answer choices
const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Sri Lanka", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

// Get references to HTML elements
const questionElement = document.getElementById("question");
const answersButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Track current question and score
let currentQuestionIndex = 0;
let score = 0;

// Starts the quiz from the beginning
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

// Displays the current question and its answer options
function showQuestion() {
  resetState(); // Clear previous answers and hide "Next" button
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  // Create a button for each answer option
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");

    // Mark the correct answer using a data attribute
    if (answer.correct) {
      button.dataset.correct = "true";
    }

    // Add click event listener to each answer button
    button.addEventListener("click", selectAnswer);
    answersButton.appendChild(button);
  });
}

// Clears old answers and hides the next button
function resetState() {
  nextButton.style.display = "none";
  while (answersButton.firstChild) {
    answersButton.removeChild(answersButton.firstChild);
  }
}

// Handles logic when an answer is selected
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  // Add styling to show correct or incorrect answer
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++; // Increase score if answer is correct
  } else {
    selectedBtn.classList.add("incorrect");
  }

  // Highlight all correct answers and disable all buttons
  Array.from(answersButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  // Show the "Next" button after an answer is selected
  nextButton.style.display = "block";
}

// Shows the final score after the last question
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

// Handles the logic for the "Next" button
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(); // Show the next question
  } else {
    showScore(); // Quiz is over, show score
  }
}

// When the next/play-again button is clicked
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz(); // Restart the quiz
  }
});

// Start the quiz immediately when the page loads
startQuiz();








