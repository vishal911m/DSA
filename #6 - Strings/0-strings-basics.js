// Strings in Javascript

// Creating Strings
const string = new String("Subscribe to RoadsideCoder!");

// using double quotes
const doubleQuote = "Subscribe to RoadsideCoder!"; 

// using single quotes
const singleQuote = 'RoadsideCoder!'; 

// using backticks
const backticks = `
Subscribe to RoadsideCoder! 
Like this Video
Share this video
`;

// Template Literals
const templateLiteral = `Subscribe to ${singleQuote}!`;

// Tagged Literals
// console.log`hello ${"world"} how are ${"you"}`

// Tagged Literals Example function 
function test (string, youtubeChannel, person) {
		console.log(string,youtubeChannel, person)
    return;
}

const channel = "ThingsCoder"
const name = "Vishal"
// test`Subscribe to ${channel} run by ${name}`

// Strings length
const str = "Subscribe to ThingsCoder!";
str.length

// Accessing Characters
// console.log(str[3])
// console.log(str.charAt(3))

// Looping
for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);  
}

// Modifying Strings
str[3] = "b" // can't do this
// console.log(str.replace("Subscribe","sub")) // replaces first instance of that character or word
str.replaceAll("e","c")// replaces all instance of that character or word

const newStr = str.concat(" and share this video") // joins 2 strings
// console.log(newStr);

const newString = "    Hello  World    "
// console.log(newString.trim()) // removes spaces from beginning and end

// Searching
// console.log(str.indexOf("Coder")) // index of a character or word's first appearance

// console.log(str.lastIndexOf("e")) // index of a character or word's last appearance

// console.log(str.startsWith("S"))  //boolean - returns true if starts with s
// console.log(str.endsWith("!")) //boolean - returns true if ends with !

// Extracting Substrings
// console.log(str.substring(13, 25));
// console.log(str.slice(13, -1) );

// Converting Case
const toBeConverted = {name:"Piyush"}
// console.log(String(toBeConverted)) // [object Object]
// console.log(JSON.stringify(toBeConverted)) // '{"name":"Piyush"}'

// console.log(str.toUpperCase()) // converts to uppercase
// console.log(str.toLowerCase()) // converts to lowercase

// console.log(str.charCodeAt(2)) // returns ASCII Code
// console.log(String.fromCharCode(65)) // returns character from ASCII Code

// String Comparison
const str1 = "apple"
const str2 = "apple"

// console.log(str1.localeCompare(str2)) // compare strings

// console.log(str.includes("Subscribe")) // checks if a word exists inside a string

// Splitting and Joining Strings
console.log(str.split(" "))

const arr = ["apple", "banana"]
console.log(arr.join(" and "))