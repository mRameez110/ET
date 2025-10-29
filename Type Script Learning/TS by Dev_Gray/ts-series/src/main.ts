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

// const add = (a: number, b: number): number => {
//   return a + b;
// };
// console.log(add(5, 7)); // 12

// const message = (msg: any): void => {
//   return msg;
// };
// console.log(message);

5; //   ----> Lesson 5 (Assertions in TS)

// let x: string = "123";
// let y = x as unknown as number;
// console.log(y);

// type One = string;
// type Two = string | number;
// type Three = "hello";

// let a: One = "hello"; // More specific
// let c = a as Three; // More specific

// let b = a as Two; // Less specific
// // instead of 'as' we also use angle bracket <> for casting
// let d = <Two>a; //  equivalent to  let d = a as Two

6; //   ----> Lesson  (Index Signature in TS)

interface Person {
  name: string;
  age: number;
}

interface Person2 {
  name: string;
  age: number;
  [key: string]: string | number; // Index signature allows any other property with string keys
}

// const john: Person = {
//   name: "John",
//   age: 25,
//   city: "New York", // This is not allow
//   country: "USA",
// };

const john2: Person2 = {
  name: "John",
  age: 25,
  city: "New York", // This is allowed due to the index signature
  country: "USA",
};
console.log(john2);

7; //   ----> Lesson 7 (Generics in TS)

// function createPair<S, T>(v1: S, v2: T): [S, T] {
//   return [v1, v2];
// }
// console.log(createPair<string, number>("hello", 42));

// function createPair<S = string, T>(v1: S, v2: T): [S, T] {
//   return [v1, v2];
// }
// console.log(createPair<string, number>("hello", 42));

// const stringEcho = (arg: string): string => arg;
// const echo = <T>(arg: T): T => arg;

// console.log(stringEcho("Rameez"));
// console.log(echo("Rameez"));
// console.log(echo(true));

// Generic vs Any vs Union Functions

8; //   ----> Lesson 8 (Generic vs Any vs Union Functions

// function identityOne(val: boolean | number): boolean | number {
//   return val;
// }

// function identityTwo(val: any): any {
//   return val;
// }

// function identityThree<T>(val: T): T {
//   return val;
// }
// console.log(identityOne(true));
// console.log(identityTwo(24));
// console.log(identityThree("Rameez"));


3; //   ----> Lesson 3 (Array & Objects in TS)
3.2; // Objects in TS(Lesson 3.2)
4; //   ----> Lesson 4 (Funtions in TS)
5; //   ----> Lesson 5 (Assertions in TS)
6; //   ----> Lesson 6 (Index Signature in TS)
7; //   ----> Lesson 7 (Generics in TS)
