// Ques 1 : Truncate the text
// Write a function called truncate that checks the length of a given string - str, and if
// it surpasses a specified maximum length, maxlength, it replaces the end of the string
// with the ellipsis character "..." so that the length matches the maximum length

// Input: str = "Subscribe to ThingsCoder" , maxlength=9
// Output: "Subscribe…"

const truncate = function(string, maxLength){
  if(string.length > maxLength){
    return string.slice(0, maxLength) + "...";
  } else return string
}

console.log(truncate("Subscribe to ThingsCoder",9));
