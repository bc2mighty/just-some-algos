function bubbleSort(arr) {
    for(let i = arr.length;i > 0;i--) {
        let swap = false;
        for(let j = 0;j < i - 1;j++) {
            if(arr[j] > arr[j + 1]) {
                swap = true
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
        if(!swap) break
    }
    console.log(arr)
}

bubbleSort([35, 48, 29, 8])