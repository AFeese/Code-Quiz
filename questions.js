var startQuizButton = document.getElementById("generate");
var questionBox = document.getElementById("question-box");
var finalScores = document.getElementById("finalscores");
var answerBox = document.getElementById("answer-box");
var cardBody = document.getElementById("cardbody");
var timeEl = document.querySelector(".time");


//-------------------------------//

//Array of Questions as objects to ask
var questions = [
    {
      question: " 1: BCS stands for ____",
      choices: ["Beside Corn Stalks", "Boot Camp Spot", "Bring Confetti Bro"],
      correctAnswer: "Boot Camp Spot",
    },
    {
      question: " 2: Is this a quiz?",
      choices: ["No", "It's a potato", "Yes"],
      correctAnswer: "Yes",
    },
    {
      question: " 3: How many days are in a full week?",
      choices: ["7", "15", "8"],
      correctAnswer: "7",
    },
    {
      question: " 4: This quiz is week ____ homework.",
      choices: ["2", "3", "4"],
      correctAnswer: "4",
    }
];

//-------------------------------//

//Variables for the timer start, and penalty for any wrong answers
var secondsLeft = 76;
var wrongAnswer = 10;

//-------------------------------//

//Function for starting quiz
startQuizButton.addEventListener("click", setTime);


//-------------------------------//


//Timer function for when start button is clicked.
//Function running to hid button once clicked and timer function is ran.
function setTime() {
    var timerEl = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time left: " + secondsLeft;

    if(secondsLeft <= 0) {
      clearInterval(timerEl);
      timeEl.textContent = "TIME IS UP!";
      endQuiz();
      }
    }, 1000);
      
    changeVisibility();
    renderQuestion(quesIndex);

}

//-------------------------------//

//Function to end quiz once timer runs out.
function endQuiz() {
    questionBox.textContent = "Your score: " + score + " out of " + questions.length;

    // var allDoneText = document.createElement("H1");
    // allDoneText.setAttribute("id", "allDoneText");
    // allDoneText.textContent = "Times Up Get A Life Loser";
    // questionBox.appendChild(allDoneText);
}

//-------------------------------//

//Function to change visibility of start button once clicked. 
function changeVisibility() {
  document.getElementById("generate").style.display = "none";
}

//-------------------------------//

//Variables for setting the array objects (questions) to zero, score to zero, and creating the UL items for displaying 
// the questions and choices. 
var quesIndex = 0;
var score = 0;
var unorderedList = document.createElement("ul");

//-------------------------------//

//Displaying/cycling through questions: 
function renderQuestion(quesIndex) {
  questionBox.innerHTML = "";
  unorderedList.innerHTML = "";
  //******Loop not needed because quesIndex physically sets index to 0 for question array.
    var displayedQuestion = "Question " + questions[quesIndex].question;
    var displayedChoices = questions[quesIndex].choices;
      questionBox.textContent = displayedQuestion;  


      //This displays the answers in "list item" format.
    displayedChoices.forEach(function (newItem) {
      var listItem = document.createElement("li");
      listItem.textContent = newItem;
      questionBox.appendChild(unorderedList);
      unorderedList.appendChild(listItem);
      listItem.addEventListener("click", (compareChoiAns));
    })
}
    
//-------------------------------//

//Function to compare the user's selection to the actual correct answer.
// ****THIS IS A LARGE FUNCTION>>>****
function compareChoiAns(event) {
    var element = event.target;
    //If it matches, a div is created to show the correct answer to the current index question.
    if (element.matches("li")) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "newDiv");

        if (element.textContent == questions[quesIndex].correctAnswer) {
            newDiv.textContent = "CORRECT! " + questions[quesIndex].question + " : " + questions[quesIndex].correctAnswer;
            score++;
            //If the chosen answer does not match/is not correct, the user is "alerted" by a new div text update that says so, here. 
        }else {
            newDiv.textContent = "INCORRECT. " + questions[quesIndex].question + ". The answer is " + questions[quesIndex].correctAnswer;
            secondsLeft = secondsLeft - wrongAnswer;
          }
      //This append puts the new input to the answerBox location in HTML.
        answerBox.appendChild(newDiv);
    };

    //Adds the next question to the "queue"
    quesIndex++;

    //Once questions are cycled through the object array, user is alerted their personal score out of the total questions length.
    if (quesIndex >= questions.length) {
      secondsLeft = 0;
      questionBox.textContent = "Your score: " + score + " out of " + questions.length;
 
      //We create a label that prompts the user to enter their initials once quiz is complete
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "createLabel");
        createLabel.textContent = "Enter your initials: ";
        finalScores.appendChild(createLabel);

      //We create and empty string to save the user's initials input in the box provided above this code.
        var createInput = document.createElement("input");
        createInput.setAttribute("type", "text");
        createInput.setAttribute("id", "initials");
        createInput.textContent = "";
        finalScores.appendChild(createInput);

      //Submit button is created, so that the user may submit their entry upon completion of entered initials
        var createSubmit = document.createElement("button");
        createSubmit.setAttribute("type", "submit");
        createSubmit.setAttribute("id", "Submit");
        createSubmit.textContent = "Submit";
        finalScores.appendChild(createSubmit);

      // Event listener to capture initials and local storage for initials and score
        createSubmit.addEventListener("click", function () {
          var initials = createInput.value;

          //if nothing is entered into the initials box, user is alerted. **DOES NOT WORK YET>>>***
            if (initials === null) {
              alert("please enter initials");

            //Otherwise, the initials are saved as well as the final overall score.
            } else {
              var finalScore = {
              initials: initials,
              score: score,
            }
         
        //Scores are saved to local storage. If there is no score, array is empty. 
         var allScores = localStorage.getItem("allScores");
         if (allScores === null) {
             allScores = [];
        //Otheriwise, all scores are pushed to local storage. 
         } else {
             allScores = JSON.parse(allScores);
         }
         allScores.push(finalScore);
         var newScore = JSON.stringify(allScores);
         localStorage.setItem("allScores", newScore);
        //The user is prompted to another page/page is refreshed to the scores.html (user is refreshed to another page essentially).
         window.location.replace("scores.html");
     }
 });

 //Question Index is run again if quiz is not yet over. 
    } else {
      renderQuestion(quesIndex); 
    }  

}



 
  
//Pesudo notes for beginning of project----------------

    // display the question
   
    // display the answers
   
    // wait for the user to pick an answer
    
    // tell them if they are right (show the correct answer)
    
    // if correct tally their right answers/dont take time
    // else take time

    // button for "next question"

    // go on to the next question


