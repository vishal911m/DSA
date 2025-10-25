// Sort() Method in Javascript

const fruits = ["dragon fruit", "apple", "date", "cherry", "banana"];

// console.log(fruits.sort());

const nums = [10, 5, 18, 1, 27];

const compareFunction = (a, b) => {
  // 1. <0 => a comes first
  // 2. 0  => nothing changes
  // 3. >0 => b comes first

  return a - b;
};

// console.log(nums.sort(compareFunction));

const people = [
  {name: "Piyush", age: 25},
  {name: "Suyash", age: 22},
  {name: "Raj", age: 30},
  {name: "Ishan", age: 27},
];

const compareFunctionForObj = (a, b) => {
  // 1. <0 => a comes first
  // 2. 0  => nothing changes
  // 3. >0 => b comes first

  return b.age - a.age;
};

// console.log(people.sort(compareFunctionForObj));

// ChatGPT code

const compareFunctionForObj1 = (a, b) => {
  console.log(
    `Comparing "${a.name}" (age ${a.age}) with "${b.name}" (age ${b.age})`
  );

  // 1️⃣ If result < 0 → keep order (a before b)
  // 2️⃣ If result > 0 → swap order (b before a)
  // 3️⃣ If result = 0 → do nothing (equal values)
  const result = a.age - b.age;

  console.log(
    `Result = ${result} → ${
      result < 0
        ? `"${a.name}" stays before "${b.name}"`
        : result > 0
        ? `"${b.name}" moves before "${a.name}"`
        : `No change (same age)`
    }\n`
  );

  return result;
};

// console.log("🔹 Original Array:");
// console.table(people);

// console.log("\n🔹 Sorting by age...");
// const sorted = people.sort(compareFunctionForObj1);

// console.log("\n✅ Final Sorted Array:");
// console.table(sorted);


// ChatGPT code with console logs
// const nums = [10, 5, 18, 1, 27];

const compareFunction1  = (a, b) => {
  const result = b - a;

  console.log(
    `\nComparing a=${a}, b=${b} → b - a = ${result} → ${
      result > 0 ? "✅ result>0, so b comes first" : result < 0 ? "🔁 result<0, so a comes first" : "⚖️ equal"
    }`
  );

  return result;
};

// console.log("\n🔹 Original array:", nums);
// const sorted = nums.sort(compareFunction1);
// console.log("\n🏁 Final sorted array:", sorted);

// chatGPT code 
function debugSort(arr, compareFn) {
  const array = [...arr]; // make a copy to avoid mutating original
  const n = array.length;

  console.log("🔹 Original array:", array);

  for (let i = 0; i < n - 1; i++) {
    console.log(`\n--- Pass ${i + 1} ---`);

    for (let j = 0; j < n - i - 1; j++) {
      const a = array[j];
      const b = array[j + 1];
      const result = compareFn(a, b);

      console.log(
        `Compare a=${a}, b=${b} → result=${result} ${
          result > 0 ? "➡️ swap" : "✅ keep"
        }`
      );

      if (result > 0) {
        // swap if a should come after b
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        console.log("  ↪ swapped:", array);
      }
    }
  }

  console.log("\n✅ Final sorted array:", array);
  return array;
}

// Example usage:
// const nums = [10, 5, 18, 1, 27];

// Ascending order
// debugSort(nums, (a, b) => a - b);

// Descending order
// debugSort(nums, (a, b) => b - a);


const compareFunctions = function(a, b){
 return a-b;
}

console.log(nums.sort(compareFunctions));