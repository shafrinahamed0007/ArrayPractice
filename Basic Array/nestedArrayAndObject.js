// Values in objects can be arrays, and values in arrays can be objects

const myObj = {
    name:"John",
    age: 30,
    cars: [
        {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name: "BMW", models:["320", "X3", "x5"]},
        {name: "Fiat", models:["500", "Panda"]}
    ]
}

for(let i in myObj.cars){

    carsName = myObj.cars[i].name;
    carsModel = myObj.cars[i].models.join(", ");
    console.log("Car Name: ", carsName, " And Model: ", carsModel );
    
}
