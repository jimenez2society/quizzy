export const correctAnswerItem = (question, answer) => {
  let list = document.createElement("div");
  let listItem = document.createElement("div");
  let questionEl = document.createElement("p");
  let span = document.createElement("span");
  let code = document.createElement("code");
  list.className = "correct-answers-list";
  listItem.className = "correct-answers-list--item";
  questionEl.className = "correct-answers-question";
  span.className = "correct-answers-question--text";
  code.className = "correct-answers-answer";

  //   add content

  questionEl.textContent = "Q : ";
  span.textContent = question;
  code.textContent = answer;

  questionEl.appendChild(span);
  listItem.appendChild(questionEl);
  listItem.appendChild(code);
  list.appendChild(listItem);

  return list;
};
export const wrongAnswerItem = (question, answerSubmitted, correctAnswer) => {
  // set classes
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

  //   add classes
  list.className = "wrong-answers-list";

  listItem.className = "wrong-answers-list--item";

  questionEl.className = "wrong-answers-question";

  wrongText.className = "wrong-answers-question--text";

  answers.className = "answers";

  answersGivin.className = "wrong-answers-answer-givin";

  correctAnswerContainer.className = "wrong-answers-answer-answer";

  //   add content

  questionEl.textContent = "Q : ";
  wrongText.textContent = question;
  answersGivinTitle.textContent = "Answer submitted X";
  answersSubmitted.textContent = answerSubmitted;
  correctAnswerTitle.textContent = "Correct answer :";
  correctAnswerText.textContent = correctAnswer;
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
