// const array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array = [2, 1, 1, 2, 3, 5, 1, 2, 4];

// Brute Force
const firstRecurring = (array) => {
  const recurringIndex = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        recurringIndex.push(j);
      }
    }
  }
  return Math.min(...recurringIndex);
};
// Brute Force way doesn't work properly on certain cases

const firstRecurring2 = (array) => {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]]) {
      return array[i];
    } else {
      map[array[i]] = true;
      console.log(map);
    }
  }
  return undefined;
};

console.log(firstRecurring(array));
