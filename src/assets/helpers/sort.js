export const sortScore = (arr, start, end) => {
  if (start >= end) {
    return;
  }
  let index = partition(arr, start, end);
  sortScore(arr, start, index - 1);
  sortScore(arr, index + 1, end);
};
const partition = (arr, start, end) => {
  let pivotIndex = start;
  let pivotValue = arr[end].score;
  for (let i = start; i < end; i++) {
    if (arr[i].score > pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(arr, pivotIndex, end);
  return pivotIndex;
};
const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
