// Ques 3: Kth Missing Positive Number
// Given an array arr of positive integers sorted in a strictly increasing order,
// and an integer k. Return the kth positive integer that is missing from this array.

// Input: arr = [2,3,4,7,11], k = 5  ----->>>>>  Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...].
//              The 5th missing positive integer is 9.

// arr = [2,3,4,7,11], k = 5
// count = 4
// 11 <= 9
function findKthPositive(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k + count) {
      count++;
    }
  }

  return k + count;
}

// console.log(findKthPositive([2, 3, 4, 7, 11], 5));

// chatGPT code with console logs 
function findKthPositive(arr, k) {
  let count = 0; // counts how many missing numbers are "skipped" due to elements in arr
  console.log(`Finding ${k}th missing number from [${arr}]`);
  console.log("--------------------------------------------");

  for (let i = 0; i < arr.length; i++) {
    console.log(`\nStep ${i + 1}:`);
    console.log(`Current number in array = ${arr[i]}`);
    console.log(`k + count = ${k + count}`);

    // If the current array number is <= (k + count),
    // it means that this number has "pushed" our missing count further ahead.
    if (arr[i] <= k + count) {
      count++;
      console.log(`✅ arr[i] <= k + count, incrementing count → count = ${count}`);
    } else {
      console.log(`❌ arr[i] > k + count, no increment`);
    }
  }

  console.log("\nAll array elements checked!");
  console.log(`Final count = ${count}`);
  console.log(`Result = k + count = ${k + count}`);
  return k + count;
}

// console.log("\n➡️ Final Output:", findKthPositive([2, 3, 4, 7, 11], 5));



const kThNumber = function(arr, k){
  var count = 0;
  console.log(`Finding ${k}th missing element in the array [${arr}]`)

  for(i=0; i<arr.length; i++){
    console.log(`\nStep: ${i+1}`)
    if(arr[i] <= k+count){
      count++;
      console.log(`✅ arr[i] <= K+count, count = ${count}`)
    } else {
      console.log("❌ arr[i] >= k+count stopping loop")
    }
  }
  console.log("\nAll the elements from the array are checked");
  console.log(`Final count: ${count}`);
  console.log(`➡️  Result: ${count+k} is the ${k}th missing element in the array`)
  return count+k;
}

console.log(kThNumber([2, 3, 4, 7, 11], 5))
