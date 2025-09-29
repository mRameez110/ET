// ✅ Phase 1: String Practice — Your Own Problems
// 🔰 Level 0: Basic Manual Practice (No Built-ins Like split(), reverse(), etc.)
// Here are 10 beginner-level string questions...

// 🧩 1. Reverse a string manually
// Input: "hello"
// Output: "olleh"

//  Solution
let revStrFunc = (str) => {
  let revStr = "";
  for (const char of str) {
    revStr = char + revStr;
  }
  return revStr;
};
console.log(revStrFunc("hello")); // Output: 'olleh'

// 🧩 2. Count vowels in a string
// Input: "programming"
// Output: 3 (o, a, i)
