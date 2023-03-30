// path and javascript for /index.html

import {
  correctAnswerItem,
  highscoreUser,
  wrongAnswerItem,
} from "../helpers/domElements.js";
import { sortScore } from "../helpers/sort.js";
import {
  highscoresPage,
  homePage,
  overviewPage,
  quizPage,
  redirect,
} from "./routes.js";

import { TestSession } from "./TestSession.js";
import { User } from "./User.js";

let user = JSON.parse(localStorage.getItem("currentUser"));
let allUsers = JSON.parse(localStorage.getItem("allUsers"));
let endScore = JSON.parse(localStorage.getItem("score"));

// redirect to home path
if (window.location.pathname === "/") {
  redirect(homePage);
}
if (homePage.isPath) {
  document.querySelector(".begin").addEventListener("click", (e) => {
    document.querySelector(".welcome-screen").classList.add("fade");
    setTimeout(() => {
      document.querySelector(".welcome-screen").classList.add("hide");
      redirect(quizPage);
    }, 1400);
  });
}

if (quizPage.isPath) {
  // if user exists create session with exising
  if (localStorage.getItem("currentUser")) {
    let quizSession = new TestSession(user);
    // starts the quiz
    quizSession.startQuiz();
  } // create new user
  if (!user) User.createUserAndSession();
}
if (overviewPage.isPath) {
  console.log({ endScore });
  let scoreEl = document.querySelector(".score");
  let testerNameEl = document.querySelector(".current-tester-name");
  let correctSection = document.querySelector("#correct-answers");
  let wrongSection = document.querySelector("#wrong-answers");
  let wrongAnswersAmount = document.querySelector(".wrong-answers-amount");
  let correctAnswerAmount = document.querySelector(".correct-answers-amount");
  let percent = document.querySelector(".current-test-percent--data");
  let totalAnswers =
    endScore.correct.length + endScore.wrong.length + endScore.blank.length;
  percent.textContent = Math.floor(
    (endScore.correct.length / totalAnswers) * 100
  );
  correctAnswerAmount.textContent = endScore.correct.length;
  wrongAnswersAmount.textContent = endScore.wrong.length;
  endScore.correct.forEach((item) =>
    correctSection.appendChild(
      correctAnswerItem(item.question, item.correctAnswer)
    )
  );
  endScore.wrong.forEach((item) =>
    wrongSection.appendChild(
      wrongAnswerItem(item.question, item.selectedAnswer, item.correctAnswer)
    )
  );
  testerNameEl.textContent = user.name;
  scoreEl.textContent = user.score;
  console.log(user);
}

if (highscoresPage.isPath) {
  sortScore(allUsers, 0, allUsers.length - 1);
  let highscoreContainer = document.querySelector(".highscores-users");

  allUsers.forEach((user, i) =>
    highscoreContainer.appendChild(highscoreUser(user.name, user.score, i + 1))
  );
  console.log(allUsers);
}
