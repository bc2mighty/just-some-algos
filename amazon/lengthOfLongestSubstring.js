function lengthOfLongestSubstring(s) {
    let isVisited = {}, counter = 0, longestLength = 0, newStartIndex = 0, len = 0;
    const sameChar = [...new Set(s.split(''))].length
    if(sameChar == 1) return sameChar
    while(len < s.length) {
        if(isVisited[s[len]]) {
            console.log(`newStartIndex: ${newStartIndex}, isVisited: ${JSON.stringify(isVisited)}`);
            if(longestLength < counter) longestLength = counter
            len = newStartIndex
            counter = 1
            isVisited = {[`${s[len]}`]: true}
            newStartIndex = 0
            console.log(len);
            len++
            continue
        }

        if(!isVisited[s[len]]) {
            if(!newStartIndex) newStartIndex = Number(len) + 1
            counter++
            isVisited[s[len]] = true
        }
        len++
    }
    if((!longestLength && Object.keys(isVisited).length > 0) || (longestLength && Object.keys(isVisited).length > longestLength)) {
        longestLength = Object.keys(isVisited).length
    }
    console.log(isVisited, longestLength)
}

// lengthOfLongestSubstring("abcabcbb")
// lengthOfLongestSubstring("bbbbb")
lengthOfLongestSubstring("bbtablud")
// lengthOfLongestSubstring(" ")
// lengthOfLongestSubstring("aab")
// lengthOfLongestSubstring("dvdf")
// lengthOfLongestSubstring("dvxydfgh")



/*

    for(let i in s) {
        if(isVisited[s[i]]) {
            console.log(`newStartIndex: ${newStartIndex}, isVisited: ${JSON.stringify(isVisited)}`);
            if(longestLength < counter) longestLength = counter
            i = newStartIndex
            counter = 1
            isVisited = {[`${s[i]}`]: true}
            newStartIndex = 0
            continue
        }

        if(!isVisited[s[i]]) {
            if(!newStartIndex) newStartIndex = Number(i) + 1
            counter++
            isVisited[s[i]] = true
        }
    }
*/