// Ques 6: Implement Quick Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [8,3,5,4,7,6,1,2]  ----->>>>>  Output: [1,2,3,4,5,6,7,8]

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Time Complexity -
// Average Case - O(nlog n)
// Best Case - O(nlog n)
// Worst Case - O(n^2)

// Space Complexity -
// Average Case - O(log n)
// Worst Case - O(n)
// console.log(quickSort([5, 2, 9, 3, 6, 1, 8, 7]));

// chatGPT code with console logs
function quickSortDebug(arr, depth = 0) {
  const indent = " ".repeat(depth * 2);
  console.log(`\n  ${indent}quickSort called with: [${arr}]`);

  if (arr.length <= 1) {
    console.log(`${indent}Base case reached: returning [${arr}]`);
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  console.log(`\n${indent}Chosen pivot: ${pivot}`);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
      console.log(`${indent}  -> ${arr[i]} < ${pivot}, push to left => left: [${left}]`);
    } else {
      right.push(arr[i]);
      console.log(`${indent}  -> ${arr[i]} >= ${pivot}, push to right => right: [${right}]`);
    }
  }

  console.log(`${indent}Partition result -> left: [${left}], pivot: ${pivot}, right: [${right}]`);

  const sortedLeft = quickSortDebug(left, depth + 1);
  const sortedRight = quickSortDebug(right, depth + 1);

  const result = [...sortedLeft, pivot, ...sortedRight];
  console.log(`${indent}Returning merged: [${result}]`);
  return result;
}

// Example call:
// console.log("\nFinal sorted:", quickSortDebug([5, 3, 7, 2, 9, 1, 6]));


// Approach 2 - Without using left and right Arrays
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIndex = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }

  return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

// chatGPT code
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    console.log(`\n--> quickSort called on [${arr.slice(start, end + 1)}] (start=${start}, end=${end})`);

    const pivotIndex = pivot(arr, start, end);

    console.log(`\n   🔹 Pivot placed at index ${pivotIndex}, value=${arr[pivotIndex]}`);
    console.log(`   Current array: [${arr}]`);

    // Recursively sort left and right parts
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }

  return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    console.log(`   🔁 ${array[i]} < ${pivot}, Swapped ${array[i]} and ${array[j]} → [${array}]`);
  }

  let pivot = arr[start];
  let swapIdx = start;

  console.log(`\n⚙️  Pivot function start: [${arr.slice(start, end + 1)}], pivot=${pivot}`);

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      console.log(`\n   Swap Index: ${swapIdx}, array element: [${arr[swapIdx]}]`)
      swap(arr, swapIdx, i);
    }
  }

  // Swap pivot into correct position
  console.log(`\n   Swapping pivot, pivot: ${pivot}`)
  swap(arr, start, swapIdx);
  console.log(`   ✅ Pivot ${pivot} moved to index ${swapIdx}`);
  return swapIdx;
}

// Example run
// const result = quickSort([4, 6, 7, 1, 2, 5, 3]);
// console.log(`\n🎯 Final sorted array: [${result}]`);
// const result = quickSort([8,3,5,4,7,6,1,2]);
// console.log(`\n🎯 Final sorted array: [${result}]`);
// -------------------------------------------------------------------------------------------------------------------------------------

function quickSort1(arr){
  console.log(`\nQuick sort called with array: [${arr}]`)
  if(arr.length <=1){
    console.log(`   Base case reached`)
    return arr;
  } 

  var left = [];
  var right= [];
  var pivot = arr[0];
  console.log(`   Pivot assigned to arr[0]: ${arr[0]}`)
  for( i=1; i<arr.length; i++){
    if(arr[i] < pivot ){
      left.push(arr[i]);
      console.log(`   ${arr[i]} < pivot, Pushing to left: [${left}]`)
    } else {
      right.push(arr[i]);
      console.log(`   ${arr[i]} > pivot, Pushing to right: [${right}]`)
    }
  }

  console.log(`   Partition result: Left[${left}], Pivot[${pivot}], Right[${right}] `)

  const leftSort = quickSort1(left);
  const rightSort = quickSort1(right);
  const result = [...leftSort, pivot, ...rightSort];
  console.log(`   Merged array till now: [${result}]`)

  return [...quickSort1(left), pivot, ...quickSort(right)];
}

// console.log(quickSort1([8,3,5,4,7,6,1,2]));

function quickSortApproach1(arr){
  console.log(`\nCalling quick sort with array: [${arr}]`);
  if(arr.length <= 1){
    console.log(`   Threshold reached, returning array: [${arr}]`)
    return arr;
  }

  var pivot = arr[0]; //selecting the first element of the array as pivot
  var left = [];
  var right = [];

  console.log(`   Assigning pivot: ${pivot}`)

  for(i=1; i<arr.length; i++){  //start from the second element of the array, since the first element is assigned as pivot
    if(arr[i] < pivot){
      left.push(arr[i]);
      console.log(`   ${arr[i]} < ${pivot}, Pushing to left: [${left}]`)
    } else {
      right.push(arr[i]);
      console.log(`   ${arr[i]} > ${pivot}, Pushing to right: [${right}]`);
    }
  }

  console.log(`   After partition, left= [${left}], pivot = ${pivot}, right: [${right}]`);

  return [...quickSortApproach1(left), pivot, ...quickSortApproach1(right)];
}

// console.log(quickSortApproach1([8,3,5,4,7,6,1,2]));






























function quickSort2(arr, start=0, end=arr.length-1){
  if(start<end){
    console.log(`\n->Starting with array: [${arr.slice(start, end+1)}] | Start=${start} End=${end}`)
    const pivotIndex = pivot2(arr, start, end);
    console.log(`✅ Array now: [${arr}]`);

    quickSort2(arr, start, pivotIndex-1);
    quickSort2(arr, pivotIndex+1, end)
  }
  return arr;
}

function pivot2(arr, start=0, end=arr.length-1){
  function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    console.log(`      ${arr[i]} < pivot, Swapping ${arr[i]} and ${arr[j]} -->Array:[${arr}]`)
  }

  var swapIdx = start;
  var pivot = arr[start];
  console.log(`   Pivot: ${pivot}`)

  for(i=start+1; i<=end; i++){
    if(arr[i] < pivot){
      swapIdx++;
      console.log(`   Swap index: ${swapIdx} | Swap element:[${arr[swapIdx]}]`)
      swap(arr, swapIdx, i);
      
    }
  }
  console.log(`   Swapping pivot`)
  swap(arr, start, swapIdx);
  console.log(`   Pivot ${pivot} placed at index ${swapIdx}`)
  return swapIdx;
}

console.log(`\nFinal sorted array:`, quickSort2([8,3,5,4,7,6,1,2]));