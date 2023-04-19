//Conditionals: If Statements

// let soup = "chicken noodle soup";
// let reply;
// let customerIsBanner = false;
// let crackers = true;

// if (customerIsBanner) {
//   reply = "No soup for you!";
// } else if (soup && crackers) {
//   reply = `Here's your order of ${soup} & crackers.`;
// } else if (soup) {
//   reply = `Here's your order of ${soup}.`;
// } else {
//   reply = "Sorry, we're out of soup.";
// }
// console.log(reply);

// let testScore = 59;
// let collegeStudent = false;
// let grade;

// if (testScore >= 90) {
//   grade = "A";
// } else if (testScore >= 80) {
//   grade = "B";
// } else if (testScore >= 70) {
//   grade = "C";
// } else if (testScore >= 60) {
//   grade = "D";
// } else {
//   if (collegeStudent) {
//     grade = "U";
//   } else {
//     grade = "F";
//   }
// }

// console.log(grade);
let playerOne = "scissors";
let computer = "paper";
let outcome;

if (playerOne === computer) {
  outcome = "It's a tie!";
} else if (playerOne === "rock") {
  if (computer === "scissors") {
    outcome = "You Won!";
  } else {
    outcome = "You Lose.";
  }
} else if (playerOne === "paper") {
  if (computer === "rock") {
    outcome = "You Won!";
  } else {
    outcome = "You Lose.";
  }
} else {
  if (computer === "paper") {
    outcome = "You Won!";
  } else {
    outcome = "You Lose.";
  }
}
console.log(outcome);
