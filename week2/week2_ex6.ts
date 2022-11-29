let product: number = 3;
let quantity: number = 2;
let cost: number = 0;

switch(product){
    case 1:
        cost = 5;
        break;
    case 2:
        cost = 6;
        break;
    case 3:
        cost = 7;
        break;
    case 4:
        cost = 8;
        break;
    case 5:
        cost = 9;
        break;
    default:
        break;
}

if(cost != 0){
    console.log("Price of product "+product+": "+cost);
    console.log("Quantity of product "+product+" ordered: "+quantity);
    console.log("Total cost: "+(cost*quantity));
}else{
    console.log("Product does not exist");
}
