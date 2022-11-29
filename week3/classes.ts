class Name{
    //properties
    firstName: string;
    surname: string;

    constructor(){
        this.firstName = "John";
        this.surname = "Smith";
    }

    //methods
    updateName(fn: string, sn: string): String{
        this.firstName = fn;
        this.surname = sn;
        return "Name Changed";
    }

    getFirstName(): string{
        return this.firstName;
    }

}

let firstName = "Test";

let x = new Name(); // creates an instance

console.log("First Name: " + x.firstName);
console.log("Surname: " + x.surname);
console.log("First Name (not from Name class): " + firstName);

console.log(x.updateName("Kevin", "O'Brien"));

console.log("First Name using getFirstName(): " + x.getFirstName());

//inheritance
class Employee extends Name{
    wages: number = 20;
}

let emp = new Employee();
console.log("Employee wages: " + emp.wages);
console.log("Employee First Name (inherited): " + emp.firstName);
console.log("Update name using inhertited class: " + emp.updateName("John","Smith"));
