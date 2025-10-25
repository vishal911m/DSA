// Ques 1: Implement Bubble Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14] ----->>>>>  Output: [10,14,14,29,37]

const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

// console.log(bubbleSort([29, 10, 14, 37, 14]));

// Best Time Complexity = O(n)
// Worst Time Complexity = O(n^2)
// Average Time Complexity = O(n^2)

// Space Complexity = O(1)

// ChatGPT code with console logs 
const bubbleSort1 = (arr) => {
  const n = arr.length;
  console.log("🔹 Original array:", [...arr]);
  console.log("----------------------------------");

  // Outer loop - number of passes
  for (let i = 0; i < n; i++) {
    console.log(`\n🌀 Pass ${i + 1}:`);
    let swapped = false; // to track if any swap happens

    // Inner loop - adjacent comparison
    for (let j = 0; j < n - i - 1; j++) {
      console.log(`   🔍 Comparing arr[${j}] = ${arr[j]} and arr[${j + 1}] = ${arr[j + 1]}`);

      if (arr[j] > arr[j + 1]) {
        console.log(`   ⚡ Swap needed → swapping ${arr[j]} and ${arr[j + 1]}`);
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
        console.log(`   ✅ After swap: [${arr.join(", ")}]`);
      } else {
        console.log(`   ⏩ No swap needed`);
      }
    }

    console.log(`✅ End of pass ${i + 1}: [${arr.join(", ")}]`);
    console.log("----------------------------------");

    // Optimization: if no swap happened, array is already sorted
    if (!swapped) {
      console.log("🚀 No swaps in this pass — array already sorted!");
      break;
    }
  }

  console.log("\n🏁 Final sorted array:", arr);
  return arr;
};

// Test
console.log("\nOutput:", bubbleSort1([29, 10, 14, 37, 14]));



const sort = function(arr){
  let n= arr.length;

  for(i=0; i<n; i++){
    for(j=i; j<n-i-1; j++){
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr;
}

// console.log("Sorted array: ",sort([29, 10, 14, 37, 14]))