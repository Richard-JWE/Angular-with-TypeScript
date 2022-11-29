var text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
var obj = JSON.parse(text);
var htmlForTable = "<table><tr><th>First Name</th><th>Last Name</th></tr>";
console.log("Length of obj: " + obj.employees.length);
for (var _i = 0, _a = obj.employees; _i < _a.length; _i++) {
    var i = _a[_i];
    htmlForTable += "<tr><td>" + i.firstName + "</td><td>" + i.lastName + "</td></tr>";
}
htmlForTable += "</table>";
document.getElementById("emp").innerHTML = htmlForTable;
console.log(htmlForTable);
