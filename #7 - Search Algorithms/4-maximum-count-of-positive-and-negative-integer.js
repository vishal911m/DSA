// Ques 4: Maximum Count of Positive Integer and Negative Integer
// Given an array nums sorted in non-decreasing order, return the maximum between
// the number of positive integers and the number of negative integers.

// Input: nums = [-2,-1,-1,1,2,3]  ----->>>>>  Output: 3
// Explanation: There are 3 positive integers and 3 negative integers.
//              The maximum count among them is 3.

function maximumCount(nums) {
  return Math.max(upperBound(nums), lowerBound(nums));
}

// [-2,-1,-1,1,2,3]
// low = 2 , high = 2
// mid = 3 => nums[3] = 1
function upperBound(nums) {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    let mid = Math.ceil((low + high) / 2);
    if (nums[mid] < 0) low = mid;
    else high = mid - 1;
  }

  return nums[0] >= 0 ? 0 : low + 1;
}

function lowerBound(nums) {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] > 0) high = mid;
    else low = mid + 1;
  }

  return nums[nums.length - 1] <= 0 ? 0 : nums.length - low;
}

// console.log(maximumCount([-2, -1, -1, 1, 2, 3]));

// ChatGPT code with console logs 
function maximumCount(nums) {
  console.log("🧩 Input Array:", nums);
  const negatives = upperBound(nums);
  const positives = lowerBound(nums);
  console.log(`✅ Negatives: ${negatives}, Positives: ${positives}`);
  return Math.max(negatives, positives);
}

function upperBound(nums) {
  console.log("\n🔹 Starting upperBound() — Count NEGATIVES");
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    let mid = Math.ceil((low + high) / 2);
    console.log(
      `\n➡️  low=${low}, high=${high}, mid=${mid}, nums[mid]=${nums[mid]}`
    );

    if (nums[mid] < 0) {
      console.log(`   ✅ nums[mid] < 0 → move right (low = mid = ${mid})`);
      low = mid;
    } else {
      console.log(`   ⚠️ nums[mid] >= 0 → move left (high = mid - 1 = ${mid - 1})`);
      high = mid - 1;
    }
  }

  const result = nums[0] >= 0 ? 0 : low + 1;
  console.log(`🔸 upperBound() done → Count of negatives = ${result}`);
  return result;
}

function lowerBound(nums) {
  console.log("\n🔹 Starting lowerBound() — Count POSITIVES");
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    console.log(
      `\n➡️  low=${low}, high=${high}, mid=${mid}, nums[mid]=${nums[mid]}`
    );

    if (nums[mid] > 0) {
      console.log(`   ⚠️ nums[mid] > 0 → move left (high = mid = ${mid})`);
      high = mid;
    } else {
      console.log(`   ✅ nums[mid] <= 0 → move right (low = mid + 1 = ${mid + 1})`);
      low = mid + 1;
    }
  }

  const result = nums[nums.length - 1] <= 0 ? 0 : nums.length - low;
  console.log(`🔸 lowerBound() done → Count of positives = ${result}`);
  return result;
}

// console.log("\n🧾 Final Output:", maximumCount([-2,-1,-1,1,2,3]));














const maxCount = function(nums){
  const max = Math.max(negative(nums), positive(nums));
  return max;
}

// [-2,-1,-1,1,2,3]
const negative = function(nums){
 let low = 0;
 let high = nums.length-1;
 console.log("Finding the negatives");
 while(low<high){
  var mid = Math.ceil((low+high) /2);
  console.log(`\nlow= ${low} high= ${high} mid= ${mid}, nums[mid]= ${nums[mid]}`)
  if (nums[mid] > 0) {
    high = mid-1;
    console.log(`   --> nums[mid]>0, so moving high towards left, high=${high}`)
  } else {
    low=mid;
    console.log(`   --> nums[mid]<0, so moving low towards right, low = mid = ${low}`)
  }
 }

 console.log(`\nNumber of negatives= ${low+1}`)
 return low+1;
}

// console.log("Total negatives: ",negative([-2,-1,-1,1,2,3]));

const positive = function(nums){
  let low = 0;
  let high = nums.length-1;
  console.log("\nFinding the positives");
  
  while(low<high){
    var mid = Math.floor((low+high) /2);
    console.log(`\nlow= ${low} high= ${high} mid= ${mid}, nums[mid]= ${nums[mid]}`)
    if (nums[mid] < 0) {
      low = mid + 1;
      console.log(`   -> nums[mid]<0, so moving low towards right, low= mid+1 =${low}`)
    } else {
      high = mid;
      console.log(`   -> nums[mid]>0, so moving high towards left, high=mid =${mid}`)
    }
  }

  const result = nums.length - low
  console.log(`\nNumber of positives= ${result}`)
  return result;
}

// console.log("Total positives: ",positive([-2,-1,-1,1,2,3]));

console.log("Final Max count: ", maxCount([-2,-1,-1,1,2,3]))