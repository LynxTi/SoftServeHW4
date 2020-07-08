'use strict'

const fruits = ['Ананас','Яблоко','Банан']

const chars = fruits.reduce((newArr, fruits) => {
    newArr.push(fruits[0]);
    return newArr;
  }, []);

  console.log(chars);


 
  