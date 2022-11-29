let salary: number = 70000;
console.log("Gross Salary: "+salary);

if(salary >= 60000){
    console.log("Net Salary: "+(salary * 0.4));
}else if(salary >= 40000){
    console.log("Net Salary: "+(salary * 0.6));
}else if(salary >= 20000){
    console.log("Net Salary: "+(salary * 0.8));
}else{
    console.log("Net Salary: "+(salary * 0.9));
}
