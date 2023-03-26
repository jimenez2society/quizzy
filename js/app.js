import { beginTimer } from "./timer.js";

if (window.location.pathname === "/index.html") {
  document.querySelector(".begin").addEventListener("click", (e) => {
    document.querySelector(".welcome-screen").classList.add("fade");
    setTimeout(() => {
      document.querySelector(".welcome-screen").classList.add("hide");
      window.location.pathname = "/questions.html";
    }, 1400);
  });
}
if (window.location.pathname === "/questions.html") {
  beginTimer();
  Array.from(document.querySelectorAll(".question-choice")).map((choice) => {
    choice.addEventListener("click", (e) => {
      let choiceInput = Array.from(choice.children).filter(
        (c) => c.name === "choice"
      );
      choiceInput[0].checked = true;

      if (choiceInput[0].checked === true) {
      }
    });
  });
}
