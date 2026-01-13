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

let copyArray = [];
copyArray[0] = [...array[0]];
