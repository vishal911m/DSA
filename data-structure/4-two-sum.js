// Two sum
// Given an array of integers nums and an integer target,
// return indices of two numbers such that they add up to the target

// Input: nums = [2,7,11,15] , target = 9
// Output: [0,1] (Because nums[0] + nums[1] ==9 , we return [0,1])
// Input: nums = [3,2,4] , target = 6
// Output: [1,2] 

// // Brute Force solution
// const twoSum = function(nums, target){
//   for(let i=0; i< nums.length; i++){
//     for(let j=i+1; j< nums.length; j++){
//       //Logic
//       if(nums[i] + nums[j] === target) return [i,j];
//     }
//   }
// }

// console.log(twoSum([2,7,11,15], 26));

// // Using JS objects
// const twoSum = function(nums, target){
//   var obj = {}

//   for (let i=0; i < nums.length; i++){
//     var n= nums[i];

//     if(obj[target - n] >= 0){
//       return[obj[target - n], i];
//     } else {
//       obj[n] = i;
//     }
//   }
// }

// console.log(twoSum([2,3,5,7,9], 9));

// // ChatGPT code: with console logs for better understanding
// const twoSum = function(nums, target) {
//   var obj = {}

//   for (let i = 0; i < nums.length; i++) {
//     var n = nums[i]
//     var complement = target - n;

//     console.log(`Step ${i}:`);
//     console.log(`  Current number (n): ${n}`);
//     console.log(`  Complement : ${complement}`);
//     console.log(`  Hash map so far:`, obj);

//     if (obj[complement] >= 0) {
//       console.log(`✅ Found complement ${complement} at index ${obj[complement]}`);
//       return [obj[complement], i];
//     } else {
//       obj[n] = i;
//       console.log(`  ➕ Storing ${n} at index ${i}`);
//     }

//     console.log("-------------------------");
//   }
// }

// console.log("Result:", twoSum([2, 7,12,13,14, 17, 18, 19], 15));













