import { TestSession } from "./TestSession.js";

export class User {
  constructor(name, score = 0) {
    // sets initial constructor properties
    this.name = name;
    this.score = score;
    // gets allUsers from localStorage
    let allUsers = localStorage.getItem("allUsers");

    // if there is not allUsers in localStorage then create one with this object else push this new one to the array
    if (!allUsers) {
      localStorage.setItem("allUsers", JSON.stringify([this]));
    } else {
      let allUsersArray = JSON.parse(allUsers);
      allUsersArray.push(this);
      console.log({ allUsersArray });
      localStorage.setItem("allUsers", JSON.stringify(allUsersArray));
    }
    // update new user info instantly
    this.update();
  }
  //   adds points to this objects score then updates the localStorage
  addPoint() {
    this.score += 800;
    this.update();
  }
  //   updates the allUsers with new data about user
  update() {
    let usernameEl = document.querySelector(".username");
    usernameEl.textContent = this.name;
    localStorage.setItem("currentUser", JSON.stringify(this));
    let allUsers = JSON.parse(localStorage.getItem("allUsers"));
    if (!allUsers) {
      return;
    } else {
      let filteredArr = allUsers.filter((user) => user.name !== this.name);
      filteredArr.push(this);
      localStorage.setItem("allUsers", JSON.stringify(filteredArr));
    }
  }
  static createUserAndSession() {
    document.querySelector(".modal-overlay").classList.add("open");
    let beginBtn = document.querySelector(".begin-btn");
    let form = document.querySelector(".modal-body-form");
    let input = document.querySelector("#username");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    beginBtn.addEventListener("click", (e) => {
      let data = new FormData(form, beginBtn);

      for (let [key, value] of data) {
        let user = new User(value);
        let quizSession = new TestSession(user);
        document.querySelector(".modal-overlay").classList.remove("open");
        // starts the quiz
        quizSession.startQuiz();
      }
    });
  }
}
