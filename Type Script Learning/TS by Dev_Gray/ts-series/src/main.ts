//   ----> Basic of TS

// let a = 5;
// let b = "2";
// let c;
// c = a / b;
// console.log(c);

// const sum = (a: number, b: string) => {
//   return a + b;
// };
// console.log(sum(5, "2"));

// let strArr = ["a", "b", "c"];
// let str_numArr = ["a", 2];
// let mixArr = ["a", 3, true];

// strArr[0] = 5;
// strArr.push(5);
// str_numArr[0] = 5; //   ----> No Error bcz type may be string or number
// str_numArr[1] = true; //   ----> Error: Type 'boolean' is not assignable to type 'number'.

let anyTypeArr = [];
anyTypeArr.push(5);
