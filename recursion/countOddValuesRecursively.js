function collectOddValues(arr) {
    let result = []
    let i = 0;

    function helper(input) {
        if(i === input.length) return
        if(input[i] % 2 !== 0) result.push(input[i])
        i++
        helper(input)
    }

    helper(arr)
    return result
}

const result = collectOddValues([1,2,3,4,5,6,7,8,9,10,11])
console.log(result)