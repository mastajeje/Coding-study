const solution = (arr, target) => {
    const objectInt = {}
    arr.forEach(ele => objectInt[ele]=true)

    const answer = arr.some(ele => {
        if(target-ele === ele)return

        return objectInt[target- ele]
    })

    return answer
}

console.log(solution([1,2,3,4,8],6))
//expected: true

console.log(solution([2,3,5,9], 10))
//expected: false