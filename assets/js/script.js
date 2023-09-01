// Accessing elements by ID
var questionElement = document.querySelector("#question");
var responseElement = document.querySelector("#responses");
var submitInitialsBtn = document.querySelector("#submit-score");
var userInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit-initials");
var msgDiv = document.querySelector("#msg");
var initialsSpan = document.querySelector("#user-initials");
var resultMSG = document.querySelector("#result");


// Accessing elements by class
var carousel = document.querySelector(".carouselbox");
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");



// Sets the index (number of questions) to 0 (first question)
var index = 0;
var counter = 30;

var questionResponseElement = document.querySelector("#responses");

// Timer starts when user pushes start button
function startTimer(){
  var intervalId = setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = "Time left: " + counter;
    }
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

// Renders the question
function renderQuestion() {
  // Update the html with the current question
  questionElement.textContent = questions[index].question;
}



// need to display options (responses) associated with the current selection
// how do we know which current question (line 45 refer)
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
      alert("Right");
    } else {
      alert("Wrong!");
      deductTime();
    }
    if(index < questions.length - 1) {
      index++;
      renderQuestion();
      renderAnswers();
    }
}

// function for if they get time off clock
function deductTime () {
  counter = counter - 10; 
}


function navigate(direction) {
  index = index + direction;
  // If the user tries to navigate "back" from the start:
  // Go to last question
  if (index < 0) {
    index = questions.length - 1;
    // If the user is at the very end
    // Go to the first question
  } else if (index > questions.length - 1) {
    index = 0;
  }
  // Renders the question
  renderQuestion();
  // Renders the answer
  renderAnswers();
}


// function displayRightWrong(type, message) {
//   responsesUL.textContent 
// }

// calls this function


function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it to the page
  // Setting the variables
  initialsSpan.textContent = localStorage.getItem("initials");


}














// function userInput() {
//   if (index === questions.length) {

//   }
// }

// function renderSubmission() {

// }

// function renderLastInitials() {
//   userInitialsSpan.textContent = localStorage.getItem("initials");
// }

// submitInitialsBtn.addEventListener("click", function(event) {
//   event.preventDefault();
//   var initials = document.querySelector("#initials").value;
// })


