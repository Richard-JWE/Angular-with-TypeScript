
function hello1() { 
    console.log("hello");
}

hello1();

function hello2(name: string) { 
    console.log("hello " + name);
}

hello2("Kevin");

function hello3(firstname: string, lastname: string) { 
    console.log("hello " + firstname + " " + lastname);
}
hello3("John", "Smith");

function sum1(x: number, y: number): number{ 
    let result: number = x + y;
    return result;
}

let mySum1: number = sum1(4, 3);
console.log(mySum1);

function sum2(x: number, y: number, z: number): number{ 
    return x + y + z;
}

let mySum2: number = sum2(4, 3, 9);
console.log(mySum2);

let hello1Arrow = () => { return "hello arrow function";}
console.log(hello1Arrow());

let arrFuncRes = (x:number, y:number) => { return x + y; };

console.log(arrFuncRes(11,100));
