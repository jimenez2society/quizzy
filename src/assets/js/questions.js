import { Question } from "./Question.js";
// creates an array of questions with answers
const questions = [
  new Question("How do you create an object in javascript?", [
    'let myObject = {name:"Jimmy"}',
    'my_object = {"name","Jimmy"}',
    'myObject = {name:"Jimmy"}',
  ]),
  new Question("How do you create an array in javascript?", [
    'let array = ["name","Jimmy"]',
    'array = [name:"Jimmy"]',
    'let array = {name:"Jimmy"}',
  ]),
  new Question("How do you use a method on an array", [
    "myArray.method()",
    "myArray.call(method)",
    'let array = {name:"Jimmy"}',
  ]),
  new Question("Javascript is a ____ language.", [
    "single threaded",
    "multi-threaded",
    "foriegn",
  ]),
  new Question("How would one create an h1 element in html?", [
    "<h1>Hello world!</h1>",
    "<h1>Hello world!<h1/>",
    "<h1>Hello world!<h1>",
  ]),
  new Question("In html/css an id :", [
    "should be unique to only one element",
    "can be used on multiple elements",
    "is only used for images",
  ]),
  new Question(
    `To select an element with an id in css you would use the ____ selector.`,
    ["#", ".", "$id"]
  ),
  new Question(
    `What is the difference between the "==" and "===" operators in JavaScript?`,
    [
      `The " == " operator is used for loose equality comparison and the "===" operator is used for strict equality comparison`,
      `The " === " operator is used for loose equality comparison and the "==" operator is used for strict equality comparison`,
      `There is no difference`,
    ]
  ),
  new Question(`What is the purpose of the "let" keyword in JavaScript?`, [
    `It is used to declare a block-scoped variable`,
    `It is easier to type than var`,
    `It creates a global variable`,
  ]),
  new Question(`What is a callback function in JavaScript?`, [
    `It is a function that is passed as an argument to another function and is executed inside the function it was passed to`,
    `It is a function that repeats itself until a condition is met`,
    `It is a function that is called immediatly after it is declared`,
  ]),
];
let currentIndex = questions.length,
  randomIndex;

while (currentIndex !== 0) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;
  [questions[currentIndex], questions[randomIndex]] = [
    questions[randomIndex],
    questions[currentIndex],
  ];
}
export default questions;
console.log("logged");
