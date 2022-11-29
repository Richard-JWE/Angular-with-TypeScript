//JSON Object which contains an object - Nested Object
var text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
var obj = JSON.parse(text);
console.log(obj.employees[0].firstName + " " + obj.employees[0].lastName);
console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);
console.log(obj.employees[2].firstName + " " + obj.employees[2].lastName);
console.log("Length of obj: " + obj.employees.length);
for (var _i = 0, _a = obj.employees; _i < _a.length; _i++) {
    var i = _a[_i];
    console.log(i.firstName + " " + i.lastName);
}
//Basic JSON Object
var text1 = '{ "firstName":"John" , "lastName":"Doe" }';
var obj1 = JSON.parse(text1);
console.log("Non nested object: " + obj1.firstName);
//Convert JavaScript Object to JSON
function employees1() {
    var firstName = 'John';
    var lastName = 'Doe';
}
var emps = new employees1();
var emps1 = new employees1();
emps.firstName = 'John';
emps.lastName = 'Doe';
var emps_arr = [];
emps_arr.push(emps);
//let json_obj = JSON.stringify(emps);
emps1.firstName = 'Anna';
emps1.lastName = 'Smith';
emps_arr.push(emps1);
var json_obj = JSON.stringify(emps_arr);
console.log(json_obj);
//let employees: string = "employees";
var employees_obj = { employees: emps_arr };
console.log(JSON.stringify(employees_obj));
