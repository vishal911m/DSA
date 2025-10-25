// 2- Fibonacci number 
// Fibonacci series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n-1) + F(n-2), for n>1
// Input: n = 3 ----->>>>> Output: 2

// // Fibonacci using for loop
// var fib = function(x){
//   const arr = [0,1];

//   for(let i=2; i<=x; i++){
//     arr.push(arr[i-1] + arr[i-2]);
//   }

//   console.log(arr);
//   return arr[x];
// }

// fib(5);

// //Fibonacci using recursion
// const fib = function(n){
//   if(n <= 1) return n;

//   return fib(n-1) + fib(n-2);
// };

// console.log(fib(13));

// // Fibonacci using one liner
// const fib = (n) => (n <= 1 ? n : fib(n-1) + fib(n-2));

// console.log(fib(13));











const fib = (n)=> n <= 1 ? n : fib(n-1) + fib(n-2) ;

console.log(fib(13));