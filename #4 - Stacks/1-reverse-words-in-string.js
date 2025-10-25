// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// "the sky is blue" => [the,sky,is,blue]
// [] => [the,sky,is,blue] => blue is sky the

// const reverseWords = function (s) {
//   const splitS = s.split(" ");
//   const stack = [];

//   for (let i of splitS) {
//     stack.push(i);
//   }

//   let finalS = "";

//   while (stack.length) {
//     const current = stack.pop();

//     if (current) {
//       finalS += " " + current;
//     }
//   }

//   return finalS.trim();
// };

// console.log(reverseWords("the sky is blue"));
// console.log(reverseWords("a good   example"));

// // Time Complexity = O(n)
// // Space Complexity = O(n)

// // chatGPT code with console logs
// const reverseWords = function (s) {
//   console.log("\nInput string:", JSON.stringify(s));

//   const splitS = s.split(" ");
//   console.log("After split:", splitS);

//   const stack = [];

//   for (let i of splitS) {
//     stack.push(i);
//     console.log(`Pushed -> "${i}" | Stack:`, stack);
//   }

//   let finalS = "";

//   while (stack.length) {
//     const current = stack.pop();
//     console.log(`Popped -> "${current}" | Stack:`, stack);

//     if (current) {
//       finalS += " " + current;
//       console.log(`Added to finalS: "${finalS}"`);
//     } else {
//       console.log("Skipped empty string due to extra spaces");
//     }
//   }

//   console.log("Before trim:", JSON.stringify(finalS));
//   const result = finalS.trim();
//   console.log("Final result:", JSON.stringify(result));
//   return result;
// };

// console.log("Output 1:", reverseWords("the sky is blue"));
// // console.log("Output 2:", reverseWords("a good   example"));
















const revereWords = function(s){
  console.log("Input string: ", JSON.stringify(s));
  var splitS = s.split(" ");
  console.log("After splitting: ", splitS);
  var stack = [];

  for (let i of splitS){
    stack.push(i);
    console.log(`--> Pushing "${i}" | Stack = ${stack}`)
  }

  var finalS = "";

  while(stack.length){
    const current = stack.pop();
    console.log(`--> Popping ${current} | Stack: ${stack}`)

    if(current){
      finalS += " " + current;
      console.log("Reversed words: ", finalS)
    }
  }

  return finalS.trim();
}

console.log("Reversed words: ",revereWords("my name is vishal"));


