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
// gets all localStorage items
let user = JSON.parse(localStorage.getItem("currentUser"));
let allUsers = JSON.parse(localStorage.getItem("allUsers"));
let endScore = JSON.parse(localStorage.getItem("score"));

// redirect to home path if path is "/"
if (window.location.pathname === "/") {
  redirect(homePage);
}
// if we are on the home page then we call the beginQuiz function
if (homePage.isPath) {
  // our beginQuiz funtion adds a fade class to the welcome-screen causing it to fade away
  const beginQuiz = () => {
    document.querySelector(".welcome-screen").classList.add("fade");

    // after 4 seconds we redirect the page and set welcome screen class to hide
    setTimeout(() => {
      document.querySelector(".welcome-screen").classList.add("hide");
      redirect(quizPage);
    }, 1400);
  };

  // if there is already a currentUser then we show a "start as a new user" button right under the begin quiz button and then we add an event listener to that button that removes "score" and "currentUser" from localStorage, then call beginQuiz again
  if (user) {
    let newUserBtn = document.querySelector(".new-user-btn");
    newUserBtn.classList.add("show");
    newUserBtn.addEventListener("click", (e) => {
      localStorage.removeItem("score");
      localStorage.removeItem("currentUser");
      beginQuiz();
    });
  }
  // adds an event listener to the begin button to begin quiz
  document.querySelector(".begin").addEventListener("click", (e) => {
    beginQuiz();
  });
}
// if we are on the quiz page
if (quizPage.isPath) {
  // if user exists create session with the already exising user and start the quiz
  if (localStorage.getItem("currentUser")) {
    let quizSession = new TestSession(user);
    // starts the quiz
    quizSession.startQuiz();
  }
  // if there is not a current user then we begin the quiz as a new user which will prompt for a username
  if (!user) User.createUserAndSession();
}

// if we are on the overview page
if (overviewPage.isPath) {
  // select all the elements that will need to be dynamic
  let scoreEl = document.querySelector(".score");
  let testerNameEl = document.querySelector(".current-tester-name");
  let correctSection = document.querySelector("#correct-answers");
  let wrongSection = document.querySelector("#wrong-answers");
  let wrongAnswersAmount = document.querySelector(".wrong-answers-amount");
  let correctAnswerAmount = document.querySelector(".correct-answers-amount");
  let percent = document.querySelector(".current-test-percent--data");

  // sets totalAnswers to be the sum of correct, wrong, and blank answers length
  let totalAnswers =
    endScore.correct.length + endScore.wrong.length + endScore.blank.length;

  // sets the percent element to a percentage of what we got correct and how many answers there are to give a percentage grade
  percent.textContent = Math.floor(
    (endScore.correct.length / totalAnswers) * 100
  );
  // sets correctAnswerAmount element to the correct answers array length
  correctAnswerAmount.textContent = endScore.correct.length;
  // sets wrongAnswersAmount element to the wrong answers array length
  wrongAnswersAmount.textContent = endScore.wrong.length;

  // for each of the correct answers we render a correctAnswerItem
  endScore.correct.forEach((item) =>
    correctSection.appendChild(
      correctAnswerItem(item.question, item.correctAnswer)
    )
  );
  // for each of the wrong answers we render a wrongAnswerItem
  endScore.wrong.forEach((item) =>
    wrongSection.appendChild(
      wrongAnswerItem(item.question, item.selectedAnswer, item.correctAnswer)
    )
  );
  // set the testers name element to the current users name
  testerNameEl.textContent = user.name;
  // set the score element to the current users score
  scoreEl.textContent = user.score;
}
// if we are on the highscores page
if (highscoresPage.isPath) {
  // we sort the score from highest to lowest
  sortScore(allUsers, 0, allUsers.length - 1);
  // we select the highscore container
  let highscoreContainer = document.querySelector(".highscores-users");
  // for each user we create a highscoreUser setting the index + 1 to the "rank" parameter to visually see a numbered rank on screen
  allUsers.forEach((user, i) =>
    highscoreContainer.appendChild(highscoreUser(user.name, user.score, i + 1))
  );
}
