'use strict'


function myPop (oldArr) {
    const len = oldArr.length -1;
    let newArr = new Array(len);
    
    for (let i = 0; i < len; i++) {
        newArr[i] = oldArr[i];
    }
    
    return newArr;
}

function myPush (oldArr, someValue) {
    const len = oldArr.length;
    let newArr = new Array(len + 1);

    for (let i = 0; i < len; i++) {
        newArr[i] = oldArr[i];
    }

    newArr[newArr.length-1] = someValue;

        return newArr;
}

function myUnshift (oldArr) {
    const len = oldArr.length -1;
    let newArr = new Array(len);

    for (let i = 0; i < len; i++) {
        newArr[i] = oldArr[i+1];
    }
    
    return newArr;
}

function myShift (oldArr, someValue) {
    const len = oldArr.length;
    let newArr = new Array(len + 1);
    newArr[0] = someValue;

    for (let i = 0; i < len; i++) {
        newArr[i+1] = oldArr[i];
    }

        return newArr;
}

function myConcat (firstArr, secondArr) {
    const len = firstArr.length + secondArr.length;
    let newArr = new Array(len);
    const firstArrLen = firstArr.length;
    const secondArrLen = secondArr.length;

for (let i = 0; i < firstArrLen; i++) {
    newArr[i] = firstArr[i];
}
for (let i = 0; i < secondArrLen; i++) {
    newArr[firstArrLen + i] = secondArr[i];
}
    return newArr;
}

let someArr = [1,2,3];
console.log(myPop(someArr));
console.log(myPush(someArr,5));
console.log(myUnshift(someArr));
console.log(myShift(someArr, 6));
console.log(myConcat(someArr, [9,8,7,6,5]));



