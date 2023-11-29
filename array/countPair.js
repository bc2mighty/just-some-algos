function countPairForLoop(arr, k) {
    let count = 0;
    const arrToString = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            let subArrayString = [arr[i], arr[j]].toString();

            if(arr[i] + k === arr[j]){
                if (arrToString.indexOf(subArrayString) < 0){ 
                    arrToString.push([arr[i], arr[j]].toString())
                    count += 1
                    continue
                }
            }
        }
    }

    return count;
}

function countPair(arr, k) {

    let arrToString = [];
    let count = 0;

    function countPairRecursion(arr, i, pivot) {
        if(pivot === arr.length) return
        i += 1;
        
        if (i === arr.length){ 
            i = 0;
            pivot += 1
        }

        if(arr[pivot] + k === arr[i]){
            let subArrayString = [arr[pivot], arr[i]].toString();
            if (arrToString.indexOf(subArrayString) < 0){ 
                arrToString.push([arr[pivot], arr[i]].toString())
                count += 1
            }
        }
        countPairRecursion(arr, i + 1, pivot)
    }
    countPairRecursion(arr, 0, 0);
    return count;
}

console.log(countPair([1, 1, 1, 2], 1));
console.log(countPair([1, 2, 3, 4, 5, 6], 2));