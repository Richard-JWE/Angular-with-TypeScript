// create array
// array literal

let empty:any[] = []; // An array with no elements
console.log(empty); // []

let primes: number[] = [2, 3, 5, 7, 11]; // An array with 5 numeric elements, type specified
console.log(primes); // [ 2, 3, 5, 7, 11 ]

let primes1 = [2, 3, 5, 7, 11]; // An array with 5 numeric elements
console.log(primes1); // [ 2, 3, 5, 7, 11 ]

let misc: any = [ 1.1, true, "a" ]; // 3 elements of various types + trailing comma
console.log(misc); // [ 1.1, true, "a" ]

//array constructor
let a = new Array(); // no arguments. Empty array.
console.log(a); // []

let b: any[] = new Array(10); // single numeric argument, which specifies a length
console.log(b); // [ <10 empty slots> ]

// specify two or more array elements 
let c: number[] = new Array(5, 4, 3, 2, 1); 
console.log(c); // [ 5, 4, 3, 2, 1, "testing, testing" ]

// Note: Using an array literal is almost always simpler 
// than the usage of the Array() constructor.

// array length - use length property to determine number of elements array can or does store.
let d: number[] = new Array(5, 4, 3, 2, 1);
console.log(d.length); // 5

// create an empty array and add some elements and delete some.
let e = [];
e[0] = "First element";
e[1] = "Second element";
e[2] = "Third element";
delete e[1]; // removes Second element
console.log(e); //[ "First element", <1 empty slot>, "Third element" ]
console.log(e[2]); // Second element
console.log(e.length) // still 3, just removed the value assigned to index 1 and not index 1. 
console.log(1 in e); // returns false as no value assigned to index 1.
console.log(0 in e); // // returns true


// pop - removes the last element from an array and returns that element
let f = ["First", "Second", "Third", "Fourth"];
let x: string = f.pop();
console.log(x); // Fourth
console.log(f); // [ "First", "Second", "Third" ]

// push - adds one or more elements to the end of an array and returns the new length of the array.
let g: string[] = ["First", "Second"];
console.log(g.push("Third")); // 3
console.log(g); // [ "First", "Second", "Third" ]


// splice - changes the contents of an array by removing existing elements and/or adding new elements.
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
let h = ["First", "Second", "Third", "Fourth"];
let i = h.splice(1, 2);
console.log(h); // [ "First", "Fourth" ]
console.log(i); // ["Second", "Third"]

// sort - sorts the elements of an array, string alphbetically and numbers in ascending order.
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 
let numbers: number[] = [3, 1, 4, 2, 6, 5];
console.log(numbers.sort()); // [ 1, 2, 3, 4, 5, 6 ]
var names: string[] = ["Joe", "Amy", "Evelyn", "Dermot"];
console.log(names.sort()); [ "Amy", "Dermot", "Evelyn", "Joe" ]

// search arrays with indexOf - returns the first index at which a given element can be found 
// in the array, or -1 if it is not present
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
let months = ["January", "February", "March"];
console.log(months.indexOf("February")); // 1
console.log(months.indexOf("October")); // -1

// multi-dimensional array
let mda = [[1, 2, 3],["Test 1", "Test 2"]];
console.log(mda[0][2]); // 3
console.log(mda[0][0]); // 1
console.log(mda[1][1]); // Test 2
console.log(mda[0]); 

let array1 = mda[0];
console.log(array1); // [ 1, 2, 3 ]
for(let i = 0; i < array1.length; i++)
	console.log(array1[i]); // 1 2 3

// forEach - executes a provided function once for each array element.
array1.forEach(function(element:any) {
  console.log(element); // 1 2 3
});

// iterate a multidimensional array
for(let i = 0; i < mda.length; i++)
	for(let j = 0; j < mda[i].length; j++)
		console.log(mda[i][j]); // 1 2 3 Test 1 Test 2
	

//Have a look at this page 	
//https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
//Alternative approaches to standard loop for/while or using the forEach method on an array
//Can use this approach instead if you prefer.


// Map Function

/*Transform arrays
A function is applied to each element within the array.
After the function is applied to each of the elements of the array, each of those elements is added to a new array.
ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/

//example
let singles: number[] = [1, 2, 3];
let doubles: number[] = singles.map(function(el){
	return el * 2; }
);
//note: function doubles the values from the original array singles and assigns to new values to a new array doubles

console.log("Singles array: "+singles);
console.log("Doubles array: "+doubles);
	
