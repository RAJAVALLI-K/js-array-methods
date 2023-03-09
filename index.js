//push method
let marks = [90, 20, 30, 50];
marks.push(20, 70, 90);
console.log(marks);

// pop method

let array = [20, 56, 78, 34, 90];
// console.log(array.pop());
var val = array.pop();
console.log(array);
console.log(val);

//shift method

let arrays = [20, 56, 78, 34, 90, 45];
// arrays.shift();
// console.log(arrays);
var val = arrays.shift();
console.log(arrays);
console.log(val);

//unshift method

let arrays1 = [1, 2, 3];
arrays1.unshift(4, 5, 6);
console.log(arrays1);

// argument la variable pass pani method la expression using

let num = [1, 2, 3, 4, 89, 90];
let arry = 20;
num.push(arry > 10);
console.log(num);

// two array using merge array

let num1 = [1, 2, 3, 4, 89, 90];
let arry1 = [1, 7, 9, 0];
    num1.push(arry1);
console.log(num1);

//using for loop

let num3 = [1, 2, 3, 4, 89, 90];
let arry2 = [1, 7, 9, 0];
for (let i = 0; i < arry2.length; i++) {
    //num1.unshift(arry1[i]);
    num3.push(arry2[i]);

}
console.log(num3);

// slice

let num2 = [5, 10, 15, 20, 89, 90];
console.log(num2.slice(2, 5));
//console.log(num2);

//reverse

let arrayValues = [1, 2, -3, 4, 5, 6];
console.log(arrayValues.reverse());

//concat

let fruits = ['apple', 'banana', 'mango', 'orange'];
let fritt = ['pineapple', 'gova'];
let combaine = fruits.concat(fritt);
console.log(combaine);