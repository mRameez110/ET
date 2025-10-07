// 1. Sum of Array Elements
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach((ele) => {
//   sum = sum + ele;
// });
// console.log(sum);

// 2. Find the Largest Number in an Array
// let arr = [5, 10, 15, 20];
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// 5. Remove Duplicates from Array
// let arr = [1, 2, 2, 3, 4, 5, 5, 6];
// const tracked = [];
// const uniqArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!tracked.includes(arr[i])) {
//     uniqArr.push(arr[i]);
//     tracked.push(arr[i]);
//   }
// }
// console.log(uniqArr);

// Method#2: To remove Duplicate from Array

// const removeDuplFunc2 = (arr) => {
//   let uniqueArr = new Set(arr);
//   console.log(uniqueArr);
//   uniqueArr = [...uniqueArr];
//   console.log(uniqueArr);
// };
// removeDuplFunc2([1, 2, 2, 3, 3, 3]);

// 🧩 6. Left rotate the array by 1 place
// Input: [1, 2, 3, 4] → Output: [2, 3, 4, 1]

// Solution:
// const rotateLeftFunc = (arr) => {
//   let temp = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = temp;
//   return arr;
// };
// console.log(rotateLeftFunc([4, 5, 6, 7, 8]));

// 🧩 7. Merge two arrays manually
// Input: [1, 2] and [3, 4] → Output: [1, 2, 3, 4]

// Solution:
// const mergedArrayFunc = (arr1, arr2) => {
//   let mergedArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     mergedArr.push(arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     mergedArr.push(arr2[i]);
//   }
//   console.log(mergedArr);
// };
// mergedArrayFunc([1, 2], [3, 4]);

// 🧩 8. Find all pairs with a given sum
// Input: [1, 2, 3, 4], target = 5 → Output: [1, 4], [2, 3]

// Solution
const findTargetedSumPairs = (arr, target) => {
  let pairs = [];
  let seen = new Set();
  let complement = 0;
  for (let num of arr) {
    complement = target - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }
  return pairs;
};
let res = findTargetedSumPairs([1, 2, 3, 4], 5);
console.log(res);
