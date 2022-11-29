let first: number = 2;
let second: number = 3;

if(first == 2 && second == 2){
	console.log("Both numbers entered are equal to two.");
}else if(first == 2 || second == 2){
	if(first == 2){
		console.log("First number entered is equal to 2");
	}else{
		console.log("Second number entered is equal to 2");
	}
}else{
	console.log("Neither number entered is equal to 2");		
}
