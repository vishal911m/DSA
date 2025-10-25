// Ques 3 : Given an integer x, return true if x is a palindrome, and false otherwise.
// Input: x = 121      ----->>>>>      Output: true;

// function isPalindrome(str) {
//   str = str.replace(/[^a-z0-9]/i, "").toLowerCase();
//   const len = str.length;

//   if (len <= 1) return true;
//   if (str[0] !== str[len - 1]) return false;
//   return isPalindrome(str.slice(1, -1));
// }

// console.log(isPalindrome("121"));

// code from chatGPT with console logs
// function isPalindrome(str) {
//   // Step 1: Clean the string
//   str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
//   const len = str.length;

//   console.log("Checking:", str);

//   // Base case 1: empty or single char string
//   if (len <= 1) {
//     console.log("Base case reached ✅ -> Palindrome");
//     return true;
//   }

//   // Base case 2: mismatch found
//   if (str[0] !== str[len - 1]) {
//     console.log(
//       `Mismatch ❌ -> First: "${str[0]}" | Last: "${str[len - 1]}"`
//     );
//     return false;
//   }

//   // Recursive step
//   console.log(
//     `Match ✅ -> First: "${str[0]}" | Last: "${str[len - 1]}" | Next call: "${str.slice(1,-1)}"`
//   );

//   return isPalindrome(str.slice(1, -1));
// }

// // Test cases
// // console.log("Result:", isPalindrome("A man, a plan, a canal: Panama"));
// console.log("Result:", isPalindrome("malayalam"));






















