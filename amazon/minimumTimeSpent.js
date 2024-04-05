function minimumTimeSpent(comedyReleaseTime, comedyDuration, dramaReleaseTime, dramaDuration) {
    // check comedy release time combination with drama release time
    const comedyLfTime = getLeastFinishingTime(comedyReleaseTime, comedyDuration, dramaReleaseTime, dramaDuration);

    // check drama release time combination with comedy release time
    const dramaLfTime = getLeastFinishingTime(dramaReleaseTime, dramaDuration, comedyReleaseTime, comedyDuration);

    return comedyLfTime > dramaLfTime ? dramaLfTime : comedyLfTime;

    // helper function 1
    function getLeastFinishingTime(arr1, arr2, arr3, arr4) {
        let lfTime = arr1[0] + arr2[0], newLfTime = lfTime + arr4[0];
        for(let i = 0;i < arr1.length;i++) {
            if(lfTime > arr1[i] + arr2[i]) {
                lfTime = arr1[i] + arr2[i];
            }
            
            if(arr3[i] + arr4[i] < lfTime) continue
            if(lfTime + arr4[i] < newLfTime) {
                newLfTime = lfTime + arr4[i];
            }
        }
        return newLfTime
    }
    
    // helper function 2


    // helper functions
    function getLeastFinishingTime2(arr1, arr2, arr3, arr4) {
        let lfTime = arr1[0] + arr2[0], lfTimeIndex = 0;
        for(let i = 0;i < arr1.length;i++) {
            if(lfTime > arr1[i] + arr2[i]) {
                lfTime = arr1[i] + arr2[i];
                lfTimeIndex = i;
            }
        }
        let newLfTime = lfTime + arr4[0];
        for(let i = 0;i < arr3.length;i++) {
            if(arr3[i] + arr4[i] < lfTime) continue
            if(lfTime + arr4[i] < newLfTime) {
                newLfTime = lfTime + arr4[i];
            }
        }
        return newLfTime
    }
}

const leastFinishingTime = minimumTimeSpent(
    [1, 4],
    [3, 2],
    [5, 2],
    [2, 2]
)
console.log(leastFinishingTime);