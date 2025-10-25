// Ques 4 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

// 1st Approach
const isAnagram1 = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s === t;
};

// anagram => [a,n,a,g,r,a,m] => [a,a,a,m,n,r] => aaamnr
// nagaram => [n,a,g,a,r,a,m] => [a,a,a,m,n,r] => aaamnr


// ChatGPT code using objects
const isAnagram = function (s, t) {
  console.log(`Checking if "${s}" and "${t}" are anagrams...`);

  if (s.length !== t.length) {
    console.log("Lengths are different → Not anagrams");
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  // Count characters
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;

    console.log(
      `Step ${i+1}:`,
      `s[${i}]="${s[i]}", t[${i}]="${t[i]}"`,
      `| obj1=`, obj1,
      `| obj2=`, obj2
    );
  }

  console.log("\nFinal frequency maps:");
  console.log("obj1:", obj1);
  console.log("obj2:", obj2);

  // Compare counts
  for (const key in obj1) {
    console.log(`Checking key "${key}": obj1=${obj1[key]} vs obj2=${obj2[key]}`);
    if (obj1[key] !== obj2[key]) {
      console.log("❌ Mismatch found → Not anagrams");
      return false;
    }
  }

  console.log("✅ All counts match → They are anagrams");
  return true;
};

// console.log("Result:", isAnagram("anagram", "nagaram"));


























const anagram = function(x,y){
  const splitX = x.split("");
  console.log("Splitting:", splitX)

  const sortX = splitX.sort();
  console.log("Sorting", sortX);

  const joinX = sortX.join("");
  console.log("Joining:", joinX);

  const splitY = y.split("");
  console.log("Splitting:", splitX)

  const sortY = splitY.sort();
  console.log("Sorting", sortY);

  const joinY = sortY.join("");
  console.log("Joining:", joinY);

  // if (joinX === joinY);
  return (joinX === joinY);
}

// console.log("Result: ",anagram("anagram", "nagaram"));


const anagram1 = function(x,y){
  var obj1={};
  var obj2={};

  console.log(`Checking if "${x}" and "${y}" are anagrams`)
  if(x.length !== y.length){
      console.log("The two strings are not of the same length");
      return false;
    }

  for(i=0; i<x.length; i++){
    obj1[x[i]] = (obj1[x[i]] || 0) + 1;
    obj2[y[i]] = (obj2[y[i]] || 0) +1;

    console.log(
      `Step ${i+1}`,
      `x[${i}] = "${x[i]}", y[${i}] = "${y[i]}"`,
      `| obj1 = `, obj1,
      `| obj2 = `, obj2
    )
  }

  console.log(`\nFinal anagram set: obj1=${JSON.stringify(obj1)} | obj2=${JSON.stringify(obj2)}`)

  for(let key in obj1){
    console.log(`Comparing key=${key} obj1[${key}] = ${obj1[key]} | obj2[${key}] = ${obj2[key]}`)
    if(obj1[key] !== obj2[key]) {
      console.log("\nMismatch found, not anagram.")
      return false;
    }
  }

  console.log(`\nThey are anagrams.`)
  return true
}

console.log(anagram1("anagram", "nagaram"));