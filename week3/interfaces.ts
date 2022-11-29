interface Vehicle{
    year: number;
    make: string;
    seats: number;
    info(): string;
	
}

class Car implements Vehicle{
    model: string = ""; 
    year;
    make: string;
    seats = 5;
    info(){
		return "This is the car object which implements the vehicle interface";
	}
	
}

let Toyota = new Car();
Toyota.model = "Avensis"; //from the class
Toyota.year = 2013;
Toyota.make = "Toyota";

console.log("Car is a "+Toyota.year+" "+Toyota.make+" "+Toyota.model+" which can carry "+Toyota.seats+" people.");

console.log(Toyota.info());

let vw = new Car();
vw.model = "Golf"; //from the class
vw.year = 2015;
vw.make = "Volkswagon";
vw.seats = 4;

console.log("Car is a "+vw.year+" "+vw.make+" "+vw.model+" which can carry "+vw.seats+" people.");