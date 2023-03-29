import { Question } from "./Question.js";
// creates an array of questions with answers
export const questions = [
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
];
