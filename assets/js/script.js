// Accessing elements by ID
var questionElement = document.querySelector("#question");
var responeElement = document.querySelector("#responses");

// Generating the data/carousel
var questions = [
  { question: "What is a function?", responses: [ "Reusable code", "Primitive value", "None of the above" ], answer: 0 }, { question: "what is an array?", responses: [ "List of values", "Key value pairs", "None of the above" ], answer: 2 }, { question: "What is a primitive value?", responses: [ "Only a Number", "A Boolean and a Symbol", "A Number, String, Boolean, Undefined, Symbol, and BigInt" ], answer: 2 }, { question: "What is the abbreviation JSON?", responses: [ "JASON", "JavaScript notation object", "None of the above" ], answer: 1 },
]

// Navigate through the list of questions
function navigate(direction) {
  index = index + direction;
  // If the user tries to navigate "back" from the start:
  // Go to last question
  if (index < 0) {
    index = images.length - 1;
    // If the user is at the very end
    // Go to the first question
  } else if (index > images.length - 1) {
    index = 0;
  }
  // Render the question
  renderQuestion();
  // Render the answer
  renderAnswers();
}

// Timer starts when user pushes start button
function startTimer(){
    var counter = 5;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = "Time: " + counter;
      }
    }, 1000);
  }
  function start()
  {
      document.getElementById("count");
      startTimer();
  };