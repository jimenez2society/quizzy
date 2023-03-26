export const beginTimer = () => {
  let timeRemaining = document.querySelector(".time-remaining");
  let timeRemainingText = document.querySelector(".time-remaining--text");
  let degPerSecond = 0;
  let count = 30;
  let testing = true;
  timeRemainingText.textContent = count || 0;
  let timer;
  let degTimer;
  if (testing) {
    timer = setInterval(() => {
      if (count === 0) {
        testing = true;
        timeRemaining.style.background = ` conic-gradient(#43486D ${360}deg, #46dfe5 0deg)`;
        return;
      }
      degPerSecond += 1.2;
      timeRemaining.style.background = ` conic-gradient(#43486D ${degPerSecond}deg, #46dfe5 0deg)`;
    }, 100);
    degTimer = setInterval(() => {
      if (count === 0) {
        testing = true;

        return;
      }
      count--;
      timeRemainingText.textContent = count;
      console.log(count);
    }, 1000);
  } else {
    clearInterval(timer);
    clearInterval(degTimer);
  }
};
export const resetTimer = (timers) => {};
