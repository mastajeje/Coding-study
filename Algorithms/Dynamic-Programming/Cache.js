// let cache = {};
// const memoizedAddTo80 = (n) => {
//   // check if n is in cache object
//   if (n in cache) {
//     return cache[n];
//   } else {
//     // assume next calculation takes long time
//     console.log("long time");
//     cache[n] = n + 80;
//     return cache[n];
//   }
// };

// console.log("1", memoizedAddTo80(5));
// console.log("2", memoizedAddTo80(5));
// console.log("3", memoizedAddTo80(5));

// // save calculation of certain parameter in cache and return that saved value
// // next time same argument has passed

// 클로저를 사용한 예시
const memoizedAddTo80 = () => {
  let cache = {};

  // cache를 함수 내에서 사용하기 위해서 클로저를 사용한 예시다
  return (n) => {
    // check if n is in cache object
    if (n in cache) {
      return cache[n];
    } else {
      // assume next calculation takes long time
      console.log("long time");
      cache[n] = n + 80;
      return cache[n];
    }
  };
};

const memoized = memoizedAddTo80();

console.log("1", memoized(5));
console.log("2", memoized(5));
console.log("3", memoized(6));
