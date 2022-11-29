let cars = { car: "Yaris", colour: "red" },
    { car: "Auris", colour: "blue" },
    { car: "Corolla", colour: "white" },
    { car: "Avensis", colour: "Grey" };




let carDetails = cars.map((car) => {

    car = car + " - For Sale";
});



for (let entry of carDetails) {

    console.log(entry);

}