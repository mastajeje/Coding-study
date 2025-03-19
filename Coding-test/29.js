function solution(enroll, referral, seller, amount) {
  var answer = [];
  const pyramidObj = {};
  const profit = {};
  for (let i = 0; i < enroll.length; i++) {
    pyramidObj[enroll[i]] = referral[i];
    profit[enroll[i]] = 0;
  }

  for (let i = 0; i < seller.length; i++) {
    let sales = amount[i] * 100;
    let currName = seller[i];

    while (currName != "-" && sales > 0) {
      const distribute = Math.floor(sales * 0.1);

      profit[currName] += sales - distribute;

      //   move up the pyramid
      currName = pyramidObj[currName];
      sales = distribute;
    }
  }

  return enroll.map((person) => profit[person]);
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
);
