view1.style.display = "none";
view2.style.display = "none";
view3.style.display = "flex";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit event");
  });
};

// const initApp = () => {
//   const view = document.querySelector("#view2");
//   const div = view.querySelector("div");
//   const h2 = div.querySelector("h2");

//   view.addEventListener(
//     "click",
//     (event) => {
//       view.style.backgroundColor = "purple";
//     },
//     false
//   );
//   div.addEventListener(
//     "click",
//     (event) => {
//       div.style.backgroundColor = "blue";
//     },
//     false
//   );
//   h2.addEventListener(
//     "click",
//     (event) => {
//       event.target.textContent = "Clicked";
//     },
//     false
//   );
// };
