/*Exercise 1 - Video 2 - Arrays*/

//a.
let days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

days.forEach(function(element) {
  console.log(element);
});

//b.
let numbers: number[] = [2, 4, 6, 8, 9, 10];

//remove 9 from array
numbers.splice(4, 1);

console.log("Array after removing value: "+numbers);

//add 9 back into array
numbers.splice(4, 0, 9);

console.log("Array after inserting value: " + numbers);

//c.
let array1: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// pass a function to map
let map1:number[] = array1.map(x => x.length);

console.log(map1);

