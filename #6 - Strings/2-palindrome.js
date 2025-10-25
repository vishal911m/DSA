// Ques 2 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false

// var isPalindrome = function (x) {
//   return x < 0 ? false : x === +x.toString().split("").reverse().join("");
// };

// const res = isPalindrome(10);
// console.log(res);

// // 121 => "121" => ["1","2","1"] => ["1","2","1"] => "121"

// Own code
const isPalindrome = function(x){
 
const a = x.toString();
console.log("To String: ",a);

const b= a.split("");
console.log("Split:",b)

const c=b.reverse();
console.log("Reverse:",c);

const d=c.join("");
console.log("Join:",d)

console.log(`Input : ${x}, Output : ${d}`)
return x === +x.toString().split("").reverse().join("");
}

console.log("Result: ",isPalindrome(121))