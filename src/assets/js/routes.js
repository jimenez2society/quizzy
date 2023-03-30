export const redirect = (path) => {
  console.log(path);
  window.location.pathname = path.pathName;
};
export const homePage = {
  isPath: window.location.pathname === "/index.html",
  pathName: "/index.html",
};
export const quizPage = {
  isPath: window.location.pathname === "/questions.html",
  pathName: "/questions.html",
};
export const overviewPage = {
  isPath: window.location.pathname === "/overview.html",
  pathName: "/overview.html",
};
