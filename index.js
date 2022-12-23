var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What is your name? ");

console.log("Welcome "+ userName + " to HOW WELL DO YOU KNOW Marvel Cinematic Universe");

function play(question, answer) {
  var userName = readlineSync.question(question);

  if (userName === answer) {
    console.log("you are Right!");
    score = score + 1;
    
  } else {
    console.log("you are wrong!");
    score = score - 1;
    
  }

  console.log("current score: ", score);
  console.log("-----------")
}

var questions = [{
  question: "What is Iron Man real name in the movie? ",
  answer: "Tony Stark"
}, {
  question: "Who was able to pick up Thor’s hammer in Endgame? ",
  answer: "Captain America" 
}, {
  question: "How many Infinity Stones are there? ",
  answer: "Six"
}, {
  question: "Thor played what video game in Avengers: Endgame? ",
  answer: "Fortnite"
}, {
  question: "What does TVA stand for? ",
  answer: "Time Variance Authority"
}];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Yayyyy! You comepleted this quiz and your final score is: ", score);