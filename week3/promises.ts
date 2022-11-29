function mySandwich(param1: string, param2:string): Promise<any>{
    console.log('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);
    let prom = new Promise(function (resolve, reject) {
        let err: boolean = true;
        if (err)
            reject('\nPromise rejected: Did not finish eating my sandwich. It was too much.');
        else
            resolve('\nPromise resolved: Finished eating my sandwich');
    });
    prom.then((res) => {
        console.log(res); 
    }).catch((res) => {
        console.log(res); 
    });
    return prom;
}

let x = mySandwich("Cheese","Tomato");
//console.log(x);

console.log("finished program");
