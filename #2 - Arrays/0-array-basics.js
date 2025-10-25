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
const splice = arr.splice(1, 2, "brocolli");
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
console.log(unsorted);
