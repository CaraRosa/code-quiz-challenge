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