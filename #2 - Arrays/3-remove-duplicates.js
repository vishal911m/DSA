// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_] 

// // with JS methods
// function removeDuplicate(nums){
//   for (let i=0; i<nums.length -1 ; i++){
//     if(nums[i] === nums[i+1]){
//       nums.splice(i+1, 1);
//       i--;
//     }
//   }
//   console.log(nums);
//   return nums.length;
// }

// console.log(removeDuplicate([1,1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9]));

// // two pointer method
// function removeDuplicate(nums) {
//   if (nums.length === 0) return 0;
//   let i = 0;

//   for (let j = 1; j < nums.length; j++) {
//     if (nums[i] !== nums[j]) {
//       i++;
//       nums[i] = nums[j];
//     }
//   }

//   const finalArray = nums.slice(0, i + 1);
//   console.log("Final Array:", finalArray);
//   // console.log(nums);

//   return i + 1;
// }

// console.log(removeDuplicate([1,1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9]));


// // ChatGPT code with console logs
// function removeDuplicate(nums) {
//   if (nums.length === 0) return 0;
//   let i = 0;

//   console.log("Initial nums:", nums);

//   for (let j = 1; j < nums.length; j++) {
//     console.log(`\n🔎 Comparing nums[i]=${nums[i]} with nums[j]=${nums[j]} (i=${i}, j=${j})`);

//     if (nums[i] !== nums[j]) {
//       i++;
//       nums[i] = nums[j];
//       console.log(`✅ Found new unique! Moved nums[j] → nums[i]`);
//     } else {
//       console.log("⏩ Duplicate found, skipping...");
//     }

//     console.log("Current nums:", nums, "| i =", i);
//   }

//   const finalArray = nums.slice(0, i + 1);
//   console.log("\n✨ Final Unique Array:", finalArray);

//   return i + 1;
// }

// // Test
// console.log("\nResult Length:", removeDuplicate([1,1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9]));














