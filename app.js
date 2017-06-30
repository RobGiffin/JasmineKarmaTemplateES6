/*jshint esversion: 6 */
'use strict';

//////////////////////////////////////////////////////////////////////////////

// create a Car Object Class with methods
class Car {
    constructor(colour,make,model) {
        this.colour = colour;
        this.type = "motorvehicle";
        this.make = make;
        this.model = model;
    }

    showDescription() {
        console.log("-- Method from Car --");
        console.log("This is a "+this.colour+" "+this.type+" and does this this.");
        console.log("");
    }

    showDetailedDescription() {
        console.log("-- Method from Car --");
        console.log("This "+this.type+" is a "+this.model+" "+this.make+", who's colour is "+this.colour);
        console.log("");
    }   
}

// create a red Vectra
let redVectra = new Car("red","Vauxhall","Vectra");
redVectra.showDescription();
redVectra.showDetailedDescription();

// create blue Fiesta
let blueFiesta = new Car("blue","Ford","Fiesta");
blueFiesta.showDescription();
blueFiesta.showDetailedDescription();


//////////////////////////////////////////////////////////////////////////////


// extend the Car Object to have addition values and methods
class FastCar extends Car {
    constructor(topSpeed,colour,make,model) {
        super(colour,make,model);
        this.topSpeed = topSpeed;
    }

    howFastCanItGo() {
        console.log("-- Method from FastCar --");
        console.log("The "+this.colour+" "+this.type+" has a top speed of "+this.topSpeed);
        console.log("");
    }
}

let yellowFerrari = new FastCar("120mph","Yellow","Ferrari","960");
yellowFerrari.howFastCanItGo();


//////////////////////////////////////////////////////////////////////////////


// create a function and pass in the object, calling it's methods
function showAllDetails(car) {
    console.log("-- Showing All Details --");
    car.showDetailedDescription();
    if (car instanceof FastCar) {
        car.howFastCanItGo();
    }
}

showAllDetails(yellowFerrari);
showAllDetails(blueFiesta);


//////////////////////////////////////////////////////////////////////////////
