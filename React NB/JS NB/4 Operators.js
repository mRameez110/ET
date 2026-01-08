// short circuit
// && , F
// || , T

// let ans = 10 > 20 && 110 > 34 && 745 > 9 && 3 < 7

// || logical OR
// T || T = T
// T || F = T
// F || T = T
// F || F = F

// Truthy Expr || whatever = Truthy Expr
// Falsy || Expr = Expr

// let ans = "" || "adasdf";
// console.log(ans);

// (? :) if expression

// let max = x > y ? (x > z ? x : z) : ( y > z ? y : z);
// console.log(max);

// let max = x > y && x;
// console.log(max);

// if(x > y)
//     max = x;
// else
//     max = y;


// let error = true;
// let errorMessage = "Error in loading data";

// if(error === true)
//     console.log(errorMessage);

// <div> error && errorMessage </div>


// logical operators
// &&, ||, !

// let ans = !"";
// console.log(ans);

// let x = false;
// console.log(!!x);

let ans = !!(10 > 5);
console.log(ans);
