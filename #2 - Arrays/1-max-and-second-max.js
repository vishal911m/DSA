// Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5

function secondLargest(arr){
  // 1. Remove duplicates using Set
  // Set stores only unique values
  // Array.from converts the Set back into an array
  const uniqueArr = Array.from(new Set(arr)); // O(n)

  // 2. Sort numbers in descending order
  // b - a ensures highest → lowest
  uniqueArr.sort((a,b) => { // O(n log n)
    return b-a;
  });

  // 3. If at least 2 unique numbers exist, return second largest
  if(uniqueArr.length >= 2){
    return uniqueArr[1]; // Index 1 → second largest
  } else {
    return -1;           // Not enough unique numbers
  }

  // NOTE: This console.log() never runs because it's after return.
  console.log(uniqueArr);
};

console.log(secondLargest([12, 35, 1, 10, 34, 1, 34]));

// Time complexity => O(n log n)

function secondLargestOptimised(arr){
  // Initialize two variables:
  // `largest` → the biggest number found so far
  // `secondLargest` → the second biggest number found so far
  // Both start at -1 (assuming array contains only non-negative numbers)
  let largest = -1;
  let secondLargest = -1;

  // Loop through every element once → O(n)
  for(let i=0; i<arr.length; i++){ // Time complexity = O(n)
    // Case 1: Found a new largest number
    if(arr[i] > largest) {
      // The old largest becomes the second largest
      secondLargest = largest;
      
      // And update the new largest
      largest = arr[i];

    // Case 2: Element is NOT equal to largest (to avoid duplicates)
    // AND it's greater than current secondLargest
    } else if(arr[i] != largest && arr[i] > secondLargest) {
      // Update second largest
      secondLargest = arr[i];
    }
  }
  // Return the second largest value found
  return secondLargest;
}

console.log(secondLargestOptimised([12, 35, 1, 10, 34, 1, 34]));

