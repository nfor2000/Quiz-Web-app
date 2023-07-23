const Questions = [
     {
          "quest": "HTML stands for __________",
          "A": "HyperText Markup Language",
          "B": "HyperText Machine Language",
          "C": "HyperText Marking Language",
          "D": "HighText Marking Language",
          "answer": "A"
     },
     {
          "quest": "What is DOM in HTML?",
          "A": "Language dependent application programming",
          "B": "Hierarchy of objects in ASP.NET",
          "C": "Application programming interface",
          "D": "Convention for representing and interacting with objects in html documents",
          "answer": "D"
     },
     {
          "quest": "Which of the following tag is used for inserting the largest heading in HTML?",
          "A": "head",
          "B": "<h1>",
          "C": "<h6>",
          "D": "Heading",
          "answer": "B"
     },
     {
          "quest": "What is the correct syntax of doctype in HTML5?",
          "A": "</doctype html>",
          "B": "<doctype html>",
          "C": "<doctype html!>",
          "D": "<!doctype html>",
          "answer": "D"
     },
     {
          "quest": "Which of the following is used to read an HTML page and render it?",
          "A": " Web server",
          "B": "Web network",
          "C": "Web browser",
          "D": "Web matrix",
          "answer": "C"
     },
     {
          "quest": "Who is the father of HTML?",
          "A": "Rasmus Lerdorf",
          "B": "Tim Berners-Lee",
          "C": "Brendan Eich",
          "D": " Sergey Brin",
          "answer": "B"
     }
]
const question = document.getElementById("question")
const choices = Array.from(document.querySelectorAll(".choice"));
const progressBar = document.querySelector(".progress-bar");

let NewQuestion = [...Questions];
let Question;
let index;
let answer;
let score = 0 ;
let questionNumber = 1;
let highscore = JSON.parse(localStorage.getItem('Highscore'));

window.addEventListener("DOMContentLoaded", getQuestion);


choices.forEach(choice => {
     choice.addEventListener("click", () => {
          progressBar.style.width = `${((questionNumber-1)/Questions.length)*100}%`
          if (answer === choice.dataset.letter) {
               choice.classList.add("correct");
               score += 10;
               document.getElementById("score").innerText = `Score: ${score}`
               
          } else {
               choice.classList.add("wrong");
          }
          setTimeout(() => {
               NewQuestion = splicearray(NewQuestion, index);
               getQuestion();
               choice.classList.remove("correct");
               choice.classList.remove("wrong");
          }, 1000)
     })
})


function getQuestion() {
     if (NewQuestion.length > 0) {
          document.getElementById("question_number").innerText = `${questionNumber}/${Questions.length}`
          index = generateRandomIndex();
          Question = NewQuestion[index];
          answer = Question.answer;
          question.textContent = `${Question.quest}`;
          choices.forEach(choice => {
               switch (choice.dataset.letter) {
                    case "A":
                         choice.textContent = `${Question.A}`;
                         break;
                    case "B":
                         choice.textContent = `${Question.B}`;
                         break;
                    case "C":
                         choice.textContent = `${Question.C}`;
                         break;
                    case "D":
                         choice.textContent = `${Question.D}`;
                         break;
               }
          })
          questionNumber ++;
     } else {
          if(highscore < score){
               localStorage.setItem("Highscore",JSON.stringify(score))
          }
          localStorage.setItem("score", JSON.stringify(score))
          window.location.assign('../end.html')
     }

}

function generateRandomIndex() {
     return Math.floor(Math.random() * NewQuestion.length)
}
function splicearray(param, index) {
     param.splice(index, 1);
     return param;
}

