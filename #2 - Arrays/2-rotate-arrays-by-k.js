// Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

// function rotateArray(nums, k){
//   let size = nums.length;

//   if (k > size) {
//     k = k % size;
//   }

//   const rotated = nums.splice(size-k, size);  // splice(start, deleteCount)
//   nums.unshift(...rotated);
//   return nums;
// }

// console.log(rotateArray([1,2,3,4,5,6,7], 77));

// function rotateArrayOptimised(nums, k) {
//   let size = nums.length;

//   if (size > k) {
//     k = k % size;
//   }

//   reverse(nums, 0, nums.length - 1); // O(n)
//   reverse(nums, 0, k - 1); // O(k)
//   reverse(nums, k, nums.length - 1); // O(n-k)

//   return nums;
// }

// // Time Complexity -> O(n)
// // Space Complexity -> O(1)

// function reverse(nums, left, right) {
//   while (left < right) {  //compared the index, when middle element is reached, loop stops
//     const temp = nums[left];
//     nums[left++] = nums[right];
//     nums[right--] = temp;
//   }
// }

// console.log(rotateArrayOptimised([1,2,3,4,5,6,7], 3));

//// chatGPT code with console logs
// function rotateArrayOptimised(nums, k) {      
//   let size = nums.length;

//   // handle k greater than size
//   if (k > size) {
//     k = k % size;
//   }

//   console.log("Original Array:", nums);
//   console.log("Rotate by k =", k);
//   console.log("---------------------------------");

//   // 1. reverse whole array
//   reverse(nums, 0, nums.length - 1, "Step 1: Reverse whole array");

//   // 2. reverse first k elements
//   reverse(nums, 0, k - 1, `Step 2: Reverse first ${k} elements`);

//   // 3. reverse remaining elements
//   reverse(nums, k, nums.length - 1, `Step 3: Reverse remaining elements`);

//   console.log("Final Rotated Array:", nums);
//   return nums;
// }

// function reverse(nums, left, right, stepName) {
//   console.log(stepName, "| Before:", [...nums]);

//   while (left < right) {
//     console.log(
//       `Swapping nums[${left}] = ${nums[left]} with nums[${right}] = ${nums[right]}`
//     );
//     const temp = nums[left];
//     nums[left++] = nums[right];
//     nums[right--] = temp;
//   }

//   console.log(stepName, "| After:", [...nums]);
//   console.log("---------------------------------");
// }

// // Test
// rotateArrayOptimised([1, 2, 3, 4, 5, 6, 7], 3);













function rotateArrayOptimised(nums, k){
 const size = nums.length;

 if (k>size){
  k=k % size;
 }

 reverse(nums, 0, size-1);
 reverse(nums, 0, k-1);
 reverse(nums, k, size-1);

 return nums;
}

function reverse(nums, left, right){
  while(left < right){
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

console.log(rotateArrayOptimised([1,2,3,4,5,6,7],17));


















