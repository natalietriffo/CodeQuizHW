var questions = document.getElementById("questions")
var questionsName = document.getElementById("QuestionNameHeaders")
var questionsOptions = document.getElementById("Options")
var questionsStart = document.getElementById("Start")
var Scores = document.getElementById("Scores")
var time = document.getElementById("Timer")
var Username = document.getElementById("userName")
var optionA = document.getElementById("option1")
var optionB = document.getElementById("option2")
var optionC = document.getElementById("option3")
var optionD = document.getElementById("option4")
var Answer = document.getElementById("answer")
var end = document.getElementById("Lastscreen")
var scoresWrapper = document.getElementById("scores-wrapper")
var userNameText = document.getElementById("usernameText")
var saveName = document.getElementById("saveName")
var Lastscreen = document.getElementById("Lastscreen")
var endingscore = document.getElementById("endingscore")

Lastscreen.style.display = "none"
endingscore.style.display = "none"
scoresWrapper.style.display = "none"


NumberIncorrect = 0
NumberCorrect = 0

var questionsArr = [{
    question: "The Process of find problems and correcting them within a program is called what?",
    option1: "Scanning",
    option2: "Debugging",
    option3: "Executing",
    option4: "Coloring",
    Answer: "Debugging"
},
{
    question: "A loop that never ends is called a ___?",
    option1: "Recursive Loop",
    option2: "For Loop",
    option3: "While Loop",
    option4: "Infinite Loop",
    Answer: "Infinite Loop"
},
{
    question: "How can you save your work using your keyboard (on a mac)?",
    option1: "Type Command S",
    option2: "Type SAVE",
    option3: "Type ALT S",
    option4: "Pray to God as hard as you can that it magically saves",
    Answer: "Type Command S"
},
{
    question: "BONUS QUESTION: The 1st color in the rainbow is?",
    option1: "Purple",
    option2: "Orange",
    option3: "Red",
    option4: "Green",
    Answer: "Red"
}
];

//where we are starting in the index
var questionsArrIndex = 0;
//event listeners
StartButton.addEventListener(`click`, beginQuiz)
nextquestion.addEventListener(`click`, nextquestion)
//starting time
var time = 200;
nextquestion.style.display = "none";

//HANDLES THE QUIZ LOGIC
function beginQuiz() {
    console.log("Begin Quiz")
    Start.style.display = "none";
    StartButton.style.display = "none";
    nextquestion.style.display = "visable"

    //questions.removeAtrribute("class");

    //TIMER FUNCTION
    var StartTimer = setInterval(function () {
        NumberCorrect++;
        NumberIncorrect--;
        time--;
        Seconds.textContent = time;

        if (time < 0 || questionsArrIndex === questionsArr.length) {
            clearInterval(StartTimer);
            time.textContent = "";
            console.log("correct" + NumberCorrect);
            console.log("Incorrect" + NumberIncorrect);
            userName.setAttribute("style", "boarder:5px soild black");
            questions.style.display = "none"
            endquiz()
        }
       

    }, 1000)
    showquestions()
}
function showquestions() {
    console.log("showquestions")
    QuestionNameHeaders.textContent = questionsArr[questionsArrIndex].question;
    option1.textContent = questionsArr[questionsArrIndex].option1
    option2.textContent = questionsArr[questionsArrIndex].option2
    option3.textContent = questionsArr[questionsArrIndex].option3
    option4.textContent = questionsArr[questionsArrIndex].option4

    option1.addEventListener("click", checkAnswer)
    option2.addEventListener("click", checkAnswer)
    option3.addEventListener("click", checkAnswer)
    option4.addEventListener("click", checkAnswer)


}
function nextquestions() {
    console.log("nextquestion")
}

function checkAnswer(event) {


    var userselected = event.target.textContent;
    console.log(userselected)
    let CorrectAnswer = questionsArr[questionsArrIndex].Answer;
    console.log(CorrectAnswer)
    var displayanswer = document.getElementById("answer");
    if (userselected === CorrectAnswer) {
        NumberCorrect += 1;
        console.log("Correct")
        questionsArrIndex++;
        displayanswer.textContent = ("Correct");
        if (questionsArrIndex < questionsArr.length) {
            //this will call the show questions function again after the user selects the correct answer
            setTimeout(function () { showquestions() }, 500)
        }

    } else {
        console.log("Incorrect Choice")
        time -= 15;
        questionsArrIndex++;
        displayanswer.textContent = ("This was the wrong choice")
        setTimeout(function () { showquestions() }, 1500)
    }

    console.log("Your Score is" + NumberCorrect + "and" + NumberIncorrect)
    console.log("Ending time" + time)

// endquiz()

}

function endquiz() {
   
 //display ending message
 Lastscreen.style.display = "block"
 scoresWrapper.style.display = "block"
//  endingscore.textContent = "Your Score is " + NumberCorrect + " with a time of " + time + "."
endingscore.textContent = time
 // display user name text box
 userNameText.textContent = userNameText
 console.log(userNameText)
 //display save inital btn
 saveName.style.display = "block"
 //display btn to replay  GO back will play the game again


    function saveName() {
        console.log("save")

        var savedNames = localStorage.getItem("Names");
        Names.textContent = savedNames;
        // var EndingScore = document.getElementById(EndingScore);
        var savedscore = localStorage.getItem('EndingScore')
        EndingScore.textContent = savedscore;

    }

}