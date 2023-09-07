// retrieves the user scores from local storage
var quizScores = JSON.parse(localStorage.getItem("userScore"));
var scoresList = document.getElementById("scoresList");

if (quizScores !== null) {
    // Clear the existing scores list
    scoresList.innerHTML = "";

    // loops through the array and displays the user's initials and their score
    quizScores.forEach(function (userScore) {
        var listItem = document.createElement("li");
        listItem.textContent = "Initials: " + userScore.userInitial + " - Score: " + userScore.userScore;
        scoresList.appendChild(listItem);
    });
}

document.getElementById("goBackButton").addEventListener("click", function() {
    // this will take the user to the beginning of the code quiz
    window.location.href = "index.html";
});

// event listener for the Clear high scores button
// if the user pushes the button, it clears the users' initials and scores from local storage. To reflect that change for the user, the scores list is set to an empty string to show that the initials and high scores have been cleared on the High Scores page
document.getElementById("clearScores").addEventListener("click", function() {
    localStorage.removeItem("userScore");

    var scoresList = document.getElementById("scoresList");
    scoresList.innerHTML = "";
});
