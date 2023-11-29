function selectionSort(arr) {
    let min, temp, jMin
    for(let i = 0; i < arr.length;i++) {
        min = arr[i]
        for(let j = i;j < arr.length;j++) {
            if(arr[j] < min){ 
                min = arr[j]
                jMin = j
            }
        }
        if(arr[i] > min){
            temp = arr[i]
            arr[i] = min
            arr[jMin] = temp
        }
        console.log(min, jMin, arr)
    }
    console.log(arr)
}

// selectionSort([35, 48, 29, 8])
selectionSort([19, 44, 38, 5, 47, 15])