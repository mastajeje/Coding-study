const getCombinations = (arr, r) => {
  // 기저 조건 (base case)
  if (r === 1) return arr.map((v) => [v]);
  const result = [];
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combis = getCombinations(rest, r - 1);
    const combined = combis.map((v) => [fixed, ...v]);
    result.push(...combined);
  });

  return result;
};

const solution = (orders, course) => {
  let result = [];

  // get combinations of element in orders
  course.forEach((numberOfMenu) => {
    let menu = [];

    orders.forEach((order) => {
      const splitedOrder = order.split("").sort();
      const menuCombis = getCombinations(splitedOrder, numberOfMenu);
      menu.push(...menuCombis);
    });

    const menuObj = {};

    menu.forEach((item) => {
      const key = item.join("");
      menuObj[key] = (menuObj[key] || 0) + 1;
    });

    const max = Math.max(...Object.values(menuObj));
    if (max === 1) return;
    for (const key in menuObj) {
      if (max === menuObj[key]) result.push(key);
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
