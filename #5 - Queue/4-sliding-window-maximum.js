// Ques 4 : Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right.You can only see the k numbers
// in the window. Each time the sliding window moves right by one position. For each window,
// take the maximum element and add them to a final result array.

// Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// Output: [3, 3, 5, 5, 6, 7]

// Brute Force Solution
const maxSlidingWindowNaive = function (nums, k) {
  const result = [];
  const n = nums.length;

  for (i = 0; i <= n - k; i++) {
    // O(n)
    let max = nums[i];
    for (j = 1; j < k; j++) {
      // O(k)
      if (nums[i + j] > max) {
        max = nums[j + i];
      }
    }

    result.push(max);
  }

  return result;
};

// Time Complexity - O(n*k) => O(n^2)
// Space Complexity - O(n)
// console.log(maxSlidingWindowNaive([1, 3, -1, -3, 5, 3, 6, 7], 3));

//ChatGPT code for maxSlidingWindowNaive with console logs
const maxSlidingWindowNaive1 = function (nums, k) { 
  const result = [];
  const n = nums.length;

  for (let i = 0; i <= n - k; i++) {   // Outer loop → each window start
    console.log(`\n➡️ Window starting at index ${i}: [${nums.slice(i, i + k)}]`);

    let max = nums[i];
    console.log(`   Start with max = ${max}`);

    for (let j = 1; j < k; j++) {      // Inner loop → scan inside the window
      console.log(`   Compare max (${max}) with nums[${i + j}] = ${nums[i + j]}`);
      if (nums[i + j] > max) {
        max = nums[i + j];
        console.log(`   🔼 New max updated to ${max}`);
      }
    }

    console.log(`✅ Max for window [${nums.slice(i, i + k)}] = ${max}`);
    result.push(max);
  }

  console.log("\nFinal Result:", result);
  return result;
};

// console.log(maxSlidingWindowNaive1([1, 3, -1, -3, 5, 3, 6, 7], 3));


// Optimised solution - Dequeue
const maxSlidingWindowQueue = function(nums, k){
  const result = [];
  const deque = [];

  for (let i=0; i< nums.length; i++){
    if(deque.length>0 && deque[0]<= i-k){
      deque.shift();
    }

    while(deque.length>0 && nums[deque[deque.length -1]] < nums[i]){
      deque.pop();
    }

    deque.push(i);

    if(i>=k-1){
      result.push(nums[deque[0]])
    }
  }

  return result;
}

// console.log(maxSlidingWindowQueue([1, 3, -1, -3, 5, 3, 6, 7], 3));

// ChatGPT code for deque method with console logs
const maxSlidingWindowQueue1 = function(nums, k) {
  const result = [];
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    console.log(`\n👉 Processing nums[${i}] = ${nums[i]}`);

    // Step 1: Remove indices outside window
    if (deque.length > 0 && deque[0] <= i - k) {
      // deque.shift();
      // console.log(`   🔹 Removing deque[0] = index ${deque[0]} (value ${nums[deque[0]]}), out of window | Deque index: [${deque}]`);
      const removedIdx = deque.shift();
      console.log(
        `   🚪 Shift: Removing index ${removedIdx} (value ${nums[removedIdx]}) because it's outside window [${i - k + 1}, ${i}]`
      );
    }

    // Step 2: Maintain decreasing order in deque
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      console.log(`   🔹 Popping smaller element: index ${deque[deque.length - 1]} (value ${nums[deque[deque.length - 1]]}) | Deque index: [${deque}]`);
      deque.pop();
      console.log(`    Deque index: [${deque}]`);
    }

    // Step 3: Push current index
    deque.push(i);
    console.log(`   ➕ Added index ${i} (Array value: ${nums[i]}). Deque's array values = [${deque.map(idx => nums[idx])}] | Deque index: [${deque}]`);

    // Step 4: Add result when first window is ready
    if (i >= k - 1) {
      const windowValues = nums.slice(i - k + 1, i + 1);
      console.log(`   ✅ Window index[${i - k + 1} to ${i}] = [${windowValues}] -> max = ${nums[deque[0]]}`);
      result.push(nums[deque[0]]);
      console.log("   Result :", result);
    }
  }

  console.log("\n🏁 Final Result:", result);
  return result;
};

// console.log(maxSlidingWindowQueue1([1, 3, -1, -3, 5, 3, 6, 7], 3));

// [1, 3, -1, -3, 5, 3, 6, 7], 3
const maxSlidingQueue = function(nums,k){
  const result = [];
  const deque = [];

  for(i=0; i<nums.length; i++){
    console.log(`\nStarting with i=${i}: Nums(${i}) = ${nums[i]}`);

    if(deque.length>0 && deque[0] <= i-k){
      deque.shift();
      console.log(`   -->Shifting | Deque Index:[${deque}]`)
    }

    while(deque.length>0 && nums[deque[deque.length-1]] < nums[i]){
      const poppingIndex = deque[deque.length - 1];
      console.log(`   Minimum value found(${nums[poppingIndex]})`);
      console.log(`   Popping the smaller value's index(${poppingIndex})`); 
      deque.pop(); 
      console.log(`   Deque Index:[${deque}]`);
    }

    deque.push(i);
    console.log(`   Adding new index | Deque Index:[${deque}]`)

    if(i >= k-1){
      const window = nums.slice(i-k+1, i+1)
      result.push(nums[deque[0]]);
      console.log(`   Current window: [${window}], Max Value of the window: ${nums[deque[0]]} | Deque Index:[${deque}] | Result:[${result}]`)
    }
  }
  return result;
}

// console.log("\nFinal Result: ",maxSlidingQueue([1, 3, -1, -3, 5, 3, 6, 7], 3));




















const maxSliding = function(nums,k){
  const result = [];
  const n=nums.length;

  for(i=0;i<=n-k; i++){
    console.log(`\nStarting with i(${i}) nums[${i}] = ${nums[i]}`)
    var max = nums[i]
    for(j=1;j<k;j++){
      console.log(`   Comparing with nums(${j}) = ${nums[j]}`)
      if(nums[i+j]> max){
        console.log(`   New max found`)
        max = nums[i+j]
      }
    }
    result.push(max);
    const window = nums.slice(i, i+k);
    console.log(`   Current window: [${window}] | Max:${max} | Result: [${result}]`)
  }
  return result;
}

console.log("\nFinal result: ",maxSliding([1, 3, -1, -3, 5, 3, 6, 7], 3));




























