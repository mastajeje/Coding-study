const getCombinations = (arr, r) => {
  if (r === 1) return arr.map((v) => [v]);
  const result = [];
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // elements excluding fixed element
    const combinations = getCombinations(rest, r - 1); // r - 1 combination of rest elements
    const combined = combinations.map((v) => [fixed, ...v]);
    result.push(...combined);
  });

  return result;
};

console.log(getCombinations([1, 2, 3, 4], 2));
