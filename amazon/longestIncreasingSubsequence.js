function lengthOfLIS(nums) {
    let dp = new Array(nums.length).fill(1)
    for(let i = 1; i <= nums.length;i++){
        for(j = i;j >= 0;j--) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    console.log(dp);
    console.log(Math.max(...dp))
}
lengthOfLIS([10,9,2,5,3,7,101,18])