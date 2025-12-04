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
  let largest = -1;
  let secondLargest = -1;

  for(let i=0; i<arr.length; i++){ // Time complexity = O(n)
    if(arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if(arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

// console.log(secondLargestOptimised([12, 35, 1, 10, 34, 1, 34]))

