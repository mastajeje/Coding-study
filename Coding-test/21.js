function solution1(want, number, discount) {
  let answer = 0;
  const wishList = {};

  for (i = 0; i < want.length; i++) {
    wishList[want[i]] = number[i];
  }

  for (i = 0; i < discount.length; i++) {
    const discountList = {};

    for (j = 0; j < 10; j++) {
      if (!wishList[discount[i + j]] || wishList[discount[i + j]] === 0) break;
      discountList[discount[i + j]] = discountList[discount[i + j]]
        ? (discountList[discount[i + j]] += 1)
        : 1;
    }

    for (k = 0; k < want.length; k++) {
      if (wishList[want[k]] !== discountList[want[k]]) break;

      if (k === want.length - 1 && wishList[want[k]] === discountList[want[k]])
        answer++;
    }

    // answer++
  }
  return answer;
}

const solution2 = (want, number, discount) => {
  let answer = 0;
  const wantObj = {};
  want.forEach((item, idx) => {
    wantObj[item] = number[idx];
  });

  for (let i = 0; i <= discount.length - 10; i++) {
    // const window = discount.slice(i, i + 10);
    const discount10Obj = {};

    for (let j = i; j < i + 10; j++) {
      discount10Obj[discount[j]] = (discount10Obj[discount[j]] || 0) + 1;
    }

    let isValid = true;
    for (let key in wantObj) {
      if ((discount10Obj[key] || 0) < wantObj[key]) {
        isValid = false;
        break;
      }
    }

    if (isValid) answer++;
  }

  return answer;
};

console.log(
  solution2(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
//expected: 3
