function maxSubArray(array) {
    let min = 0, max = array.length -1
    let resultRange = [min, max]
    let maxSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    let currentSum = maxSum

    while(min < max) {
        let difference1 = currentSum - array[min]
        let difference2 = currentSum - array[max]
        let newSum = 0
        
        if(difference1 > difference2) {
            min++
            newSum = difference1
        } else {
            max--
            newSum = difference2
        }
        if(min === max) break;

        if(maxSum < newSum) {
            maxSum = newSum
            resultRange = [min, max]
        }
        
        currentSum = newSum
    }

    console.log(`resultRange: ${resultRange} and sub array = ${array.slice(resultRange[0], resultRange[1] + 1)}`)
}

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
maxSubArray([1])
maxSubArray([5,4,-1,7,8])