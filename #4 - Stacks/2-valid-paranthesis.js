// Ques 2 : Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//          determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: "()"             ----->>>>>        Output: true
// Input: "([]{})"         ----->>>>>        Output: true
// Input: "(]"             ----->>>>>        Output: false

// function isValid(s) {
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];

//     if (char === "(" || char === "[" || char === "{") {
//       stack.push(char);
//     } else if (char === ")" || char === "]" || char === "}") {
//       if (isEmpty(stack)) {
//         return false;
//       }

//       const top = stack.pop();
//       if (
//         (char === ")" && top !== "(") ||
//         (char === "]" && top !== "[") ||
//         (char === "}" && top !== "{")
//       ) {
//         return false;
//       }
//     }
//   }

//   return isEmpty(stack);
// }

// function isEmpty(stack) {
//   return stack.length === 0;
// }

// const string1 = "([{})";
// console.log(isValid(string1));

// // Time Complexity = O(n)
// // Space Complexity = O(n)

// chatGPT code with console logs
// function isValid(s) {
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     console.log(`\nStep ${i + 1}: Processing '${char}'`);

//     if (char === "(" || char === "[" || char === "{") {
//       stack.push(char);
//       console.log(`Pushed '${char}' → Stack: [${stack.join(", ")}]`);
//     } else if (char === ")" || char === "]" || char === "}") {
//       if (isEmpty(stack)) {
//         console.log("❌ Stack is empty when expecting a match → Invalid");
//         return false;
//       }

//       const top = stack.pop();
//       console.log(`Popped '${top}' for '${char}' → Stack: [${stack.join(", ")}]`);

//       if (
//         (char === ")" && top !== "(") ||
//         (char === "]" && top !== "[") ||
//         (char === "}" && top !== "{")
//       ) {
//         console.log(`❌ Mismatch: expected matching for '${char}', but found '${top}'`);
//         return false;
//       } else {
//         console.log(`✅ Match found: '${top}' with '${char}'`);
//       }
//     }
//   }

//   console.log(`\nFinal Stack: [${stack.join(", ")}]`);
//   return isEmpty(stack);
// }

// function isEmpty(stack) {
//   return stack.length === 0;
// }

// // Test case
// const string1 = "([{}])";
// console.log("\nResult:", isValid(string1));
































function isValid(s){
  const stack = [];

  for (let i=0; i<s.length; i++){
    const word = s[i];

    if(word === "(" || word === "{" || word === "["){
      stack.push(word)
    } else if (word === ")" || word === "}" || word === "]"){
      if(isEmpty(stack)){
        return false;
      }

      const top = stack.pop();
      
      if((word === ")" && top !== "(") ||
        (word === "}" && top !== "{") ||
        (word === "]" && top !== "[")
      ){
        return false
      }
    }
  }

  return isEmpty(stack);
}

function isEmpty(stack){
  return stack.length === 0;
}

const string = "({[]})";

console.log(isValid(string));