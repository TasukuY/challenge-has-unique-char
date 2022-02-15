// Write your code below

let hasUniqueChars = (str) => {
    let hasUniqueChar = false;
    //split the str into an array
    let strArr = str.split('');
    //check each char and check if there is the same char in the array
    console.log(strArr);
    for(let i = 0; i < strArr.length; i++){
        //first letter to check
        let letterToCheck = strArr[i];
        for(let j = i+1; j < strArr.length; j++){
            if(letterToCheck === strArr[j]){
                hasUniqueChar = true
            }
        }
    }

    return hasUniqueChar;
}

console.log(hasUniqueChars('abcdefghijka'));