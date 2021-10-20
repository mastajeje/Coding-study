const numbers = [5, 3, 2, 4, 1, 7, 9, 8, 6];
// const numbers = [2, 1, 4, 3];

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

// Insertion Sort
const insertionSort = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      if (arr[i] < arr[i - 1]) {
        for (let j = 1; j < i; j++) {
          if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
            arr.splice(j, 0, arr.splice(i, 1)[0]);
          }
        }
      }
    }
  }
};

// bubbleSort(numbers);
// selectionSort(numbers);
insertionSort(numbers);
console.log(numbers);
