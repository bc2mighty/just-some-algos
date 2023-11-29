function mergeTwoSortedArrays(arr1, arr2) {
    let result = []
    let len1 = arr1.length, len2 = arr2.length
    let index1 = 0, index2 = 0
    while(index1 < len1 || index2 < len2) {
        if(!arr1[index1] || arr1[index1] > arr2[index2]) {
            result.push(arr2[index2])
            index2++
        } else if(!arr2[index2] || arr2[index2] > arr1[index1]) {
            result.push(arr1[index1])
            index1++
        }
    }
    return result
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return mergeTwoSortedArrays(left, right)
}