interface Vehicle{
    year: number;
    make: string;
    seats: number;
    info(): string;
}

enum Doors{
    Three = 3,
    Five = 5
}

class Car implements Vehicle{
	model: string = ""; //must initialise if strictPropertyInitialization compiler option is set.     
	year = 2010;
    make = "Toyota"
    seats = 5;
    info(){return "The car contains "+Doors.Five+" doors";}
}

let Toyota = new Car();

console.log(Toyota.info());

for(let x in Doors){
	console.log(x);
}

console.log(Doors[3]);
