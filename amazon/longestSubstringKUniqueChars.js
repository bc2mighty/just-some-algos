function longestSubK(text, k){
    let i = 0, j = 0, charCount, hash = {};
    while(i < text.length) {
        if(!hash[text[i]]){
            text[j] = 1
            charCount += 1
        } else {
            text[j] += 1
        }
        if(charCount > k) {
            i = j
        }

    }

    
}

longestSubK('aabacbebe')