function printSubArrays(arr, start, end)
{
    if (end == arr.length){
        return;
    } else if (start > end) {
        printSubArrays(arr, 0, end + 1);
    } else {
        console.log(`Start: ${start}, End: ${end}`)
        for(var i = start; i < end; i++)
        {
            console.log(i, arr[i]);
        }
         
        console.log(end, arr[end]);
        console.log('-------------------------------------')
        printSubArrays(arr, start + 1, end);
    }
    return;
}
 
// Driver code
var arr = [-2,1,-3,4,-1,2,1,-5,4];
printSubArrays(arr, 0, 0);