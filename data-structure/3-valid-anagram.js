// valid anagram
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// using all the original letters exactly once

// Input: (s = "anagram"), (t= "nagaram");  ----->>>>> Output: true;
// Input: (s= "rat"), (t= "car");           ----->>>>> Output: false;

// // 1st approach - normal approach
// const isAnagram = function(s,t){
//   s = s.split("").sort().join("");
//   t = t.split("").sort().join("");

//   return s === t;
// }

// console.log(isAnagram("anagram", "nagaram"));

//anagram .split("") → ["a","n","a","g","r","a","m"] .sort() → ["a","a","a","g","m","n","r"] .join() → "aaagmnr"
//nagaram .split("") → ["n","a","g","a","r","a","m"] .sort() → ["a","a","a","g","m","n","r"] .join() → "aaagmnr"

// 2nd approach - using objects
const isAnagram = function(s,t){
  if(s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for(let i=0; i<s.length; i++){
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (const key in obj1){
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"));























