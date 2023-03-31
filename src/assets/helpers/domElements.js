// creates and returns a the whole component for the correctAnswer item that is displayed at the end of the test in overview

export const correctAnswerItem = (question, answer) => {
  // create the elements
  let list = document.createElement("div");
  let listItem = document.createElement("div");
  let questionEl = document.createElement("p");
  let span = document.createElement("span");
  let code = document.createElement("code");
  // give all the elements the correct classNames
  list.className = "correct-answers-list";
  listItem.className = "correct-answers-list--item";
  questionEl.className = "correct-answers-question";
  span.className = "correct-answers-question--text";
  code.className = "correct-answers-answer";

  //   add content to the elements that need content added

  questionEl.textContent = "Q : ";
  span.textContent = question;
  code.textContent = answer;

  // append everything in the correct order

  questionEl.appendChild(span);
  listItem.appendChild(questionEl);
  listItem.appendChild(code);
  list.appendChild(listItem);

  return list;
};

// creates and returns a the whole component for the wrongAnswerItem item that is displayed at the end of the test in overview
export const wrongAnswerItem = (question, answerSubmitted, correctAnswer) => {
  // create the elements
  let list = document.createElement("div");

  let listItem = document.createElement("div");

  let questionEl = document.createElement("p");

  let wrongText = document.createElement("span");

  let answers = document.createElement("div");

  let answersGivin = document.createElement("div");

  let answersGivinTitle = document.createElement("span");

  let answersSubmitted = document.createElement("code");

  let correctAnswerContainer = document.createElement("div");

  let correctAnswerTitle = document.createElement("span");

  let correctAnswerText = document.createElement("code");

  // give all the elements the correct classNames

  list.className = "wrong-answers-list";

  listItem.className = "wrong-answers-list--item";

  questionEl.className = "wrong-answers-question";

  wrongText.className = "wrong-answers-question--text";

  answers.className = "answers";

  answersGivin.className = "wrong-answers-answer-givin";

  correctAnswerContainer.className = "wrong-answers-answer-answer";

  //   add content to the elements that need content added

  questionEl.textContent = "Q : ";
  wrongText.textContent = question;
  answersGivinTitle.textContent = "Answer submitted X";
  answersSubmitted.textContent = answerSubmitted;
  correctAnswerTitle.textContent = "Correct answer :";
  correctAnswerText.textContent = correctAnswer;

  // append everything in the correct order

  questionEl.appendChild(wrongText);

  answersGivin.appendChild(answersGivinTitle);
  answersGivin.appendChild(answersSubmitted);
  correctAnswerContainer.appendChild(correctAnswerTitle);
  correctAnswerContainer.appendChild(correctAnswerText);

  answers.appendChild(answersGivin);
  answers.appendChild(correctAnswerContainer);

  listItem.appendChild(questionEl);
  listItem.appendChild(answers);

  list.appendChild(listItem);

  return list;
};
// creates and returns a the whole component for the highescore item that is displayed at the highscores page
export const highscoreUser = (name, score, rank) => {
  // create the elements

  let highScoreUserContainer = document.createElement("div");
  let highScoreRank = document.createElement("div");
  let highScoreUserName = document.createElement("div");
  let highScore = document.createElement("div");

  //   add content to the elements that need content added
  highScoreUserContainer.className = "highscore-user";
  highScoreRank.className = "highscore-rank";
  highScoreUserName.className = "highscore-user-name";
  highScore.className = "highscore-user-score";

  // append everything in the correct order
  highScoreRank.textContent = rank;
  highScoreUserName.textContent = name;
  highScore.textContent = score;
  highScoreUserContainer.appendChild(highScoreRank);
  highScoreUserContainer.appendChild(highScoreUserName);
  highScoreUserContainer.appendChild(highScore);
  return highScoreUserContainer;
};
