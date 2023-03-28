// Question class with constructor params of ( question , choices[] )
export class Question {
  constructor(question, choices) {
    // set letters to empty array
    this.letters = [];
    this.question = question;
    // randomize letters and push to letters
    this.randomizeLetters();
    // create an object with the choices array and give it random letter as the key. first choice is always correct so we randomize the choice letter
    this.choices = choices.map((choice, i) => ({
      [this.letters[i]]: choice,
    }));
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
    // set this.letters to the allLetters array
    this.letters = [...allLetters];
  }
}
