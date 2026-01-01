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
// array.forEach((x, i) => console.log(x, i));
// array.forEach(x => console.log(x + 5));

// if, loops
// for(let i=0; i < array.length; i++)
//     array[i] = array[i] + 5;

// let marks = 55;
// if(marks < 50 )
//     console.log("F");
// else
//     console.log("D")

// if(marks < 50 )
//     console.log("F");
// else if(marks > 50)
//     console.log("P")


// let marks = 40;
// if(marks > 50)
//     console.log("Pass")
// if(marks > 90)
//     console.log("Scholarship");


let marks = 90;
if(marks > 50){
    console.log("Pass");
    console.log("Congratulations");
}

