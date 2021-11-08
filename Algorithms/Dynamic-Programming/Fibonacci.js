// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...

// Using Recursion
// Takes lots of calculations O(2^n)
let myCalculations = 0;
let calculations = 0;
// const fibonacci = (n) => {
//   calculations++;
//   if (n < 2) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// console.log(fibonacci(3), ", calculations:", calculations);

// Using Dynamic Programming
// const myMemoizedFibonacci = () => {
//   let cache = {};
//   return (fib = (n) => {
//     myCalculations++;
//     if (n in cache) {
//       return cache[n];
//     } else if (n < 2) {
//       return n;
//     }
//     const firstFibonacci = fib(n - 2);
//     const secondFibonacci = fib(n - 1);
//     cache[n - 2] = firstFibonacci;
//     cache[n - 1] = secondFibonacci;
//     return firstFibonacci + secondFibonacci;
//   });
// };

// Using Dynamic Programming
// O(n)
const memoizedFibonacci = () => {
  let cache = {};
  return (fibonacci = (n) => {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else if (n < 2) {
      return n;
    } else {
      cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
      return cache[n];
    }
  });
};

// const myMemFibonacci = myMemoizedFibonacci();
const memFibonacci = memoizedFibonacci();

// console.log("my answer", myMemFibonacci(4), myCalculations);
console.log(memFibonacci(100), calculations);
