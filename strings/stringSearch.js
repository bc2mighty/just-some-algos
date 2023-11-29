function stringSearch(sentence, str) {
    let pointer = 0
    let count = 0
    let str_len = str.length
    while(pointer < sentence.length - str_len + 1) {
        let sub_str = sentence.slice(pointer, pointer + str_len)
        if(sub_str == str){ 
            count++
            pointer += str_len
        } else {
            pointer += 1
        }
    }
    console.log(count)
}

console.log(stringSearch('wowomgzomg', 'omg'))
console.log(stringSearch('harold said haha in hamburg', 'ha'))