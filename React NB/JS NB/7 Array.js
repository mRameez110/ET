// JS Documentation link
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// array

// let array = [30, 20, 10, 90, 5, 10 , 3, -5];

// let arr2 = [...array];

// array.sort((x, y) => x - y);
// console.log(array);
// console.log(arr2);


// array.sort((x, y) => {
//     if(x < y)
//         return -1;
//     else if(x > y)
//         return 1;
//     else
//         0;
// });

// -1(NEG) LEFT
// +1(POS) RIGHT
// 0 SAME
// console.log(array);


// let array = [30, 20, 10, 90, 5 , 3];
// array.sort();
// console.log(array);

// let array = ["Zubair", "Ali", "Bilal"];
// array.sort();
// console.log(array);


// push and pop operations
// let marks = [];
// marks.push({id: 1, title: "LED TV"});
// marks.push({id: 2, title: "Mobile"});
// marks.pop();
// console.log(marks);

// shift and unshift operations

let marks = [10, 20, 30, 40, 30, 50];

// marks.shift(); // remove first element from array
// marks.unshift(80); // add
// console.log(marks);


// value-based search using filter

let val = 30;
let ans = marks.filter(x => x === val);
console.log(ans);
