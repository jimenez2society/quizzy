import { questions } from "./Questions.js";

export class TestSession {
  constructor(currentUser) {
    // gets all users that are saved in the localStorage
    this.allUsers = JSON.parse(localStorage.getItem("users")) || [];
    // gets current user from params
    this.currentUser = currentUser;

    // setting correctAnswers, wrongAnswers, and notAnswered to empty arrays
    this.correctAnswers = [];
    this.wrongAnswers = [];
    this.notAnswered = [];

    // start currentIndex at 0
    this.currentIndex = 0;

    this.lastIndex = questions.length - 1;
    // timerSeconds initialized to 30 seconds
    this.timerSeconds = 30;
    // degree starts at 0 for the progress circle for the timer
    this.degPerSecond = 0;

    // gets choices form
    this.form = document.querySelector(".choices");
    this.timeRemainingText = document.querySelector(".time-remaining--text");

    // handles when the submit button is clicked on the form
    this.submitBtnHandler = document
      .querySelector(".submit-answer")
      .addEventListener("click", (e) => {
        // prevents default behavior of form
        this.form.addEventListener("submit", (e) => {
          e.preventDefault();
        });
        // gets the value for the current question
        let currentQuestion = questions[this.currentIndex];

        // gets form data from the submitted form
        let formData = new FormData(
          document.querySelector(".choices"),
          e.target
        );

        // loops through formData and checks if answer is correct or not
        for (let [key, value] of formData) {
          let isCorrect = currentQuestion.checkAnswer(value);
          if (isCorrect) {
            // if correct pushes the who question object to correctAnswers array
            this.correctAnswers.push(currentQuestion);
            // adds points to the user
            currentUser.addPoint();
          } else {
            // if not correct push the question object to wrongAnswers array
            this.wrongAnswers.push(currentQuestion);
          }
        }
        // after the last question we push all correct, wrong and not answered questions to the localStorage for later use then redirects to the overview page
        if (this.currentIndex === this.lastIndex) {
          localStorage.setItem(
            "score",
            JSON.stringify({
              correct: this.correctAnswers,
              wrong: this.wrongAnswers,
              blank: this.notAnswered,
            })
          );
          //   rediect to overview page
          window.location.pathname = "/index.html";
          return;
        }
        // reset degPerSecond and timerSeconds to default
        this.degPerSecond = 0;
        this.timerSeconds = 30;
        this.timeRemainingText.textContent = this.timerSeconds;
        // moves to next question
        this.nextQuestion();
      });
  }
  startQuiz() {
    // renders the first question
    questions[this.currentIndex].render();
    // selecting all neccesary DOM elements for later use
    let timeRemaining = document.querySelector(".time-remaining");
    this.timeRemainingText = document.querySelector(".time-remaining--text");
    // renders the seconds to the DOM
    this.timeRemainingText.textContent = this.timerSeconds;

    // degree interval for the progress circle
    let degInterval = setInterval(() => {
      // if seconds reaches 0 then clear this interval and reset degree to 0
      if (this.timerSeconds < 0) {
        this.degPerSecond = 0;
        clearInterval(degInterval);
      }
      //   create a conic-gradient for the circle and pass it a dynamic degree setting
      timeRemaining.style.background = `conic-gradient(#43486D ${this.degPerSecond}deg, #46dfe5 0deg)`;
      //   adds 1.2 degrees per 100ms to give it a smoother effect per second
      this.degPerSecond += 1.2;
    }, 100);
    let secondsInterval = setInterval(() => {
      // if timerSeconds reaches zero then push question to the notAnswered array because it is assumed they didn't answer
      if (this.timerSeconds < 0) {
        this.notAnswered.push(questions[this.currentIndex]);
        // if last question redirect to overview and clear interval
        if (this.currentIndex === this.lastIndex) {
          localStorage.setItem(
            "score",
            JSON.stringify({
              correct: this.correctAnswers,
              wrong: this.wrongAnswers,
              blank: this.notAnswered,
            })
          );
          location.pathname = "./index.html";
          clearInterval(secondsInterval);
        }
        // go to next question, reset timerSeconds and restart quiz chich just restarts the pattern
        this.nextQuestion();
        this.timerSeconds = 30;

        this.restartQuiz();

        clearInterval(secondsInterval);
      }
      this.timeRemainingText.textContent = this.timerSeconds;
      this.timerSeconds--;
    }, 1000);
  }
  nextQuestion() {
    // reset form
    this.form.reset();
    // increment index for next question
    this.currentIndex++;
    // renders next question
    questions[this.currentIndex].render();
  }
  restartQuiz() {
    // initiate startQuiz again
    this.startQuiz();
  }
}
