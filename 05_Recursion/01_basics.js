// Recusion is a same as iterative approach, it define a function and callback until fullfilled the requirement.
// recursion when it call again and again iteself with different parameters.

// factorial example

function factorial(num) {
    // Base case 
    if (num === 0) {
        return 1;
    }

    // Recurion part
    return num * factorial(num - 1)
}
console.log(factorial(5));

// printNum
function printNum(min, max){
    // base case
    if (min > max) {
        return
    }

    printNum(min + 1, max)
    console.log(min);

}
// console.log(printNum(1,5));

function printNum(min, max) {
    // Base case 
    if(min > max){
        return 
    }
    
    console.log(min)
    printNum(min + 1, max)
}
console.log(printNum(1,5))

// reverse a string

// iterative approach
// hello

function reverseString(string) {
    let reverse = ""
    let length = string.length - 1

    while (length >= 0 ) {
        reverse = reverse + string[length]
        length = length - 1
    }
    return reverse
}
console.log(reverseString('hello'));

// Recursive approach

function recursiveStringReverse(string){
   
    return recursiveStringReverse(string.substring(string[length - 1]))
}