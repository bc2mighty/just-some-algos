function minTotalSum(bulb, k) {
    const totalSum = bulb.reduce((acc, val) => acc + val, 0);
    let currentSum = totalSum, leftIndex = 0;
    for(let i =0;i < k;i++) {
        currentSum -= bulb[i];
    }
    for(let i = k; i < bulb.length;i++) {
        if(currentSum > currentSum - bulb[k] + bulb[leftIndex]) {
            currentSum = currentSum - bulb[k] + bulb[leftIndex]
        }
        leftIndex++
    }
    return currentSum;
}

let minimumTotalWattage = minTotalSum([4, 9, 2, 10, 3, 5, 3], 3);
console.log(minimumTotalWattage);

minimumTotalWattage = minTotalSum([3, 3, 3, 2, 2, 1, 4, 4], 5);
console.log(minimumTotalWattage);