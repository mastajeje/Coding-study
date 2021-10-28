array1 = [0, 3, 4, 31];
array2 = [4, 6, 30];
// Expected output [0,3,4,4,6,30,31]

const mergeSort = (array1, array2) => {
  console.log([...array1, ...array2].sort((a, b) => a - b));
};

mergeSort(array1, array2);

const obj = { 1: "a", 2: "b" };
