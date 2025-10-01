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

// const checkPalindromFunc = (str) => {
//   let j = str.length - 1;
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[j]) return false;
//     else j--;
//   }
//   return true;
// };
// console.log(checkPalindromFunc("madam")); // true

// 🧩 5. Find frequency of each character
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }

// const findFreqFunc = (str) => {
//   const frequencyMap = {};
//   for (const ch of str) {
//     frequencyMap[ch] = (frequencyMap[ch] || 0) + 1;
//   }
//   return frequencyMap;
// };
// console.log(findFreqFunc("Rameeez"));

// 🧩 5. Find frequency of each character (2nd Approach)
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }

// const findFreqFunc2 = (str) => {
//   const frequencyMap = {};
//   for (const ch of str) {
//     if (frequencyMap[ch]) frequencyMap[ch] = frequencyMap[ch] + 1;
//     else frequencyMap[ch] = 1;
//   }
//   return frequencyMap;
// };
// console.log(findFreqFunc2("2nd Approach"));

// 🧩 6. Remove duplicate characters from a string
// Input: "aabbcc"
// Output: "abc"

// const removeDupFunc = (str) => {
//   let uniqStr = "";
//   let duplicate = false;
//   for (let i = 0; i < str.length; i++) {
//     duplicate = false;
//     for (let j = 0; j < uniqStr.length; j++) {
//       if (str[i] == uniqStr[j]) {
//         duplicate = true;
//       }
//     }
//     if (!duplicate) {
//       uniqStr += str[i];
//     }
//   }
//   return uniqStr;
// };
// console.log(removeDupFunc("aabbcc"));

// 🧩 7. Print all substrings
// Input: "abc"
// Output: "a", "ab", "abc", "b", "bc", "c"

// Solution:

// const subStrFunc = (str) => {
//   let current = "";
//   let subStr = "";
//   for (let i = 0; i < str.length; i++) {
//     current = "";
//     for (j = i; j < str.length; j++) {
//       current += str[j];
//       subStr += current + ",";
//     }
//   }
//   return subStr;
// };
// console.log(subStrFunc("abc"));

// 8. Replace a character with another (without using .replace())
// Input: "banana", replace 'a' with 'x'
// Output: "bxnxnx"

const replaceCharFun = (str) => {
  let replacedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "a") {
      replacedStr += "x";
    } else replacedStr += str[i];
  }
  return replacedStr
};
