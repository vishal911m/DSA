// Ques 3: Implement Insertion Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14,33,8,11] ----->>>>>  Output: [8,10,11,14,14,29,33,37]

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    // n
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      // n
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

// console.log(insertionSort([29, 10, 14, 37, 14, 33, 8, 11]));

// Best Case Time Complexity = O(n)
// Worst Case Time Complexity = O(n^2)
// Average Case Time Complexity = O(n^2)
// Space Complexity = O(1)

// ChatGPT code with console logs 
function insertionSort1(arr) {
  console.log("🟢 Starting Insertion Sort...");
  console.log("Initial array:", [...arr]);

  const n = arr.length;

  // Outer loop starts from index 1 because
  // we assume arr[0] is already sorted
  for (let i = 1; i < n; i++) {
    const key = arr[i]; // Current element to be inserted into the sorted part
    let j = i - 1;

    console.log(`\n➡️ Iteration ${i}: Trying to insert "${key}" into sorted part [${arr.slice(0, i)}]`);

    // Shift elements greater than key to one position ahead
    while (j >= 0 && arr[j] > key) {
      console.log(`   🔄 ${arr[j]} > ${key} → shifting ${arr[j]} to position ${j + 1} j=${j}`);
      arr[j + 1] = arr[j];
      j--;
      console.log(`   j=${j}`)
    }

    // Place the key at the correct sorted position
    arr[j + 1] = key;
    console.log(`   ✅ Inserted "${key}" at position ${j + 1}`);
    console.log(`   Current array state: [${arr}]`);
  }

  console.log("\n🏁 Final sorted array:", arr);
  return arr;
}

// console.log(insertionSort1([29, 10, 14, 37, 14, 33, 8, 11]));

// ChatGPT code
function insertionSort2(arr) {
  const n = arr.length;
  console.log("🔹 Starting insertionSort() — Input:", arr);

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    console.log(`\n   👉 Iteration ${i}: key = ${key}`);
    console.log(`   j=${j}`);
    console.log(`   Comparing with elements on the left...`);

    // Shift elements greater than key to one position ahead
    while (j >= 0 && arr[j] > key) {
      console.log(`   🔄 arr[${j}] (${arr[j]}) > key (${key}) → Shifting right`);
      arr[j + 1] = arr[j];
      j--;
      console.log(`   j:${j}`)
      console.log(`   ✏️  Array now:`, arr);
    }

    // Insert key in its correct position
    // console.log(`   Array before:`, arr);
    arr[j + 1] = key;
    console.log(`   ✅ Inserted key (${key}) at position ${j + 1}`);
    console.log(`   Array after inserting:`, arr);
  }

  console.log("\n🏁 Sorting complete! Final sorted array:", arr);
  return arr;
}

// console.log("\nFinal Output:", insertionSort2([29, 10, 14, 37, 14, 33, 8, 11]));




















// [29, 10, 14, 37, 14, 33, 8, 11]
const insertionSorting = function(arr){
  var n = arr.length;
  console.log(`Array before sorting: [${arr}]`)
  for(i=1; i<n; i++){
    var key = arr[i];
    var j = i-1;
    console.log(`\nIteration: ${i} arr[i]=${key}`);
    console.log(`   j:${j}, arr[j]: ${arr[j]}`);
    console.log(`   Moving the element arr[j]:${arr[j]} to right`);

    while(j >=0 && arr[j] > key){
      console.log(`   arr[j]:${arr[j]} > key:${key} --> Shifting the element to right`);
      arr[j+1] = arr[j];
      j--;
      console.log(`   Array after moving: [${arr}]`);
      if (j >= 0 || j<0) {
        console.log(`   Threshold reached, exiting loop`);
      }
    }

    arr[j+1] = key;
    console.log(`   Moving the key(${key}) to position: ${j+1}`)
    console.log(`   ✅Array after shifting: [${arr}]`)
  }
  return arr
}
console.log("\nFinal sorted array: ",insertionSorting([29, 10, 14, 37, 14, 33, 8, 11]));