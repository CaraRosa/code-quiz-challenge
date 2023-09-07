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
