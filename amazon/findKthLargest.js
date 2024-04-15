function findKthLargest(nums, k) {
    let numsObj = {}
    for(let n of nums) {
        isNaN(numsObj[n]) ? numsObj[n] = 1 : numsObj[n] += 1
    }
    let reversedKeys = Object.keys(numsObj).map(key => Number(key)).reverse()
    return reversedKeys[k - 1];
    // console.log(reversedKeys[k - 1]);
}
findKthLargest([3,2,1,5,6,4], 2)
findKthLargest([3,2,3,1,2,4,5,5,6], 4)