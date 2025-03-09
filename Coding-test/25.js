const getCombinations = (arr, r) => {
  if (r === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, r - 1);
    const combined = combinations.map((v) => [fixed, ...v]);
    result.push(...combined);
  });

  return result;
};

const solution = (orders, course) => {
  let result = [];

  course.forEach((numberOfMenu) => {
    let menu = [];
    orders.forEach((order) => {
      const orderArr = order.split("").sort();

      const menuCombis = getCombinations(orderArr, numberOfMenu);
      menu.push(...menuCombis);
    });

    const counter = {};
    for (const m of menu) {
      const key = m.join("");
      counter[key] = (counter[key] || 0) + 1;
    }

    const max = Math.max(...Object.values(counter));
    if (max === 1) return;
    for (const key of Object.keys(counter)) {
      if (counter[key] === max) {
        result.push(key);
      }
    }
  });

  return result.sort();
};

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
//expected: ["AC","ACDE","BCFG","CDE"]
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
//expected: ["WX", "XY"]
