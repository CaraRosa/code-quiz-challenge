// Accessing elements by ID
var questionElement = document.querySelector("#question");
var responseElement = document.querySelector("#responses");
var resultMSG = document.querySelector("#result");
var quiz = document.querySelector("#quiz");
var submitButton = document.querySelector("#submitButton");
var scoreElement = document.querySelector("#score");
var firstPage = document.querySelector("#first-page");

// Accessing elements by class
var quizEnd = document.querySelector(".quiz-end");
var newPage = document.querySelector(".new-page");



// Sets the index (number of questions) to 0 (first question)
var index = 0;
var counter = 30;
var score = 0;
var questionResponseElement = document.querySelector("#responses");

var isQuizOver = false;
// Timer starts when user pushes start button
function startTimer(){
  var intervalId = setInterval(function() {
    

    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = "Time left: " + counter;
    }
    if( counter === 0 || isQuizOver) {
      clearInterval(intervalId);
      endQuiz();
      return;
    
    }
    counter--;
    counter.textContent = counter;

  }, 1000);
  
}
function start()
{
    document.getElementById("count").style="color:green;";
    // starts the timer after user pushes start button
    startTimer();
    renderResponses();
    // Button dissapears after user pushes it
    document.querySelector("button").style.display = "none";
    // gets to first question and corresponding responses
    navigate(0);
    // render next question
    renderQuestion();
    
};

// Displays the best score and input box for the user initials after user completes quiz
function endQuiz() {
  // if quiz is not over
  if(!isQuizOver) {
    quizEnd.style.display = "block";
    quiz.style.display = "none";
    isQuizOver = true;
    updateScore(counter);
  }
}

// updates the user score
function updateScore(value) {
  var newScore = score + value;
  if (newScore > 0) {
  score = newScore;
} else {
  score = 0;
}
scoreElement.textContent = score;
}

function nextQuestion() {
  if (index < questions.length - 1) {
    index++;
    renderQuestion();
    renderAnswers();
} else {
  endQuiz();
}
  }
  
// Renders the question
function renderQuestion() {
  // Update the html with the current question
  questionElement.textContent = questions[index].question;
}


function renderResponses() {
  // questions[index].responses
  for (var i = 0; i < responses.length; i++) {

    // questionElement.textContent = questions[index].responses;
    // text += questions[index].responses;
  }
 
  console.log(questions[index].responses);
}

// Generating the data/carousel
var questions = [
  { question: "What is a function?", 
  responses: ["Reusable code", "Primitive value", "None of the above"], 
  answer: "Reusable code" }, 
  { question: "What is an array?", 
  responses: ["List of values", "Key value pairs", "None of the above"], 
  answer: "None of the above" }, 
  { question: "What is a primitive value?", 
  responses: ["Only a Number", "A Boolean and a Symbol", "A Number, String, Boolean, Undefined, Symbol, and BigInt"], 
  answer:  "A Number, String, Boolean, Undefined, Symbol, and BigInt"}, 
  { question: "What is the abbreviation JSON?", 
  responses: ["JASON", "JavaScript notation object", "None of the above"], 
  answer: "JavaScript notation object" },
]

function renderAnswers() {
  console.log("questions object",questions[index]);
  console.log("list of responses", questions[index].responses);
  // Clears the html by settting innerHTML to an empty string.
  questionResponseElement.innerHTML = "";
  for (var i = 0; i < questions[index].responses.length; i++ ) {
    console.log(questions[index].responses[i]);
    var li = document.createElement("li");
    li.textContent = questions[index].responses[i];
    questionResponseElement.appendChild(li);
  }
}

// Click on the options
document.getElementById("responses").addEventListener("click", checkAnswer);

function checkAnswer(event) {
  // what I am comparing
    // console.log(event.target.innerHTML);
    // console.log(questions[index].answer);
    if (event.target.innerHTML == questions[index].answer) {
      resultMSG.textContent = "Correct!";
      updateScore(10);
      
    } else {
      resultMSG.textContent = "Incorrect!";
      deductTime();
      updateScore(-10);
    }
    if(index < questions.length - 1) {
      index++;
      renderQuestion();
      renderAnswers();
    } else {
      endQuiz;
    }
    console.log(score);
}

// function for if they get time off clock
function deductTime () {
  if(counter > 10) {
    counter = counter - 10; 
  } else {
    counter = 0;
  }
  
}

// function to render questions and answers
function navigate(direction) {
  index = index + direction;
  
  // Renders the question
  renderQuestion();
  // Renders the answer
  renderAnswers();
}

if (localStorage.getItem("userScore")) {
  var quizScores = JSON.parse(localStorage.getItem("userScore"));
} else {
  var quizScores = [];
}
console.log(typeof quizScores);

// adds an event listener to the submitButton when user submits initials
document.getElementById("submitButton").addEventListener("click", function(event) {
  // prevents the form from submitting
event.preventDefault();

var initials = document.getElementById("initialsInput").value;
var score = document.getElementById("score").innerHTML;

// object
var userScore = {
  userInitial: initials,
  userScore: score,
}

if (initials.trim() !== "") {
  quizScores.push(userScore);
  localStorage.setItem("userScore", JSON.stringify(quizScores));
  console.log("initials", initials)
} else {
  console.log("Please enter your initials.")
}

});

// when user clicks the submit button it takes them to the high scores page
document.getElementById("submitButton").onclick = function () {
  window.location.href = "highscores.html";
  
};

