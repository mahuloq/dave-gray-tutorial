// Loops
let myNumber = 0;
while (myNumber < 50) {
  console.log(myNumber + 1);
  myNumber++;
}
// Dont create an endless loop

do {
  console.log(myNumber);
} while (myNumber < 50);

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let myName = "Matthew";
for (let i = 0; i < myName.length; i++) console.log(myName.charAt(i));

let counter = 0;
let myLetter;
while (counter <= 6) {
  myLetter = myName[counter];
  console.log(myLetter);
  if (myLetter === "e") break;
  counter++;
}
