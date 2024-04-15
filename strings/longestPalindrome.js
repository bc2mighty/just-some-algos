function longestPalindrome(s) {
    let strObject = {}
    for(let i in s) {
        if(strObject[s[i]]){ 
            strObject[s[i]].push(i)
        } else {
            strObject[s[i]] = [i]
        }
    }
    console.log(strObject);
    let reversedS = s.split('').reverse().join('');
    console.log(reversedS);
    let isSaving = false;
    for(let i in reversedS) {
        let currentChar = reversedS[i]
        let nextChar = reversedS[i + 1]
        for(let idx of strObject[nextChar]) {
            
        }
    }
}

// longestPalindrome('babad')
// longestPalindrome('cbbd')
longestPalindrome('agamadamajulia')
// agamadamajulia
// ailujamadamaga

obj = {
    a: [0, 2, 4, 6, 8, 13],
    g: [1],
    m: [3, 7],
    d: [5],
    j: [9],
    u: [10],
    l: [11],
    i: [12],
}

// mamadamaama