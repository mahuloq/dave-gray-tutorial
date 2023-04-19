// Conditionals: Ternary Operator

//syntax
//condition ? ifTure : ifFalse;

// let soup = "Chicken Noodle Soup";
// let isCustomerBanned = false;
// let soupAccess = isCustomerBanned
//   ? "Sorry, no soup for you!"
//   : soup
//   ? `Yes we have ${soup} today.`
//   : "Sorry, no soup today.";

// console.log(soupAccess);

// let testScore = 60;
// let myGrade =
//   testScore > 89
//     ? "A"
//     : testScore > 79
//     ? "B"
//     : testScore > 69
//     ? "C"
//     : testScore > 59
//     ? "D"
//     : "F";

// console.log(`My test grade is a ${myGrade}.`);

let playerOne = "scissors";
let computer = "rock";

let result =
  playerOne === computer
    ? "Tie Game"
    : playerOne === "rock" && computer === "paper"
    ? "Computer Wins"
    : playerOne === "paper" && computer === "scissors"
    ? "Computer Wins"
    : playerOne === "scissors" && computer === "rock"
    ? "Computer Wins"
    : "playerOne wins!";

console.log(result);
