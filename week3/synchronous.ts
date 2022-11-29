function mySandwich1(param1: string, param2:string): string{
    console.log('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);
    let sync: string = "Finished eating my sandwich";
    return sync;
}

let x = mySandwich1("Cheese","Tomato");

console.log(x);

console.log("finished program");
