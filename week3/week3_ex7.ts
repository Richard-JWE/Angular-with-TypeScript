/*Video 4*/

let product = (x: number, y: number, z: number) => {return x * y * z;}

let x: number = 2;
let y: number = 3;
let z: number = 4;
let result = product(x, y, z);

//output using template string
console.log(`${x} * ${y} * ${z} = ${result}`);

//output not using template string
console.log(x+" * "+y+" * "+z+" = "+result);
