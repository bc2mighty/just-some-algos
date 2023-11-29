function fibonacci(n) {
    let fibSeries = [0, 1]
    let nextSum = 0
    let nextIndex = 2

    function helper(index) {
        if(index === n + 1) return
        nextSum = fibSeries[index - 1] + fibSeries[index - 2]
        fibSeries.push(nextSum)
        helper(index + 1)
    }

    helper(nextIndex)

    return fibSeries;
}

const series = fibonacci(14)
console.log(series)