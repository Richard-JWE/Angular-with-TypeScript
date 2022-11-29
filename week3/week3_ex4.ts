/*Video 5*/

enum Months{
    January,
    February,
	March,
	April,
	May,
	June,
	July,
	August,
	Sepetember,
	October,
	November,
	December
}

for(let x in Months){
	console.log(x);
}
let i:number = new Date().getMonth();

console.log("\nCurrent month: "+Months[i]);
