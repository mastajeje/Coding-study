//1차 풀이
function solution(id_list, report, k) {
  const answer = new Array(id_list.length).fill(0);
  const reportObj = {};

  report.forEach((item) => {
    const [reporter, reported] = item.split(" ");
    reportObj[reported] = reportObj[reported]
      ? [...reportObj[reported], reporter]
      : [reporter];
  });

  for (const reported in reportObj) {
    const reportSet = new Set(reportObj[reported]);
    if (reportSet.size >= k) {
      const reportArr = [...reportSet];
      reportArr.forEach((user) => {
        const userIndex = id_list.indexOf(user);
        answer[userIndex] += 1;
      });
    }
  }

  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
// expected: [2,1,1,0]

console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 1)
);
// expected: [0,1]
