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
    // gets the usernameEl
    let usernameEl = document.querySelector(".username");
    // updates the text with the currentUser
    usernameEl.textContent = this.name;

    // sets the currentUser to the localStorage
    localStorage.setItem("currentUser", JSON.stringify(this));
    // gets all users from localStorage
    let allUsers = JSON.parse(localStorage.getItem("allUsers"));
    if (!allUsers) {
      // return if there is no users
      return;
    } else {
      // else we filter through the allUsers array and select all users except the one with the currentUsers name
      let filteredArr = allUsers.filter((user) => user.name !== this.name);
      // then we push the current user back into the filtered array (ideally the currentUser has some new data)
      filteredArr.push(this);
      // set filteredUsers to localStorage. Updating the user with it's new data
      localStorage.setItem("allUsers", JSON.stringify(filteredArr));
    }
  }
  // a method that can be called on the class itself called createUserAndSession this usually is called if there is no current user in the localStorage
  static createUserAndSession() {
    // open the modal
    document.querySelector(".modal-overlay").classList.add("open");
    // selects the begin button that is in tho modal
    let beginBtn = document.querySelector(".begin-btn");
    // selects the form that is in tho modal
    let form = document.querySelector(".modal-body-form");
    // prevents the default on the form
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    // when the button is click we get the data from the form and create the new user, new session, close the modal and then start the quiz
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
