// Ques 2: Implement Selection Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14]  ----->>>>>  Output: [10,14,14,29,37]

const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // n
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      // n
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};

// console.log(selectionSort([29, 10, 14, 37, 14]));

// Time Complexity = O(n^2)
// Space Complexity = O(1)

// ChatGPT code with console logs
const selectionSort1 = (arr) => {
  const n = arr.length;
  console.log("Initial array:", arr);

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    console.log(`\n🔹 Pass ${i + 1}: Starting with i=${i}, current array = [${arr}]`);

    for (let j = i + 1; j < n; j++) {
      console.log(`   Comparing arr[j]=${arr[j]} with arr[minIndex]=${arr[minIndex]}`);
      if (arr[j] < arr[minIndex]) {
        console.log(`   ✅ New minimum found at index ${j} (value=${arr[j]})`);
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      console.log(`   🔄 Swapping arr[i]=${arr[i]} with arr[minIndex]=${arr[minIndex]}`);
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    } else {
      console.log(`   ⚠️ No swap needed, arr[${i}] is already smallest`);
    }

    console.log(`   Result after pass ${i + 1}: [${arr}]`);
  }

  console.log("\n✅ Final sorted array:", arr);
  return arr;
};

// console.log(selectionSort1([29, 10, 14, 37, 14]));

























// [29, 10, 14, 37, 14]
const selectionSorting = function(arr){
  var n= arr.length;
  console.log(`Starting with array: [${arr}]`)
  for(i=0; i<n-1; i++){
    console.log(`\nPass ${i+1}: Starting with i=${i}, Current array: ${arr} `)
    let minIndex = i;
    for(j=i+1; j<n; j++){
      console.log(`   Comparing arr[j]=${arr[j]} with arr[minIndex]=${arr[minIndex]}`)
      if(arr[j] < arr[minIndex]){
        console.log(`   New minimum found arr[minIndex]= ${arr[j]}`);
        minIndex = j
      }
    }

    if (minIndex !== i) {
      console.log(`   Swapping arr[${arr[i]}] with arr[${arr[minIndex]}]`);
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }

  return arr
}

console.log("\nFinal sorted array: ",selectionSorting([29, 10, 14, 37, 14]))























