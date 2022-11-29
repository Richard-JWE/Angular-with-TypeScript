/*Exercise 2 - Video 3 - Classes*/

class Employee { 
    name: string;
    job_title: string;
    years_of_service: number;
}

class EmployeeWages extends Employee { 
    hours: number;
    rate: number;
    wages(hours, rate): number { 
        let sum: number = hours * rate;
        if (this.years_of_service > 10) { 
            sum += 100;
        }
        return sum;
    }    
}

let employee1 = new EmployeeWages();
employee1.name = "John Smith";
employee1.job_title = "Sales Rep";
employee1.years_of_service = 11;
employee1.hours = 40;
employee1.rate = 20;
let wages: number = employee1.wages(employee1.hours, employee1.rate);
console.log("Employee: "+employee1.name+"\nWages: "+wages);
