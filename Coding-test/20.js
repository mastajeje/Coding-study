//완주하지 못한 선수

function solution(participant, completion) {
    const runners = {}
    
    completion.forEach(name => {
        if(runners[name])runners[name]++;
        else{runners[name] = 1}
    })
    
    for(const name of participant){
        if(runners[name] === 0) return name;
        else if(runners[name])runners[name]--
        else{return name}
    }
    
    
}

console.log(solution(["leo", "kiki", "eden"],[ "kiki", "eden"]))
//expected: "leo"

console.log(solution(["mislav", "stanko", "mislav", "ana"],["mislav", "stanko", "ana"]	))
//expected: "mislav"