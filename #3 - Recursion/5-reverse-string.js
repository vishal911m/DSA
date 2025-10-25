// Ques 5 - Reverse a String
// Input: "hello"  ----->>>>>  Output: "olleh"

// function reverseString(str) {
//   if (str === "") {
//     return "";
//   } else return reverseString(str.substr(1)) + str.charAt(0);
// }

// console.log(reverseString("hello")); //=> olleh

// // ChatGPT code with console logs 
// function reverseString(str) {
//   console.log("Input String:", str);

//   if (str === "") {
//     console.log("Base case reached: return empty string");
//     return "";
//   } else {
//     const rest = str.substr(1);
//     const firstChar = str.charAt(0);

//     console.log(`Splitting -> rest: "${rest}", firstChar: "${firstChar}"`);

//     const reversed = reverseString(rest) + firstChar;

//     console.log(
//       `Returning: reverseString("${rest}") + "${firstChar}" = "${reversed}"`
//     );

//     return reversed;
//   }
// }

// console.log("Final Answer:", reverseString("palindrome"));






















function reversedString(str){
  console.log("Input String: ", str);
  if(str === ""){
    console.log("Base case reached, returning empty.")
    return ""
  } else {
    const rest = str.substr(1);
    const firstChar = str.charAt(0);
    console.log(
      `Splitting -> Rest: "${rest}" | First character: "${firstChar}" `
    )

    const reversed = reversedString(str.substr(1)) + str.charAt(0);

    console.log(
      `Reversing -> reversedString("${rest}") + First Character("${firstChar}" = ${reversed})`
    )
    return reversed;
  };
}

console.log("Final reversed String:", reversedString("hello"));