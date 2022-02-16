// Write your code below

let hasUniqueChars = (str) => {
    let hasUniqueChar = true;
    //split the str into an array
    let strArr = str.split('');
    //check each char and check if there is the same char in the array
    //console.log(strArr);
    for(let i = 0; i < strArr.length; i++){
        //first letter to check
        let letterToCheck = strArr[i];
        for(let j = i+1; j < strArr.length; j++){
            if(letterToCheck === strArr[j]){
                hasUniqueChar = false
            }
        }
    }
    return hasUniqueChar;
}

console.log(hasUniqueChars('Moonday'));

let hasUniqueChars2 = (str) => {
    let hasUniqueChar = false
    const newStr = new Set(str);
    let newArr = [...newStr];
    
    // if(str.length !== newArr.length){
    //     return false;
    // }else{
    //     return true;
    // }

    return str.length === newArr.length;
}

console.log(hasUniqueChars2('Moonday'));