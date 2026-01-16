// deep copy and shallow copy
// value type: number, string, boolean
// reference types: array, object, function

// 2D
let array = [
    [100, 2, 3],
    [10, 20, 45],
    [3, 56, 88],
];

// let copyArray = array; // shallow copy 

// let copyArray = [];
// copyArray[0] = [...array[0]];
// copyArray[0][0] = 99;

// console.log(array);
// console.log(copyArray);

// let products = [
//     { id: 1, title: "Samsung Mobile A1", price: 50000, colors: ["black", "white"] }
// ];

// let copyProducts = products;  // deep copy ?

// copyProducts[0].price = 40000;

// console.log(products);

// let array2 = [...array];

// array[0] = 99;
// console.log(array);
// console.log(array2);

// deep copy ... 1 level ref data copy
// let product1 = {
//     id: 1,
//     title: "Mobile",
//     price: 50000,
//     colors: ["black", "white"]
// };

// let product2 = {...product1};
// product2.colors = [...product1.colors];

// product2.colors[1] = "red";
// console.log(product1);
// console.log(product2);

// product1.colors.push("green");
// console.log(product1);
// console.log(product2);

// deep copy (...)
// let product1 = {
//     id: 1,
//     title: "Mobile",
//     price: 50000
// };  

// let product2 = {...product1};
// product2.id = 2;
// console.log(product1);
// console.log(product2);

// shallow copy
// let product1 = {
//     id: 1,
//     title: "Mobile",
//     price: 50000
// };

// let product2 = product1;
// console.log(product2);
// product2.id = 2;
// console.log(product1);
// console.log(product2);


let x = 10;
let y = x;
