function startTimer (){
  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      console.log("timer check")
      // this is the timer function
    } else {
      timer.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    }
  }
  var timeLeft = 60;
  var timer = document.getElementById('Timer');
  
  var timerId = setInterval(countdown, 1000);
  
// this is the check answer function used to cycle 
}
function checkanswer(event) { 
  var choice=event.target.id 
  if (choice==questions[qindex].correctAnswer){
    console.log("correct");
    qindex++ 
    changequestion();
  } else{   
    console.log("incorrect");
  }

}

// This is my array for the questions and answers
const startButton = document.querySelector("#start");
const lose = document.querySelector("#lose");
lose.addEventListener("click", function () { startButton.style.visibility = 'hidden'; });
document.querySelector("body1").classList.remove("hidden")
document.querySelector("body2").classList.add("hidden")
var questions = {
  [0]: {
    question: "What is the method to immediately output information using JS",
    choices: ["Console.log", "Control+v", "Alt+f4", "Event listener"],
    correctAnswer: "A"
  },

  [1]: {
    question: "What is the style in which Javascript is written",
    choices: ["mooseCase", "camelCase", "Times New Roman", "kittyCase"],
    correctAnswer: "B"
  },

  [2]: {
    question: "What is a selection of strings used for a loop in JS",
    choices: ["Array", "Variable", "Div", "Repository"],
    correctAnswer: "A"
  },

  [3]: {
    question: "What is the git command for pushing changes to the chosen branch?",
    choices: ["git push", "git pull", "git it started", "get it started in here"],
    correctAnswer: "A"
  },

  [4]: {
    question: "What is the correct HTML tag for inserting a break?",
    choices: ["breakIt", "br", "h1", "Insert-Break"],
    correctAnswer: "B"
  },

  [5]: {
    questions: "When is it necessary to use the var keyword?",
    choices: ["variable", ".var", "Variable", "var"],
    correctAnswer: "D"

  }
} 
const Q=document.querySelector("#Q")
const A=document.querySelector("#A")
const B=document.querySelector("#B")
const C=document.querySelector("#C") 
const D=document.querySelector("#D")
// this is the queryselector for the questions and answers

let qindex=0 
function changequestion(){
  quizlength= Object.getOwnPropertyNames(quiz).length 
  if(questions<quizlength)
  console.log(questions[qindex]);
  // questions for the index and output choices
  let q=questions[qindex].question 
  let a=questions[qindex].choices[0] 
  let b=questions[qindex].choices[1]
  let c=questions[qindex].choices[2]
  let d=questions[qindex].choices[3] 

  Q.innerHTML=q
  A.innerHTML=a 
  B.innerHTML=b 
  C.innerHTML=c 
  D.innerHTML=d

}

// start button function 
function startbutton()
 { changequestion()
  document.querySelector("body1").classList.add("hidden")
document.querySelector("body2").classList.remove("hidden")
  console.log("Have Fun!")
  for (let i = 0; i < 6; i++) {
    const element = questions[i].choices;
    console.log(questions[i].choices) 
  }
  startButton.style.visibility = 'hidden';
  startTimer();
}
startButton.addEventListener("click", startbutton)  
A.addEventListener("click", checkanswer)
B.addEventListener("click", checkanswer)
C.addEventListener("click", checkanswer)
D.addEventListener("click", checkanswer)


