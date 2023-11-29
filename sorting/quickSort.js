function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        [arr, pivotIndex] = pivotHelper(arr, left, right)
        // left
        quickSort(arr, left, pivotIndex - 1)
        // right
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

function pivotHelper(arr, start, end) {
    let pivot = arr[start]
    let swapIndex = start

    function swap(arr, i, j) {
        let temp = arr[j]
        arr[j] = arr[i];
        arr[i] = temp
    }
    
    for(let i = start + 1;i <= end;i++) {
        if(arr[i] < pivot || arr[i] == pivot) {
            swapIndex++
            swap(arr, i, swapIndex)
        }
    }
    swap(arr, start, swapIndex)
    return [arr, swapIndex]
}

// console.log(pivotHelper([5, 2, 1, 8, 4, 7, 6, 3], 0, 7))
// console.log(quickSort([4, 6, 9, 1, 2, 5,   ]))
console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]))