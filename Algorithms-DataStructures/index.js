const numbers = [5, 3, 2, 4, 1, 7, 9, 8, 6];
// const numbers = [3, 2, 1];

// Bubble Sort O(n^2)
const bubbleSort = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap numbers
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

// Selection Sort
const selectionSort = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    let minIndex = i;

    // j has to start from i + 1 or else it will always
    // loop thorugh already sorted item
    for (let j = i + 1; j < length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
};

// bubbleSort(numbers);
selectionSort(numbers);
console.log(numbers);
