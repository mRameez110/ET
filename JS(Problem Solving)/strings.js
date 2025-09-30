// ✅ Phase 1: String Practice — Your Own Problems
// 🔰 Level 0: Basic Manual Practice (No Built-ins Like split(), reverse(), etc.)
// Here are 10 beginner-level string questions...

// 🧩 1. Reverse a string manually
// Input: "hello"
// Output: "olleh"

//  Solution
// let revStrFunc = (str) => {
//   let revStr = "";
//   for (const char of str) {
//     revStr = char + revStr;
//   }
//   return revStr;
// };
// console.log(revStrFunc("hello")); // Output: 'olleh'

// 🧩 2. Count vowels in a string
// Input: "programming"
// Output: 3 (o, a, i)

// Solution
// let countVowlFunc = (word) => {
//   let count = 0;
//   const lowerCaseWord = word.toLowerCase();
//   for (const w of lowerCaseWord) {
//     if ("aeiou".includes(w)) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(countVowlFunc("Rameez"));

// 🧩 3. Convert string to uppercase (without .toUpperCase())
// Input: "abcDEF"
// Output: "ABCDEF"

// Solution:

// const convertToUpperCase = (str) => {
//   let upperCaseStr = "";
//   for (const ch of str) {
//     if (ch >= "a" && ch <= "z") {
//       upperCaseStr += String.fromCharCode(ch.charCodeAt(0) - 32);
//     } else upperCaseStr += ch;
//   }
//   return upperCaseStr;
// };

// console.log(convertToUpperCase("Hello"));

// 🧩 4. Check if a string is a palindrome
// Input: "madam"
// Output: true
