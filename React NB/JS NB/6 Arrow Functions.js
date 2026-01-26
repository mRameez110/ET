// let x = [10, 20, 30];
// let y = [23, 445, 55];
// x = y;
// console.log(x);

// scope and life time of variable
// local vs global

// let x = 10;
// function f(i){
//      x = x + i;
//     console.log(x);
//     let x = 90;
// }
// console.log(x);
// f(5);
// console.log(x);

// for(let i=0; i<10; i++){
//     let ans = f(i);
//     console.log(ans);
// }
// console.log(i);

// functional programming

// let array = [10, 20, 30];
// let increment = function(x){
//     return x * 2;
// }
// let copyArr = array.map(increment);
// console.log(copyArr);

// let array = [10, 20, 30];
// let increment = x => x * 2;
// let copyArr = array.map(increment);
// console.log(copyArr);


// let array = [10, 20, 30];
// let copyArr = array.map(x => x * 2);
// copyArr[0] = 99;
// console.log(array);
// console.log(copyArr);

    // Anonymous function

// let f = function(x, y){
//     return x + y;
// }
// let ans = f(10, 20);
// console.log(ans);

// functions

// arrow
// (x, y) => x + y;
// x => x + 1;
// () => 42;
// () => console.log("hello");
// _ => console.log("hello")


// (x, y) => {
//     return x + y;
// }

// (x, y) => {
//     let ans = x + y;
//     console.log(ans);
// }

// (x, y) => {
//     x++;
//     y++;
//     if(x > y)
//         return x + y;
//     else
//         return x - y;
// }



// let f = () => [10, 20, 30];
// console.log(f());

// let g = () => ({id: 1, title: "LED"});
// let obj = g();
// console.log(obj);

let sum = (x, y) => x + y;

