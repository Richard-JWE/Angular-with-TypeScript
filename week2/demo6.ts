/*Logical Operators

&& - And - *
|| - Or - +

True - 1
False - 0

1 * 1 = 1 
1 * 0 = 0

1 + 1 = 1
0 + 1 = 1
0 + 0 = 0
*/

let age = 20;

if(age >= 18 && age <= 30){
	console.log("Valid age");
}else{
	console.log("Invalid age");
}

let country = "UK";

if(country == "Ireland" || country == "UK"){
	console.log("Valid address");
}else{
	console.log("Invalid address");
}

if(age >= 18 && age <= 30 && (country == "Ireland" || country == "UK")){
	console.log("Application accepted");
}else{
	console.log("Application rejected");	
}

