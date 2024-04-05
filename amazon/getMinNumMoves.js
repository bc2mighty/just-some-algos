function getMinNumMoves(blocks) {
    let minValue = Math.min(...blocks)
    let minValueIndex = blocks.indexOf(minValue);
    let maxValue = Math.max(...blocks)
    let maxValueIndex = blocks.indexOf(maxValue);
    let maxSwaps = 0;
    
    if(maxValueIndex < minValueIndex) {
        maxSwaps = blocks.length - maxValueIndex - 2;
    } else {
        maxSwaps = blocks.length - 1 - maxValueIndex;
    }
    return maxSwaps + minValueIndex
}

// console.log(maxSwaps + minValueIndex, minValueIndex, maxValueIndex, maxSwaps);
let blocks = [3, 7, 4, 10, 2, 8]
console.log(getMinNumMoves(blocks))
// let newBlock = [2, 4, 3, 1, 6], [2, 4, 6, 1, 3] --> 1, 2, 4, 6, 3, [3, 7, 4, 10, 2, 8]