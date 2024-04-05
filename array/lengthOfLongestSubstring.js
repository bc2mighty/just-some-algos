function lengthOfLongestSubstring(s) {
    let subString = '', count = 0, char = '', strLen = s.length;
    const trimmedStr = s.trim()
    if(!trimmedStr.length && strLen > 0) return 1;
    let usedChar = {};
    let longestSubStrObj = {
        word: null,
        len: 0,
    }
    let longestSubStrArr = [];
    for(let index in s) {
        char = s[index];
        if(usedChar[char]) {
            if(!longestSubStrObj['word']) {
                longestSubStrObj = {
                    word: subString,
                    len: count,
                }
            } else if(longestSubStrObj['word'] && longestSubStrObj['len'] < count){
                longestSubStrObj['word'] = subString;
                longestSubStrObj['len'] = count;
            }
            count = 1;
            subString = char
            usedChar = {[`${char}`]: true};
        } else if (!usedChar[char]) {
            count++
            subString += char;
            usedChar[`${char}`] = true;
        }
        if(index == strLen - 1) {
            if(!longestSubStrObj['word']) {
                longestSubStrObj = {
                    word: subString,
                    len: count,
                }
            } else if(longestSubStrObj['word'] && longestSubStrObj['len'] < count){
                longestSubStrObj['word'] = subString;
                longestSubStrObj['len'] = count;
            }
        };
    }
    return longestSubStrObj['len'];
}

function checkLongerWords(longestSubStrObj, subString, count) {
    
}

// console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("c"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring(" "));