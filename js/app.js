// path and javascript for /index.html

import { Question } from "./Question.js";

// redirect to home path
if (window.location.pathname === "/") {
  window.location.pathname = "/index.html";
}
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
  let question1 = new Question("How long is this test?", [
    "10 questions",
    "20 questions",
    "30 questions",
  ]);

  // let isOnQuestion = beginTimer();

  // start timer

  // display question

  // handle if timer expires

  // submit chosen answer and add it to the currentTestScore

  // move to next question and reset timer

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
