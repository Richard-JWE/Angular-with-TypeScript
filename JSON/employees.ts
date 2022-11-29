let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 

let obj = JSON.parse(text);
let htmlForTable: string = "<table><tr><th>First Name</th><th>Last Name</th></tr>";

console.log("Length of obj: "+obj.employees.length);
for (let i of obj.employees) {
   htmlForTable += "<tr><td>"+i.firstName+"</td><td>"+i.lastName+"</td></tr>"; 
}
htmlForTable += "</table>";

document.getElementById("emp").innerHTML = htmlForTable;

console.log(htmlForTable);