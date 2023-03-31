// creates a function that takes an array, starting index, and ending index

export const sortScore = (arr, start, end) => {
  // if the starting index is greater or equal to the end index the we return
  if (start >= end) {
    return;
  }
  // calls the partition function that takes in the starting index, and ending index and sets it to index which is what is returned from the partition function
  let index = partition(arr, start, end);

  // we call sortScore on itself but we decrement the index that is returned from partition
  sortScore(arr, start, index - 1);
  // we call sortScore on itself but we increment the index that is returned from partition
  sortScore(arr, index + 1, end);
};
const partition = (arr, start, end) => {
  // set the pivot point index to the start
  let pivotIndex = start;
  // access the pivot point value to the last item's score
  let pivotValue = arr[end].score;

  // loop through array until we find a value that is greater than the pivot's value then we swap those two items after that we increment the pivotIndex by 1
  for (let i = start; i < end; i++) {
    if (arr[i].score > pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  // after the loop is done we swap the pivot item with the end item
  swap(arr, pivotIndex, end);
  return pivotIndex;
};

// swap function that swaps two array items
const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
