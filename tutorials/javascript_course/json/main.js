//JSON: Javscript Object Notation

/* json is used to send and receieve Data.
JSON is a text format that is completely language independent.
Meaning JSON is used to send and recieve data in many languages...
not just in Javascript
*/

const myObj = {
  name: "Dave",
  hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("Hello!");
  },
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJson = JSON.stringify(myObj);
console.log(sendJson);
console.log(typeof sendJson);

const receiveJson = JSON.parse(sendJson);
console.log(receiveJson);
console.log(typeof receiveJson);
