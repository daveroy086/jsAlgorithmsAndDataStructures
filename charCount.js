function charCount(str) {
    var obj = {};
    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)) {    // if is alphanumeric
            if(obj[char] > 0) {
                obj[char]++;
            } else {
                 obj[char] = 1;
            }
        }
    }    // end for
    return obj;
}    // end charCount

console.log(charCount("aba=cab123234"));