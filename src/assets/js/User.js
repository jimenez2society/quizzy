export class User {
  constructor(name) {
    // sets initial constructor properties
    this.name = name;
    this.score = 0;
    this.totalScore = 0;
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
}
