const arrayMethodsBreakdown = {
  push: {
    description: "Adds an element to the END of an array.",
    example: `arr.push("orange") → ["apple", "banana", "cherry", "orange"]`,
  },

  pop: {
    description: "Removes the LAST element from the array.",
    example: `arr.pop() → removes last item`,
  },

  unshift: {
    description: "Adds an element to the BEGINNING of the array.",
    example: `arr.unshift("orange") → ["orange", "apple", "banana"]`,
  },

  shift: {
    description: "Removes the FIRST element from the array.",
    example: `arr.shift() → removes index 0 element`,
  },

  map: {
    description:
      "Loops through array & returns a NEW array. Does NOT modify original array.",
    example: `numbers.map(n => n + 5) → [6,7,8,9,10]`,
  },

  filter: {
    description:
      "Returns a NEW array containing elements that pass the condition.",
    example: `numbers.filter(n => n > 3) → [4,5]`,
  },

  reduce: {
    description:
      "Reduces the array to a single value (sum, product, etc.).",
    example: `numbers.reduce((prev, curr) => prev + curr, 0) → 15`,
  },

  some: {
    description:
      "Returns TRUE if **any** element satisfies the condition.",
    example: `numbers.some(n => n > 10) → false`,
  },

  every: {
    description:
      "Returns TRUE only if **all** elements satisfy the condition.",
    example: `numbers.every(n => n < 10) → true`,
  },

  find: {
    description:
      "Returns the FIRST element that matches the condition.",
    example: `numbers.find(n => n > 3) → 4`,
  },

  concat: {
    description: "Merges two or more arrays. Returns a NEW array.",
    example: `nums.concat(nums1) → [1,2,3,4,5,6,7,8,9,10]`,
  },

  slice: {
    description:
      "Returns a part of the array WITHOUT modifying the original.",
    example: `arr.slice(0,2) → items at index 0 & 1`,
  },

  splice: {
    description:
      "Adds/removes elements at specific positions. **Modifies original array**.",
    example: `arr.splice(1, 2, "brocolli") → removes 2 items, inserts 'brocolli'`,
  },

  fill: {
    description:
      "Replaces array elements with a static value from start to end.",
    example: `dummy.fill(2,2) → fills from index 2 to end with 2`,
  },

  flat: {
    description: "Flattens nested arrays to given depth.",
    example: `flatEx.flat(2) → [1,2,3,4,5,6]`,
  },

  reverse: {
    description:
      "Reverses the array **in place** (modifies original).",
    example: `nums.reverse() → [5,4,3,2,1]`,
  },

  sort: {
    description:
      "Sorts array **in place**. Needs compare function for numeric sort.",
    example: `unsorted.sort((a,b) => a - b) → ascending order`,
  },

  spreadOperator: {
    description:
      "Expands elements of an array.",
    example: `[...nums, ...nums1]`,
  },

  restOperator: {
    description:
      "Collects multiple arguments into an array.",
    example: `function sum1(...numbers) { }`,
  }
};

export default arrayMethodsBreakdown;

// Arrays - declaration

let person = {
  name: "Vishal",
  age: "29"
};

let arr = ["apple", "banana", "cherry", person];

// console.log(arr.length);

// Arrays - add and remove elements

// Add to end of the array
arr.push("orange");

// Remove from end of the array
// arr.pop();
// arr.pop();


// Add to top of the array
arr.unshift("orange");

// Remove from top of the array
arr.shift();
// console.log(arr);

// Looping an array

// For loop
for (let i=0; i<arr.length; i++){
  // console.log(arr[i]);
}

//While loop

let i=0;

while(i < arr.length){
  // console.log(arr[i]);

  i++
};

// Inbuilt loop methods
const numbers = [1,2,3,4,5];

// map in javascript
numbers.map((item, index, array)=>{
  // console.log(item, index, array)
  return (item + 5);
});

// const newNums = numbers.map((item, index, array)=>{
//   // console.log(item, index, array)
//   return (item + 5);
// });

// console.log(newNums);

// Filter in javascript
const filter = numbers.filter((item, index, array)=>{
  // console.log(item, index, array)
  return item > 3
});

// console.log(newNums);

// Reduce in javascript
const reduce = numbers.reduce((prev, item) => {
  return prev + item;
}, 0);

// console.log(newNums);

// Some in javascript
const sum = numbers.some((item)=>{
  return item>3;
})

// console.log(sum);

// Every in javascript
const every = numbers.every((item)=>{
  return item<10;
})

// console.log(every)

// Find in javascript
const find = numbers.find((item)=>{
  return item>3;
})

// console.log(find);

// Spread and rest operators

const nums = [1,2,3,4,5];
const nums1 = [6,7,8,9,10];

const finalNums = [...nums, ...nums1]; //Spread operator
// console.log(finalNums);

function sum1(...numbers){  // Rest operator
  return numbers;
}

// console.log(sum1(nums, nums1, 5, "hello"));

// More array methods

// concat 
// const concat = nums.concat(nums1, arr);

// Slice
// console.log(arr);
// const slice = arr.slice(0,2); //include the item at index 0 and reject the item at index 2
// const slice = arr.slice(-1); // here -1 is the element from the last

// console.log(slice);

// Splice 
// console.log(arr);
// const splice = arr.splice(1, 2, "brocolli");
// console.log(splice);
// console.log(arr);

// Fill 
const dummy = [2,5,1,6];
dummy.fill(2,2);

// console.log(dummy);

// Flat
const flatEx = [1, [2,3], [[4,5], 6]]

const flattenedArray = flatEx.flat(2);
// console.log(flattenedArray);

// Reverse an array
// console.log(nums);
nums.reverse();
// console.log(nums);

// Sort an array
const unsorted = [5,2,10,7,3,1];
unsorted.sort((a,b)=> a-b); // for descending order, use b-a
// console.log(unsorted);


// Sum of all numbers in a nested array

// let result = 0;
// const sumNested = (arr)=>{
// 	for(let item of arr){
// 		if(Array.isArray(item)){
// 			sumNested(item)
// 		} else {
// 			result += item
// 		}
// 	}
// }

// sumNested([1,2,3,[1,2,3]]);
// console.log(result)

// Sum of all numbers in a nested array - With console logs
let result = 0;

const sumNested = (arr) => {
  console.log("➡️ Calling sumNested with:", arr);

  for (let item of arr) {
    console.log("\n Checking item:", item);

    // Check if item is an array
    if (Array.isArray(item)) {
      console.log("   📦 Item is an array, going deeper...");
      sumNested(item); // recursion
      console.log("   ↩️ Returned from nested array:", item);

    } else {
      // If it's a number, add it to result
      console.log(`   ➕ Adding number ${item} to result`);
      result += item;
      console.log("   🧮 Current result =", result);
    }
  }

  console.log("⬅️ Exiting sumNested for:", arr);
};

sumNested([1, 2, 3, [1, 2, 3]]);
console.log("✅ Final Result =", result);

// Flatten using recursion 
let output = [];

const flattenNested = (arr) => {
  for (let item of arr) {
    if (Array.isArray(item)) {
      flattenNested(item); // recursive call
    } else {
      output.push(item);   // push into final flat array
    }
  }
};

flattenNested([1, 2, 3, [4,5,6, [7,8,9]]]);
console.log(output);





