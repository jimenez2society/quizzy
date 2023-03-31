// a redirect function that takes a path in the parameter and sets the location to that path name
export const redirect = (path) => {
  window.location.pathname = path.pathName;
};

// all of these below are objects that contain a boolean and a string
// the boolean checks if the current path name equals a specified path name
// the string is just the path name
export const homePage = {
  isPath: window.location.pathname === "/index.html",
  pathName: "/index.html",
};
export const quizPage = {
  isPath: window.location.pathname === "/src/pages/questions.html",
  pathName: "/src/pages/questions.html",
};
export const overviewPage = {
  isPath: window.location.pathname === "/src/pages/overview.html",
  pathName: "/src/pages/overview.html",
};
export const highscoresPage = {
  isPath: window.location.pathname === "/src/pages/highscores.html",
  pathName: "/src/pages/highscores.html",
};
