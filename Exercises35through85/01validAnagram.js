01validAnagram

function validAnagram(stringOne, stringTwo){

    if(stringOne.length != stringTwo.length){
        return false;
    }

    //create the objects for each string
    var objectOne = {};
    let sOneLength = stringOne.length;
    for (let i = 0; i < sOneLength; i ++){
        if (objectOne.hasOwnProperty(stringOne[i])){
            objectOne[stringOne[i]]++;
        }else{
            objectOne[stringOne[i]] = 1;
        }
    }//end for i

    var objectTwo = {};
    let sTwoLength = stringTwo.length;
    for (let j = 0; j < sTwoLength; j ++){
        if (objectTwo.hasOwnProperty(stringTwo[j])){
            objectTwo[stringTwo[j]]++;
        }else{
            objectTwo[stringTwo[j]] = 1;
        }
    }//end for j

    // compare them
    var keysOne = Object.keys(objectOne);
    var keysOneLength = keysOne.length;
    for(let k = 0; k < keysOneLength; k++){
        if(!(objectTwo.hasOwnProperty(keysOne[k]) && objectOne[keysOne[k]] == objectTwo[keysOne[k]])){
            return false;
        }
    }
    return true;

}//end validAnagrams()

//Tests:

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram("rat","car"); // false)); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true

/*
Instruvtions:
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
Note: You may assume the string contains only lowercase alphabets.
*/