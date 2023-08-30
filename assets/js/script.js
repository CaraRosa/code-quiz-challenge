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
  var counter = 5;
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
    startTimer();
    renderQuestion();
    renderResponses();
    document.querySelector("button").style.display = "none";
    // gets to first question
    navigate(0);
    // render next question
    renderQuestion();
};

// new function to move to first question
function renderQuestion() {
  questionElement.textContent = questions[index].question;
}

// need to display options associated with the current selection
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
  { question: "What is a function?", responses: ["Reusable code", "Primitive value", "None of the above"], answer: 0 }, { question: "what is an array?", responses: ["List of values", "Key value pairs", "None of the above"], answer: 2 }, { question: "What is a primitive value?", responses: ["Only a Number", "A Boolean and a Symbol", "A Number, String, Boolean, Undefined, Symbol, and BigInt"], answer: 2 }, { question: "What is the abbreviation JSON?", responses: ["JASON", "JavaScript notation object", "None of the above"], answer: 1 },
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

// // Event listener for when user clicks on next button
// next.addEventListener("click", function(event) {
//   navigate(1);
//   renderQuestion();
// });

// // Event listener for when user clicks on previous button
// prev.addEventListener("click", function(event) {
//   navigate(-1);
// });



