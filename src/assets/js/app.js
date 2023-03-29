// path and javascript for /index.html

import { Question } from "./Question.js";
import { questions } from "./Questions.js";
import { TestSession } from "./TestSession.js";
import { User } from "./User.js";

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
  //  allows for the whole choice container to be clicked and sets the radio input to checked
  Array.from(document.querySelectorAll(".question-choice")).map((item) => {
    item.addEventListener("click", (e) => {
      Array.from(e.target.children)[0].checked = true;
    });
  });

  // ask user for name
  let user = prompt("Choose name");
  // document.querySelector(".modal-overlay").classList.add("open");
  // create new user
  let currentUser = new User(user);
  // create a new quizSession with the user
  if (currentUser) {
    let quizSession = new TestSession(currentUser);
    // starts the quiz
    quizSession.startQuiz();
  }
}
