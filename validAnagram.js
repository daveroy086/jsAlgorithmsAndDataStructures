function validAnagram(stringOne, stringTwo){

    //give the parameters names
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
    for(k = 0; k < keysOneLength; k++){
        if(!(objectTwo.hasOwnProperty(keysOne[k]) && objectOne[keysOne[k]] == objectTwo[keysOne[k]])){
            return false;
        }
    }
    return true;

}//end validAnagrams()
    //return the result

console.log(validAnagram("", ""));    // true
console.log(validAnagram("aaz", "azz"));    // false
console.log(validAnagram('anagram', 'nagaram'));//true
console.log(validAnagram('rat', 'car'));    //false
console.log(validAnagram("awesome", "awesom"));    // false
console.log(validAnagram("amanaplanacanalpanama", "amanaplanacanalpanama"));    // true
console.log(validAnagram("qwerty", "qeywrt"));    // true
console.log(validAnagram("texttwistitme", "timetwisttext"));    // true