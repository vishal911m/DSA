// Ques 2: Implement Binary Search in JavaScript
// Given an array of integers nums which is sorted in ascending order, and an integer target,
// Write a function to search target in nums. If target exists, then return its index.
// Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9  ----->>>>>  Output:  4
// Input: nums = [-1,0,3,5,9,12], target = 2  ----->>>>>  Output: -1

function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

// Time Complexity  - O(logn)
// Space Complexity - O(1)
// console.log(search([-1, 0, 3, 5, 9, 12], 9));
// console.log(search([-1, 0, 3, 5, 9, 12], 69));

// chatGPT code with console logs
//ChatGPT code with console logs 
function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  console.log(`\n🔍 Searching for ${target} in [${nums}]`);

  // Loop continues while there’s a valid range to search
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    console.log(
      `\n➡️ start index: ${start}, end index: ${end}, middle index: ${middle}, nums[middle]: ${nums[middle]}`
    );

    // Check if we found the target
    if (nums[middle] === target) {
      console.log(`✅ Found ${target} at index ${middle}`);
      return middle;
    }
    // If middle element is smaller, search right half
    else if (nums[middle] < target) {
      console.log(
        `🔸 ${nums[middle]} is less than ${target} → move start to middle + 1`
      );
      start = middle + 1;
    }
    // If middle element is larger, search left half
    else {
      console.log(
        `🔹 ${nums[middle]} (middle) is greater than (target) ${target} → move end index to middle index - 1`
      );
      end = middle - 1;
    }
  }

  console.log(`❌ ${target} not found in the array.`);
  return -1;
}

// Time Complexity  - O(log n)
// Space Complexity - O(1)

// console.log("\nResult 1:", search([
//    4,  9,  18,  23,  33,  41,  48,  56,  63,  71,
//   77,  80,  85,  99, 103, 112, 119, 127, 135, 142,
//  150, 156, 163, 172, 186, 191, 204, 210, 217, 221,
//  233, 249, 257, 262, 278, 283, 295, 309, 312, 326,
//  334, 341, 352, 368, 372, 384, 391, 403, 418, 429,
//  443, 455, 469, 472, 487, 498, 503, 519, 531, 547,
//  559, 566, 572, 589, 603, 617, 623, 631, 648, 659,
//  674, 688, 699, 711, 728, 735, 743, 751, 763, 778,
//  786, 794, 806, 819, 827, 839, 846, 857, 871, 888,
//  901, 915, 927, 938, 951, 962, 975, 983, 992, 1000
// ], 33));
// console.log("\nResult 2:", search([-1, 0, 3, 5, 9, 12], 9));


const binarySearch = function(nums, target){
  var start = 0;
  var end = nums.length-1;

  while(start <= end){
    var middle = Math.floor((start+end)/2);
    console.log(`\nStarting with Start index = ${start} | End index = ${end} | Middle index= ${middle} | Target=${target}`)

    if(nums[middle] === target){
      console.log(`Target found in the array, target: ${middle}`)
      return middle;
    } else if(nums[middle] < target){
      start = middle+1;
      console.log(`The target is greater than middle(${nums[middle]}) moving start to middle + 1: ${start}`)
    } else {
      end = middle-1;
      console.log(`The target is less than middle(${nums[middle]}) moving end to (middle - 1): ${end}`)
    }
  }

  console.log("\nTarget not found in the array")
  return -1
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 0))