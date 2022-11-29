/*Video 5*/

function beverage(name: string, drank: boolean): Promise<any>{
    console.log("Consuming "+name);
    let prom = new Promise(function (resolve, reject) {
        if (drank) {
            resolve('Finished drinking');
        } else {
            reject('Did not drink all of the');
         }
         
    });
    prom.then((res) => {
        console.log(res + " " + name); 
    }).catch((res) => {
        console.log(res + " " + name); 
    });
    return prom;
}

beverage("tea",true);

console.log("finished program");