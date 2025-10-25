// Ques 1 - Palindrome number
// An integer is a palindrome when it reads the same forward and backward

// Input: x = 121 --->>>> output: true
// Input: x=10    --->>>> output: false

// const isPalindrome = function (x){
//   return x === +x.toString().split("").reverse().join(""); // Careful: .join() with no argument defaults to inserting a comma between elements. ["2", "1"] → "2,1" (not "21").
// }

// const res = isPalindrome(112321);
// console.log(res);

// 121 => "121" => ["1","2","1"] => ["1","2","1"] => "121" 

// improved code ---

const isPalindrome = function(x){
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}

const res = isPalindrome(1212);
console.log(res);