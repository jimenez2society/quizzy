// Question class with constructor params of ( question , choices[] )
export class Question {
  constructor(question, choices) {
    // setting constructor values
    this.question = question;
    this.choices = choices;
    // correct answers will always be the first item in the array
    this.correctAnswer = choices[0];
    this.selectedAnswer = {};
    this.randomizeLetters();
  }
  randomizeLetters() {
    // sets initial letters
    let allLetters = ["a", "b", "c"];
    // sets current index to the length of allLetters and creates empty vaiable of randomIndex
    let currentIndex = allLetters.length,
      randomIndex;

    //   creates a while loop as long as currentIndex !== 0
    while (currentIndex !== 0) {
      // set random index to be randomized between 1 and currentIndex
      randomIndex = Math.floor(Math.random() * currentIndex);
      //   decrement currentIndex
      currentIndex--;
      //   swap currentIndex item with the randomIndex item
      [allLetters[currentIndex], allLetters[randomIndex]] = [
        allLetters[randomIndex],
        allLetters[currentIndex],
      ];
    }
    //    create an empty object for later use
    let choicesObj = {};

    // maps through the choices array and gets the item and index, uses index to set the key as a random choice letter and choice as the value

    let choices = this.choices.map((choice, i) => ({
      [allLetters[i]]: choice,
    }));

    // loops through choices and makes the array one object
    for (let i = 0; i < choices.length; i++) {
      Object.assign(choicesObj, choices[i]);
    }
    // sets this.choices to the choices object
    this.choices = choicesObj;
  }
  getChoice(letter) {
    // gets a choice by the letter (might remove)
    return this.choices[letter];
  }
  //   renders the question to the DOM
  render() {
    // gets the .question-text element and sets it to this instances question message
    document.querySelector(".question-text").textContent = this.question;
    // loops through the keys of this.choices which should either be "a", "b" or "c" then it gets the corresponding class the that letter then sets the text content with its value
    for (let key in this.choices) {
      document.querySelector(`.${key}`).textContent = this.choices[key];
    }
  }
  //   returns true or false depending on whether the chosen answer is the correct answer or not
  checkAnswer(letter) {
    let chosenAnswer = this.choices[letter];
    console.log(chosenAnswer);
    if (this.correctAnswer === chosenAnswer) {
      return true;
    } else if (this.correctAnswer !== chosenAnswer) {
      this.selectedAnswer = chosenAnswer;
      return false;
    } else if (!chosenAnswer) {
      this.selectedAnswer = chosenAnswer;
      return false;
    }
  }
}
