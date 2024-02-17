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

function fibonacci_DP(n) {
    console.log(n, n-1, n-2);
    if(n <= 2) return 1;
    return fibonacci_DP(n - 1) + fibonacci_DP(n - 2);
}

const series = fibonacci(14)
console.log(series)
console.log(fibonacci_DP(5));