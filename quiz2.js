1.
function greeting() {
    console.log(name);
    console.log(age);
    var name = "Hana";
    let age = 21;
    }

// ans:D
//  a ReferenceError 
// "name" and "age" are declared within the function, they are not accessible outside of it. Also the function will throw a ReferenceError because variables declared with "var" are hoisted to the top of the scope, so the variable name is defined but not assigned a value yet when it's referenced in the first console.log().
___________________________________________________________
2.
ans:A
+true;
!"Lydia";
// The first statement +true; will convert the boolean value true to number 1, so the first output of that statement will be 1.
// The second statement !"Lydia"; will convert the string "Lydia" to boolean false as it's a non-empty string and negate it, so the second output of that statement will be false.
___________________________________________________________
// 3.  ans:C
function sum(a, b) {
    return a + b;
 }
//  Javascript concatenate the two input arguments as they are passed as a string and a number.
_____________________________________________________________
// 4.
// ans:C
let number = 0; 
console.log(number++); //The current value of number (0) is logged to the console,then incremented by 1
console.log(++number);//The value of number is incremented by 1,The new value of number (2) is logged to the console
console.log(number);//finally it logs the current value of number, which is 2.
________________________________________________________________

// 5.
// !!null: false
// !!"": false.
// !!1: true.

// !!null: false. The double negation operator (!!) coerces the value to a boolean, and null is falsy, so the first negation operator changes it to true, and the second negation operator changes it back to false.
// !!"": false. An empty string is falsy, so the first negation operator changes it to true, and the second negation operator changes it back to false.
// !!1: true. The double negation operator (!!) coerces the value to a boolean, and 1 is truthy, so the first negation operator does not change the value, and the second negation operator also does not change the value, so the final output is true.
_________________________________________________________________________
6.
console.log(3 + 4 + "5");
ans:B
// when an operator is used with a mixture of numbers and strings, JavaScript converts numbers to strings and concatenates them.
___________________________________________________________________________
7.
const num = parseInt("7\*6", 10);
console.log(num);
ans:C
// parseInt() only takes the first valid number in the string and ignore the rest, so it returns 7 and ignore the "*6"

_____________________________________________________________________
8.
function indexOfIgnoreCase(string1, string2) {
    return string1.toLowerCase().indexOf(string2.toLowerCase());
}
// This function uses the toLowerCase() method to convert both str and search to lowercase before using the indexOf() method to find the index of the first occurrence of search in str. This allows the function to be case-insensitive.
______________________________________________________
9.
function firstChar(str) {
    str = str.trim()
    if(str.length > 0){
      return str[0];
    }else{
      return "No non-space characters found.";
    }
  }
  // This function uses a for loop to iterate through the characters in the string. It checks if the current character is not a space and if it is not, it returns that character. If it finds no non-space characters in the string it returns undefined.
_______________________________________________________
10.
function normalize(date) {
    return date.replace(/-/g, '/');
  }

  // This function uses the replace() method to replace all instances of '-' with '/' in the date string. The g flag is used to specify that all matches of the pattern should be replaced rather than just the first one.