function lengthOfLIS(nums, k) {
    console.log(`Starts checking for ${nums}`);
    let min = 0, max = nums.length - 1, loopCounter = 0, difference = 0, currentLen = 0, totalLen = 0, arr = [nums[0]];
    while(loopCounter <= nums.length) {
        console.log(`min: ${min}, max: ${max}`);
        if(min >= nums.length) break
        if(min == max) {
            // console.log(`currentLen: ${currentLen}`);
            if(currentLen > totalLen) totalLen = currentLen
            currentLen = 0
            loopCounter++;
            min = loopCounter
            max = nums.length - 1
            continue
        }
        if(nums[min] > nums[max] || nums[max] - nums[max - 1] > k || nums[min] == nums[max]){ 
            max--
            continue
        }
        difference = nums[max] - nums[max -1]
        if(difference <= k) {
            currentLen++
            max--
        }
        if(currentLen == 3) {
            console.log(`currentLen min: ${min}, max: ${max}`);
            // break
        }
    }
    console.log(totalLen);
}
// lengthOfLIS([1,100,500,100000,100000], 100000)
// lengthOfLIS([4,2,1,4,3,4,5,8,15], 3)
lengthOfLIS([7,4,5,1,8,12,4,7], 5)
// lengthOfLIS([1,5], 1)

    /*
    var arr = nums, difference = k, newSequence, sequenceDifference, longestSubsequence = 0, lastItem, sequenceCounter = 1;
    let i = 0;
    while(i < arr.length) {
        lastItem = nums[i]
        iterativeFind(i, i + 1, i)
        break;
        // recursiveFind(i, i + 1, i)
        i++
    }

    function iterativeFind(startIndex, currentIndex, startIndexCounter) {
        while(startIndexCounter < arr.length) {
            if(currentIndex >= arr.length) {
                if(longestSubsequence < sequenceCounter) longestSubsequence = sequenceCounter
                sequenceCounter = 1
                lastItem = nums[startIndex]
                startIndexCounter += 1
                currentIndex = startIndexCounter + 1
            }
            sequenceDifference = nums[currentIndex] - lastItem
            if(nums[currentIndex] > lastItem && sequenceDifference <= difference) {
                sequenceCounter++
                lastItem = nums[currentIndex];
            }
            currentIndex++
        }
    }

    function recursiveFind(startIndex, currentIndex, startIndexCounter) {
        if(startIndexCounter >= arr.length) return false
        if(currentIndex >= arr.length) {
            if(longestSubsequence < newSequence.length) longestSubsequence = newSequence.length
            newSequence = [nums[startIndex]]
            startIndexCounter += 1
            currentIndex = startIndexCounter + 1
        }
        sequenceDifference = nums[currentIndex] - newSequence[newSequence.length - 1]
        if(nums[currentIndex] > newSequence[newSequence.length - 1] && sequenceDifference <= difference) {
            newSequence.push(nums[currentIndex]);
        }
        recursiveFind(startIndex, currentIndex + 1, startIndexCounter)
    }
    console.log(longestSubsequence);
    */

































// {
//     var longestLength = 0;
//     let counter = 0, longestSubsequence = 0, currentLen = 0, subSequences = [], newSequence = nums[0];
//     // currentLen = numsRecursion(nums, 2, 3, k, [1], 0, subSequences);
//     numsRecursion(nums, 2, 3, k, 3, 0, [1]);
//     function numsRecursion(nums, currIdx, startIdx, difference, loopIndex, totalLength, newSequence) {
//         // if(startIdx >= nums.length) return
//         if(loopIndex >= nums.length){
//             if(totalLength > longestLength) longestLength = totalLength
//             console.log('Finally here: ', loopIndex);
//             return false
//         }
//         console.log('startIdx: ', startIdx);
//         if(startIdx >= nums.length && loopIndex < nums.length) {
//             loopIndex = loopIndex + 1
//             startIdx = loopIndex
//             totalLength = 0
//             newSequence = [nums[startIdx]]
//             console.log('loopIndex: ', loopIndex);
//             numsRecursion(nums, currIdx, startIdx, difference, loopIndex, newSequence)
//         }
//         if(typeof newSequence === undefined) console.log(newSequence);
//         // if(nums[startIdx] > newSequence[newSequence.length - 1] && nums[startIdx] - newSequence[newSequence.length - 1] <= k) {
//         //     newSequence.push(nums[startIdx])
//         //     totalLength += 1
//         // }
//         numsRecursion(nums, currIdx, startIdx + 1, difference, loopIndex, newSequence)
//     }
//     console.log(longestLength);
//     // while(counter < nums.length) {
//     //     console.log("Starting recursion from ", counter);
//     //     let newSequence = [nums[counter]];
//     //     currentLen = numsRecursion(nums, 2, 3, k, newSequence, 0, subSequences);
//     //     console.log(newSequence);
//     //     // break
//     //     counter++
//     // }
//     // function numsRecursion(nums, currentIndex, startIndex, difference, newSequence, loopCounter, subSequences) {
//     //     if(newSequence.length == 1){
//     //         console.log('right here');
//     //         loopCounter = startIndex
//     //     }
//     //     if(startIndex > nums.length) {
//     //         console.log(loopCounter);
//     //         // subSequences.push(newSequence.length)
//     //         if(loopCounter >= nums.length) return
//     //         loopCounter = loopCounter + 1
//     //         newSequence = [nums[currentIndex]]
//     //         numsRecursion(nums, currentIndex, loopCounter, difference, newSequence, loopCounter, subSequences)
//     //     }
//     //     if(nums[startIndex] > newSequence[newSequence.length - 1] && nums[startIndex] - newSequence[newSequence.length - 1] <= k) {
//     //         newSequence.push(nums[startIndex])
//     //     }
//     //     numsRecursion(nums, currentIndex, startIndex + 1, difference, newSequence, loopCounter, subSequences)
//     // }
// }