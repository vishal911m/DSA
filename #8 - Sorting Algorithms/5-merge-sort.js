// Ques 5: Implement Merge Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [8,3,5,4,7,6,1,2]  ----->>>>>  Output: [1,2,3,4,5,6,7,8]

// function mergeSort(arr) {
//   // O(log n)
//   // base case
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);

//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }

// function merge(left, right) {
//   // O(n)
//   let sortedArr = [];

//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       sortedArr.push(left.shift());
//     } else {
//       sortedArr.push(right.shift());
//     }
//   }

//   return [...sortedArr, ...left, ...right];
// }

// Time Complexity - O(nlog n)
// Space Complexity - O(n)
// console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));


// chatGPT code 
function mergeSort1(arr, depth = 0) {
  const indent = " ".repeat(depth * 2); // for visual indentation in logs

  console.log(`\n${indent}▶️ mergeSort called with: [${arr}]`);

  // Base case
  if (arr.length <= 1) {
    console.log(`${indent}🔹 Base case reached: [${arr}]`);
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  console.log(`${indent}🧩 Splitting at index ${mid} into:`)
  console.log(`${indent}  Left:  [${arr.slice(0, mid)}]`);
  console.log(`${indent}  Right: [${arr.slice(mid)}]`);

  // Recursive calls
  let left = mergeSort1(arr.slice(0, mid), depth + 1);
  let right = mergeSort1(arr.slice(mid), depth + 1);

  // Merging step
  console.log(`${indent}⬅️ Merging: Left [${left}] and Right [${right}]`);
  let merged = merge1(left, right, depth);
  console.log(`${indent}✅ Merged result: [${merged}]`);

  return merged;
}

function merge1(left, right, depth = 0) {
  const indent = " ".repeat(depth * 2);
  let sortedArr = [];

  console.log(`${indent}🔧 merge() started`);
  console.log(`${indent}Left: [${left}]`);
  console.log(`${indent}Right: [${right}]`);

  while (left.length && right.length) {
    console.log(`${indent}Comparing ${left[0]} and ${right[0]}`);
    if (left[0] < right[0]) {
      let val = left.shift();
      sortedArr.push(val);
      console.log(`${indent}➡️ Pushed ${val} from Left`);
    } else {
      let val = right.shift();
      sortedArr.push(val);
      console.log(`${indent}➡️ Pushed ${val} from Right`);
    }
  }

  if (left.length) console.log(`${indent}🟦 Left leftovers: [${left}]`);
  if (right.length) console.log(`${indent}🟨 Right leftovers: [${right}]`);

  let result = [...sortedArr, ...left, ...right];
  console.log(`${indent}🔹 Returning merged array: [${result}]`);

  return result;
}

// console.log("\n🎯 Final sorted output:");
// console.log(mergeSort1([8, 3, 5, 4, 7, 6, 1, 2]));
// ----------------------------------------------------------------------------------------------------------------------------------------

const mergeSort = function(arr){
  console.log(`\nMerge sort called with array: [${arr}]`)
  if(arr.length <= 1) return arr;

  var mid = Math.floor(arr.length /2);

  console.log(`   Left : [${arr.slice(0, mid)}]`);
  console.log(`   Right : [${arr.slice(mid)}]`);

  var left = mergeSort(arr.slice(0,mid));
  var right = mergeSort(arr.slice(mid));

  console.log(`   Merging left:${left} and right:${right}`);
  var merged = merge(left, right);
  console.log(`   ✅ After merging: [${merged}]`)
  return merged;
}

function merge(left, right){
  var sortedArr = []

  while(left.length && right.length){
    console.log(`   Comparing left: [${left}] and right: [${right}]`)
    if(left[0] < right[0]){
      var val = left.shift();
      sortedArr.push(val);
      console.log(`      Pushed ${val} from left`);
      console.log("      Sorted Array:",sortedArr);
    } else {
      var val = right.shift();
      sortedArr.push(val);
      console.log(`      Pushed ${val} from right`);
      console.log("      Sorted Array:",sortedArr);
    }
  }

  if(left.length) console.log(`Remaining left elements: ${left}`);
  if(right.length) console.log(`Remaining right elements: ${right}`);

  return [...sortedArr, ...left, ...right]
}

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));