const myArray = ["eat", "sleep", "code"];

const myObject = {
  name: "Dave",
  hobbies: ["eat", "sleep", "code"],
  logname: function () {
    console.log(this.name);
  },
};

localStorage.setItem("mylocalStore", JSON.stringify(myArray));
const storeLength = localStorage.length;

const mylocalDate = JSON.parse(localStorage.getItem("mylocalStore"));

console.log(storeLength);
