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

// let anyTypeArr = [];
// anyTypeArr.push(5);
// anyTypeArr.push("a");

// Bind type to empty array

// let typeBindArr: number[] = [];
// typeBindArr.push(5);
// typeBindArr.push("a"); //   ----> Error: Argument of type 'string' is not assignable

// let myTuple: [string, number, boolean] = ["rameez", 24, true];
// myTuple = ["rameez", 24, true, "a"];

// -----    Tuple vs Union type Array   ----

// let unionTypeArrSimilarToMyTuple = ["rameez", 24, true];
// unionTypeArrSimilarToMyTuple = myTuple; // my tuple assigned to union type array
// // but union type array will not assign to my tuple
// myTuple = unionTypeArrSimilarToMyTuple; //   ----> Error: Type '(string | number | boolean)[]' is not assignable to type '[string, number, boolean]'. Target requires 3 element(s) but source may have fewer.ts(2322)

// coclusion: tuple is more strict and specific than union type array

// Objects in TS(Lesson 3.2)

// let myObj: object;
// myObj = []; //   ----> No Error bcz in js array is also object
// myObj = {}; //   ----> No Error bcz in js object is also object

// let exmObj = {
//   name: "Rameez",
//   age: 24,
//   isStudent: true,
// };

// exmObj.age = 23; //   ----> No Error bcz age is number
// exmObj.age = "24"; //   ----> Error: Type 'string' is not assignable to type 'number'.

// type Person = {
//   name: string;
//   age: number;
//   status: (string | number)[];
// };

// let personObj: Person = {
//   name: "Rameez",
//   age: 24,
//   status: ["student", "BSCS", 2024],
// };

4; //   ----> Lesson 4 (Funtions in TS)

const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(5, 7)); // 12
