function longestCommonSubsequence(s1, s2) {
    let maxLen = 0, m = s1.length, n = s2.length;
    const matrix = Array.from({ length: m + 1 }, () => (
        new Array(n + 1).fill(0)
    ))
    console.log(matrix);
    for(let i = 1;i <= m;i++){
        for(let j = 1;j <= n;j++){
            if(s1[i - 1] == s2[j - 1]) {
                matrix[i][j] = matrix[i-1][j-1] + 1
                maxLen = matrix[i][j]
            } else {
                matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j-1])
            }
        }
    }
    return matrix[m][n]
}

longestCommonSubsequence('abcde','ace')