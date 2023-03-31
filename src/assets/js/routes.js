export const redirect = (path) => {
  console.log(path);
  window.location.pathname = path.pathName;
};
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
