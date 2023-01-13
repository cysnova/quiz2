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

2.
ans:A
+true;
!"Lydia";
// The output of +true; will be 1.
// The !"Lydia" will return false 

// 3.  ans:C
function sum(a, b) {
    return a + b;
 }

// 4.
// ans:C
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);


// 5.
// !!null: false
// !!"": false.
// !!1: true.

// !!null: false. The double negation operator (!!) coerces the value to a boolean, and null is falsy, so the first negation operator changes it to true, and the second negation operator changes it back to false.
// !!"": false. An empty string is falsy, so the first negation operator changes it to true, and the second negation operator changes it back to false.
// !!1: true. The double negation operator (!!) coerces the value to a boolean, and 1 is truthy, so the first negation operator does not change the value, and the second negation operator also does not change the value, so the final output is true.

6.
console.log(3 + 4 + "5");
ans:B

7.
const num = parseInt("7\*6", 10);
console.log(num);
ans:C

8.
function indexOfIgnoreCase(string1, string2) {
    return string1.toLowerCase().indexOf(string2.toLowerCase());
}

9.
function firstChar(str) {
    str = str.trim()
    if(str.length > 0){
      return str[0];
    }else{
      return "No non-space characters found.";
    }
  }


10.
function normalize(date) {
    return date.replace(/-/g, '/');
  }
