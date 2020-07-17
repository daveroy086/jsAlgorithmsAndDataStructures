function sameFrequency(num1, num2){

    let len1 = Math.max(Math.floor(Math.log10(Math.abs(num1))), 0) + 1;
    let len2 = Math.max(Math.floor(Math.log10(Math.abs(num2))), 0) + 1;

    if(len1 != len2){
        return false;
    }

    //create the objects for each string
    var objectOne = {};
    let sOneLength = len1;
    let string1 = num1.toString();
    for (let i = 0; i < sOneLength; i ++){
        if (objectOne.hasOwnProperty(string1[i])){
            objectOne[string1[i]]++;
        }else{
            objectOne[string1[i]] = 1;
        }
    }//end for i

    var objectTwo = {};
    let sTwoLength = len2;
    let string2 = num2.toString();
    for (let j = 0; j < sTwoLength; j ++){
        if (objectTwo.hasOwnProperty(string2[j])){
            objectTwo[string2[j]]++;
        }else{
            objectTwo[string2[j]] = 1;
        }
    }//end for j

    // compare them
    var keysOne = Object.keys(objectOne);
    let keysOneLength = keysOne.length;
    for(let k = 0; k < keysOneLength; k++){
        if(!(objectTwo.hasOwnProperty(keysOne[k]) && objectOne[keysOne[k]] == objectTwo[keysOne[k]])){
            return false;
        }
    }
    return true;
    
}//end sameFrequency()

// Tests:
//console.log(sameFrequency(182,281)); // true
//console.log(sameFrequency(34,14)); // false
//console.log(sameFrequency(3589578, 5879385)); // true
//console.log(sameFrequency(22,222)); // false

/*
Instructions:
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
*/