// ES-6: map, filter , forEach

// let marks = [10, 20, 30, 40, 50];
// let arr = marks.map(x => {
//     if(x < 25)
//         return x + 5;
// });
// console.log(arr);

// let ans1 = array.map(x => console.log(x * x));
// console.log(ans1);

// let ans2 = array.forEach(x => x * x);
// console.log(ans2);

let array = [10, 20, 30, 40, 50];

let squareArr = array.map(ahmad => ahmad * ahmad);
console.log(squareArr);

// let mappedArray = array.map(x => x * 1.10);
// console.log(mappedArray);
// console.log(array);

// value based (ES6) - forEach
array.forEach((x, i) => console.log(x, i));
array.forEach(x => console.log(x + 5));
