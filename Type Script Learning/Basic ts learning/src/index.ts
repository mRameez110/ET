// --- > Why TypeScript <---

// Type script provide static type checking

// let user = { name: "rameez", age: 24 };

// let email = user.email; // in ts it error but valid in js

// let sales = 123_456_789;
// let course: string = "TypeScript Course";
// let isBeginner: boolean = true;
// let isPublished;

// function render(something: any) {
//   console.log(something);
// }

// let numbersArray = [1, 2];
// numbersArray.forEach((n) => {
// 	console.log(n.toLocaleString());
// });
// console.log(numbersArray);

// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }

// let mySize: Size = Size.Medium;
// console.log(mySize);

// ---->  Functions in TypeScript <----

// ---->  Functions in TypeScript <----

// function calculateTax(income: number, year: string): number {
//   console.log(
//     "this is tax calculate function and income is: " +
//       income +
//       " and year is: " +
//       year
//   );

//   income = 1000;
//   year = "2025";
//   return income;
// }

// let res = calculateTax(22, "2k25");
// console.log(res);

// ---->  Objects in TypeScript <----

// const employee: { id: number; name: string; age?: number } = {
//   id: 3,
//   name: "",
// };

// const employee: { id: number; name: string; [key: string]: any } = {
//   id: 3,
//   name: "",
// };

// employee.age = 24;
// console.log(employee);

// ---->  Type Alias in TypeScript <----

// type Employee = {
//   id: number;
//   name: string;
// };

// // use type alias here
// let employee: Employee = {
//   id: 2,
//   name: "John",
// };

// ---->  Union Types in TypeScript <----

// let unionTypeExample: number | string;
// unionTypeExample = 22;
// unionTypeExample = "22kg";
// console.log(typeof unionTypeExample);

// let score: string | number;
// score = 40;
// console.log(typeof score);
