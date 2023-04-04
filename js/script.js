function startTimer (){
  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      console.log("timer check")
      timer.style.visibility = 'visible'; 
      startButton.style.visibility = 'hidden';
    } else {
      timer.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    }
  }
  var timeLeft = 60;
  var timer = document.getElementById('Timer');
  
  var timerId = setInterval(countdown, 1000);
  
  

}



const startButton = document.querySelector("#start");
const lose = document.querySelector("#lose");
lose.addEventListener("click", function () { startButton.style.visibility = 'hidden'; });
document.querySelector("body1").style.visibility="visible"
document.querySelector("body2").style.visibility="hidden"
var questions = {
  [0]: {
    question: "What is the method to immediately output information using JS",
    choices: ["Console.log", "Control+v", "Alt+f4", "Event listener"],
    correctAnswer: 0
  },

  [1]: {
    question: "What is the style in which Javascript is written",
    choices: ["mooseCase", "camelCase", "Times New Roman", "kittyCase"],
    correctAnswer: 1
  },

  [2]: {
    question: "What is a selection of strings used for a loop in JS",
    choices: ["Array", "Variable", "Div", "Repository"],
    correctAnswer: 0
  },

  [3]: {
    question: "What is the git command for pushing changes to the chosen branch?",
    choices: ["git push", "git pull", "git it started", "get it started in here"],
    correctAnswer: 0
  },

  [4]: {
    question: "What is the correct HTML tag for inserting a break?",
    choices: ["breakIt", "<br>", "<h1>", "Insert-Break"],
    correctAnswer: 1
  },

  [5]: {
    questions: "When is it necessary to use the var keyword?",
    choices: ["variable", ".var", "Variable", "var"],
    correctAnswer: 3

  }
} 
const Q=document.querySelector("#Q")
const A=document.querySelector("#A")
const B=document.querySelector("#B")
const C=document.querySelector("#C") 
const D=document.querySelector("#D")


let qindex=0 
console.log(questions[qindex]);
qindex++ 
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






// Link questions answers to timer 
// Put answers on page(all buttons??)
// May need continue button 
// API for locally stored scores
// Must keep record!
// Touch+Tips



function startbutton() {
  document.querySelector("body1").style.visibility="hidden"
document.querySelector("body2").style.visibility="visible"
  console.log("Have Fun!")
  for (let i = 0; i < 6; i++) {
    const element = questions[i].choices;
    console.log(questions[i].choices) 
  }
  startButton.style.visibility = 'hidden';
  startTimer();
}
startButton.addEventListener("click", startbutton)  
A.addEventListener("click", function(){console.log("A")}),
B.addEventListener("click", function(){console.log("B")})
C.addEventListener("click", function(){console.log("C")})
D.addEventListener("click", function(){console.log("D")})


