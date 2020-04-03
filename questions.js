var startQuizButton = document.getElementById("generate");
var questionBox = document.getElementById("question-box");
var answerBox = document.getElementById("answer-box");
var cardBody = document.getElementById("cardbody");
var timeEl = document.querySelector(".time");


//-------------------------------//

//Questions to ask
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


var secondsLeft = 76;
var wrongAnswer = 10;


//Function for starting quiz
startQuizButton.addEventListener("click", setTime);


//Timer info and function
function setTime() {
    var timerEl = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time left: " + secondsLeft;

    if(secondsLeft <= 0) {
      clearInterval(timerEl);
      timeEl.textContent = "TIME IS UP!";
      }

      }, 1000);
      renderQuestion(quesIndex);
}


function timeUp() {

}


var quesIndex = 0;
var score = 0;
var unorderedList = document.createElement("ul");

//Displaying/cycling through questions: 
function renderQuestion(quesIndex) {
  questionBox.innerHTML = "";
  unorderedList.innerHTML = "";
  //Loop not needed because quesIndex physically sets index to 0 for question array.
    var displayedQuestion = "Question " + questions[quesIndex].question;
    var displayedChoices = questions[quesIndex].choices;
      questionBox.textContent = displayedQuestion;

      console.log(displayedQuestion);
  

    displayedChoices.forEach(function (newItem) {
      var listItem = document.createElement("li");
      listItem.textContent = newItem;
      questionBox.appendChild(unorderedList);
      unorderedList.appendChild(listItem);
      listItem.addEventListener("click", (compareChoiAns));

      console.log(displayedChoices);
    })
}
    


function compareChoiAns(event) {
    var element = event.target;

    console.log(element.textContent);

    if (element.matches("li")) {

        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "newDiv");

        if (element.textContent == questions[quesIndex].correctAnswer) {
            newDiv.textContent = "CORRECT! " + questions[quesIndex].question + " : " + questions[quesIndex].correctAnswer;
            score++;
        }
        else {
            newDiv.textContent = "INCORRECT. " + questions[quesIndex].question + ". The answer is " + questions[quesIndex].correctAnswer;
            secondsLeft = secondsLeft - wrongAnswer;
          }
        console.log(questions[quesIndex].correctAnswer);
        answerBox.appendChild(newDiv);
    };

    quesIndex++;

    if (quesIndex >= questions.length) {
      secondsLeft = 0;
      questionBox.textContent = "Your score: " + score + " out of " + quesIndex;

    } else {
      renderQuestion(quesIndex); 
    }  

}


  

    // display the question
   
    // display the answers
   
    // wait for the user to pick an answer
    
    // tell them if they are right (show the correct answer)
    
    // if correct tally their right answers/dont take time
    // else take time

    // button for "next question"

    // go on to the next question


//function renderQuestion(question, answers, correctAnswer){
    //questionBox.innerHTML = question;
   
    //console.log(questionBox.innerHTML);
 
    //alert("Press ok to continue");

    //for (item in answers) {
        //console.log(item);
    //} 
    //answerBox.innerHTML = answers; 
