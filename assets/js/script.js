// Accessing elements by ID
var questionElement = document.querySelector("#question");
var responseElement = document.querySelector("#responses");
// var startElement = document.getElementById("#timer");

// Accessing elements by class
var carousel = document.querySelector(".carouselbox");
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");

// Sets the index (number of questions) to 0 (first question)
var index = 0;
var questionResponseElement = document.querySelector("#responses");

// Timer starts when user pushes start button
function startTimer(){
  var counter = 20;
  setInterval(function() {
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

// new function to move to first question
function renderQuestion() {
  questionElement.textContent = questions[index].question;


}

// need to display options (responses) associated with the current selection
// how do we know which current question (line 41 refer)
function renderResponses() {
  questions[index].responses
  for (var i = 0; i < responses.length; i++) {
    questionResponseElement.textContent = questions[index].responses;
  }
  console.log(questions[index].responses);
}



// Generating the data/carousel
var questions = [
  { question: "What is a function?", 
  responses: ["Reusable code", "Primitive value", "None of the above"], 
  answer: "Reusable code" }, 
  { question: "what is an array?", 
  responses: ["List of values", "Key value pairs", "None of the above"], 
  answer: 2 }, 
  { question: "What is a primitive value?", 
  responses: ["Only a Number", "A Boolean and a Symbol", "A Number, String, Boolean, Undefined, Symbol, and BigInt"], 
  answer: 2 }, 
  { question: "What is the abbreviation JSON?", 
  responses: ["JASON", "JavaScript notation object", "None of the above"], 
  answer: 1 },
]


// Navigate through the list of questions
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

// Renders the question
function renderQuestion() {
  // Update the html with the current question
  questionElement.textContent = questions[index].question;
}

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

// if loop that that says if a user chooses the right answer they get a message saying correct and if wrong answer they get a message saying wrong
// if(questions.responses[index] === questions.answer[index]) {
//   p.textContent = "Correct!";
// }

// Click on the options
document.getElementById("responses").addEventListener("click", click);

function click(event) {
  // what I am comparing
    console.log(event.target.innerHTML);
    // questions is the tree trunk. Target the branch: 0; Answer is my leaf.
    console.log(questions[index].answer);
    if (event.target.innerHTML == questions[index].answer) {
      alert("You got it correct");

    } else {
      alert("You got it wrong");
    }
  
}

// function for if they get time off clock
// increment index value