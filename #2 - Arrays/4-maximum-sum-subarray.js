// Ques 4 - Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4]     ----->>>>>    Output: 6,   [4,-1,2,1]
// Input: [5,4,-1,7,8]                ----->>>>>    Output: 23,  [5,4,-1,7,8]

// // Brute Force Approach
// function maxSubArray (nums){
//   let maxSum = nums[0];
//   let startIdx = 0;
//   let endIdx = 0;

//   for(let i=0; i<nums.length; i++){
//     let currentSum = 0;
//     for (let j=i; j < nums.length; j++){
//       currentSum = currentSum + nums[j];
//       if(currentSum > maxSum){
//         maxSum = currentSum;
//         startIdx = i;
//         endIdx = j;
//       }
//     }
//   }

//   return {
//     sum: maxSum,
//     array: nums.slice(startIdx, endIdx + 1)
//   };
// }

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

// // ChatGPT code with console logs
// function maxSubArray(nums) {
//   let maxSum = nums[0];
//   console.log("Start: maxSum =", maxSum);
//   console.log("------------------------------------------------------");

//   for (let i = 0; i < nums.length; i++) {
//     let currentSum = 0;
//     console.log(`🔽 Starting new subarray at i=${i} (nums[${i}] = ${nums[i]})`);

//     for (let j = i; j < nums.length; j++) {
//       currentSum = currentSum + nums[j];
//       console.log(`   ➡️ Adding nums[${j}] = ${nums[j]} | currentSum = ${currentSum}`);

//       if (currentSum > maxSum) {
//         maxSum = currentSum;
//         console.log(`   ✅ New maxSum found: ${maxSum} (subarray [${i}..${j}])`);
//       }
//     }

//     console.log("------------------------------------------------------");
//   }

//   console.log("Final Max Subarray Sum =", maxSum);
//   // return maxSum;
// }

// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);


// // Kadane's Algorithm

// // [-2,1,-3,4,-1,2,1,-5,4]
// function maxSubArray(nums) {
//   let sum = 0;
//   let max = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     if (sum > max) {
//       max = sum;
//     }
//     if (sum < 0) {
//       sum = 0;
//     }
//   }

//   return max;
// }

// // Time Complexity - O(n)
// // Space Complexity - O(1)

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));


// ChatGPT code with console logs
// function maxSubArray(nums) {
//   let sum = 0;
//   let max = nums[0];

//   console.log("Initial max:", max);

//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     console.log(`i=${i}, nums[i]=${nums[i]}, sum after adding=${sum}`);

//     if (sum > max) {
//       max = sum;
//       console.log(`--> Updated max = ${max}`);
//     }

//     if (sum < 0) {
//       console.log(`sum < 0, reset sum to 0`);
//       sum = 0;
//     }
//   }

//   console.log("Final max:", max);
//   return max;
// }

// console.log("Largest Sum =", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
































