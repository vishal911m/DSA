// Ques 6 - Subsets ( Backtracking Algorithm using Recursion )
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0]      ----->>>>>  Output: [[],[0]]

// function subsets(nums) {
//   let result = [];
//   let temp = [];

//   function recursiveSubsets(nums, i) {
//     if (i === nums.length) {
//       return result.push([...temp]);
//     }

//     temp.push(nums[i]);
//     recursiveSubsets(nums, i + 1);
//     temp.pop();
//     recursiveSubsets(nums, i + 1);
//   }

//   recursiveSubsets(nums, 0);
//   return result;
// }

// console.log(subsets([1,2,3]));

// // chatGPT code with console logs
// function subsets(nums) {
//   let result = [];
//   let temp = [];

//   function recursiveSubsets(nums, i) {
//     console.log(`Called with i=${i}, temp=[${temp}]`);

//     // Base case: if we've reached the end of the array
//     if (i === nums.length) {
//       console.log(`✅ End reached. Pushing subset: [${temp}]`);
//       result.push([...temp]);
//       return;
//     }

//     // Include nums[i]
//     console.log(`--> Include nums[${i}]=${nums[i]}`);
//     temp.push(nums[i]);
//     recursiveSubsets(nums, i + 1);

//     // Exclude nums[i]
//     console.log(`<-- Backtrack, remove ${temp[temp.length - 1]} from temp`);
//     temp.pop();
//     console.log(`--> Exclude nums[${i}]=${nums[i]}`);
//     recursiveSubsets(nums, i + 1);
//   }

//   recursiveSubsets(nums, 0);
//   return result;
// }

// console.log("Final Result:", subsets([1, 2, 3]));

/* 
description 1:
Start: []
i=0 (nums[0]=1)
├── Include 1 → [1]
│   i=1 (nums[1]=2)
│   ├── Include 2 → [1,2]
│   │   i=2 (nums[2]=3)
│   │   ├── Include 3 → [1,2,3] ✅
│   │   └── Exclude 3 → [1,2]   ✅
│   │
│   └── Exclude 2 → [1]
│       i=2 (nums[2]=3)
│       ├── Include 3 → [1,3] ✅
│       └── Exclude 3 → [1]   ✅
│
└── Exclude 1 → []
    i=1 (nums[1]=2)
    ├── Include 2 → [2]
    │   i=2 (nums[2]=3)
    │   ├── Include 3 → [2,3] ✅
    │   └── Exclude 3 → [2]   ✅
    │
    └── Exclude 2 → []
        i=2 (nums[2]=3)
        ├── Include 3 → [3] ✅
        └── Exclude 3 → []  ✅


desciption 2:
Called with i=0, temp=[]
├── --> Include nums[0]=1
│   Called with i=1, temp=[1]
│   ├── --> Include nums[1]=2
│   │   Called with i=2, temp=[1,2]
│   │   ├── --> Include nums[2]=3
│   │   │   Called with i=3, temp=[1,2,3]
│   │   │   ✅ End reached. Pushing subset: [1,2,3]
│   │   └── <-- Backtrack, remove 3
│   │       --> Exclude nums[2]=3
│   │       Called with i=3, temp=[1,2]
│   │       ✅ End reached. Pushing subset: [1,2]
│   │
│   └── <-- Backtrack, remove 2
│       --> Exclude nums[1]=2
│       Called with i=2, temp=[1]
│       ├── --> Include nums[2]=3
│       │   Called with i=3, temp=[1,3]
│       │   ✅ End reached. Pushing subset: [1,3]
│       └── <-- Backtrack, remove 3
│           --> Exclude nums[2]=3
│           Called with i=3, temp=[1]
│           ✅ End reached. Pushing subset: [1]
│
└── <-- Backtrack, remove 1
    --> Exclude nums[0]=1
    Called with i=1, temp=[]
    ├── --> Include nums[1]=2
    │   Called with i=2, temp=[2]
    │   ├── --> Include nums[2]=3
    │   │   Called with i=3, temp=[2,3]
    │   │   ✅ End reached. Pushing subset: [2,3]
    │   └── <-- Backtrack, remove 3
    │       --> Exclude nums[2]=3
    │       Called with i=3, temp=[2]
    │       ✅ End reached. Pushing subset: [2]
    │
    └── <-- Backtrack, remove 2
        --> Exclude nums[1]=2
        Called with i=2, temp=[]
        ├── --> Include nums[2]=3
        │   Called with i=3, temp=[3]
        │   ✅ End reached. Pushing subset: [3]
        └── <-- Backtrack, remove 3
            --> Exclude nums[2]=3
            Called with i=3, temp=[]
            ✅ End reached. Pushing subset: []
 
*/




// // ChatGPT animation code 
// // Animated recursion logger for subsets
// function generateSubsetLogs(nums) {
//   const logs = [];
//   const result = [];
//   const temp = [];

//   function rec(i, indent) {
//     logs.push({ text: `Called with i=${i}, temp=[${temp.join(", ")}]`, indent });

//     if (i === nums.length) {
//       // capture snapshot of current temp for the push log and also save the subset
//       logs.push({ text: `✅ End reached. Pushing subset: [${temp.join(", ")}]`, indent });
//       result.push([...temp]);
//       return;
//     }

//     // INCLUDE path
//     logs.push({ text: `--> Include nums[${i}] = ${nums[i]}`, indent });
//     temp.push(nums[i]);

//     rec(i + 1, indent + 1);

//     // BACKTRACK after the include branch returns
//     logs.push({ text: `<-- Backtrack, remove ${nums[i]} from temp`, indent });
//     temp.pop();

//     // EXCLUDE path
//     logs.push({ text: `--> Exclude nums[${i}] = ${nums[i]}`, indent });
//     rec(i + 1, indent + 1);
//   }

//   rec(0, 0);
//   return { logs, result };
// }

// async function printAnimated(logs, ms = 600) {
//   for (const entry of logs) {
//     const padding = " ".repeat(entry.indent * 4); // 4 spaces per indent level
//     console.log(padding + entry.text);
//     // wait 'ms' milliseconds
//     await new Promise((res) => setTimeout(res, ms));
//   }
// }

// // run it (wrap in async IIFE for top-level await compatibility)
// (async function runDemo() {
//   const nums = [1,2,3];
//   const { logs, result } = generateSubsetLogs(nums);

//   console.log("Animating recursion for subsets(", nums, ")");
//   console.log("---- start animation ----\n");
//   await printAnimated(logs, 500); // change delay (ms) if you want faster/slower

//   console.log("\n---- end animation ----");
//   console.log("Final Result (all subsets):", result);
// })();




function subset(nums){
  var result = [];
  var temp = [];

  function recursiveSubset(nums, i){
    console.log(`Calling with i="${i}" | temp=[${temp}] `)
    if(i === nums.length){
      console.log(`✅ Base case reached. Pushing subset: [${temp}]`);
      result.push([...temp]);
      return
    }

    // Include
    temp.push(nums[i]);
    console.log(`--> Including nums[${i}] = ${nums[i]}`);
    recursiveSubset(nums, i+1);

    // Exclude
    console.log(`<-- Backtracking. Removing temp[${[temp.length - 1]}] = ${temp[temp.length - 1]}`);
    console.log(`--> Excluding nums[${i}] = ${nums[i]}`);
    temp.pop();
    recursiveSubset(nums, i+1);
  }

  recursiveSubset(nums, 0);
  return result;
}

console.log("Final subsets:", subset([1,2,3]));
