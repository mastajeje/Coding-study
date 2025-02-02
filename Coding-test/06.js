//my solution(Big(o) => N^2)
// function solution(N, stages) {
//     var answer = [];

//     for(i = 1; i <= N; i++){
//         let failedPlayer = 0
//         let totalPlayer = 0

//         stages.forEach(stage => {
//             if(stage === i) failedPlayer++
//             if(stage >= i) totalPlayer++
//             if(totalPlayer === 0) return

//         })
//                     answer.push([i,failedPlayer/totalPlayer])

//     }

//     return answer.sort((a,b)=>
//          b[1] -  a[1]).map(stage => stage[0])
// }

const solution = (N, stages) => {
  let result = [];
  //find the number of challengers by stage
  const challengers = new Array(N + 2).fill(0);
  stages.forEach((stage) => {
    challengers[stage]++;
  });

  const fails = {};
  let total = stages.length;

  //find fail ratio(*no challengers === 0 fail ratio)
  for (let i = 1; i <= N; i++) {
    // no challenger
    if (challengers[i] === 0) {
      fails[i] = 0;
      continue;
    }

    fails[i] = challengers[i] / total;

    // distract counted challengers from total
    total -= challengers[i];
  }

  result = Object.entries(fails).sort((a, b) => b[1] - a[1]);
  result = result.map((x) => x[0]);

  // sort result
  return result;
};

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
