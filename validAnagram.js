function validAnagram(stringOne, stringTwo){

    //give the parameters names
    if(stringOne.length != stringTwo.length){
        //console.log("false");
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
    console.log(keysOne);
    var keysOneLength = keysOne.length;
    for(k = 0; k < keysOneLength; k++){
        //console.log(" keysOne[k] is ", keysOne[k],
                    ", objectOne is ", objectOne, 
                    ", objectOne[k] is ", objectOne[keysOne[k]], 
                    " and onjectTwo[k] is ", objectTwo[keysOne[k]]);

        if(!(objectTwo.hasOwnProperty(keysOne[k]) && objectOne[keysOne[k]] == objectTwo[keysOne[k]])){
      //      console.log('false');
            return false;
        }
    }
    //console.log('true');
    return true;

}//end validAnagrams()
    //return the result

/* validAnagram("", ""); */
validAnagram("aaz", "azz");//why am i returning true
/* validAnagram('anagram', 'nagaram');//true
validAnagram('rat', 'car');//false
validAnagram("awesome", "awesom");
validAnagram("amanaplanacanalpanama", "aCanalmanplanpanama");
validAnagram("qwerty", "qeywrt");
validAnagram("texttwistitme", "timetwisttext"); */