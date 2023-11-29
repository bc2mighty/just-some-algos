function insertionSort(arr) {
    for(let i = 1;i < arr.length;i++) {
        let nextItem = arr[i]
        for(let j = 0;j < i;j++) {
            if(nextItem < arr[j]) {
                let temp = arr[j]
                arr[j] = nextItem
                arr[i] = temp
                nextItem = temp
            }
        }
    }
    console.log(arr)
}

// insertionSort([5, 3, 4, 1, 2])
// insertionSort([19, 44, 38, 5, 47, 15])
insertionSort([3, 44, 38, 5, 47, 15])