var Car = /** @class */ (function () {
    function Car() {
        this.model = "";
        this.seats = 5;
    }
    Car.prototype.info = function () {
        return "This is the car object which implements the vehicle interface";
    };
    return Car;
}());
var Toyota = new Car();
Toyota.model = "Avensis"; //from the class
Toyota.year = 2013;
Toyota.make = "Toyota";
console.log("Car is a " + Toyota.year + " " + Toyota.make + " " + Toyota.model + " which can carry " + Toyota.seats + " people.");
console.log(Toyota.info());
var vw = new Car();
vw.model = "Golf"; //from the class
vw.year = 2015;
vw.make = "Volkswagon";
vw.seats = 4;
console.log("Car is a " + vw.year + " " + vw.make + " " + vw.model + " which can carry " + vw.seats + " people.");
