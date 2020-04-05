// Declared variables, using DOM to select area to use for scoring.
var finalScore = document.querySelector("#finalscores");


//Obtaining final scores from the client-side local storage until cleared by user. 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        
        //Continuously adds previous user initials and scores to the list items created for such. 
        finalScore.appendChild(createLi);
    }
}

//The clear scores button event listener is listed here. Clears scores from local storage upon user clicking. 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
