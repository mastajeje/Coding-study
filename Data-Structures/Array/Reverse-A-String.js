// reversing

const str = "Hi my name is JJ nice to meet you";

// my answer
// const reverse = (str) => {
//   if (!str || str.length < 2 || typeof str !== "string") {

//     console.log("Error");
//   }
//   const arr = [];
//   const totalItems = split.length;
//   const split = str.split(" ");
//   for (let i = 0; i < totalItems; i++) {
//     const reversedWord = split[i].split("").reverse();
//     arr[totalItems - i - 1] = reversedWord.join("");
//   }
//   console.log(arr.join(" "));
// };

const reverse2 = (str) => {
  //   console.log(str.split("").reverse().join(""));

  //more ES6 way
  console.log([...str].reverse().join(""));
};

reverse2(str);

// 너무 어렵게 생각할 필요없다.
