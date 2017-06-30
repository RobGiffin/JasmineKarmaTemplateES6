/*jshint esversion: 6 */
'use strict';

var Car = require("./car");

//////////////////////////////////////////////////////////////////////////////

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
        var output = "The "+this.colour+" "+this.type+" has a top speed of "+this.topSpeed; 
        console.log("-- Method from FastCar --");
        console.log(output);
        console.log("");
        return output;
    }
}

let yellowFerrari = new FastCar("120mph","Yellow","Ferrari","960");
yellowFerrari.howFastCanItGo();


//////////////////////////////////////////////////////////////////////////////


// create a function and pass in the object, calling it's methods
function showAllDetails(car) {
    console.log("-- Showing All Details --");
    var output = car.showDetailedDescription();
    if (car instanceof FastCar) {
        output += car.howFastCanItGo();
    }
    return output;
}

showAllDetails(yellowFerrari);
showAllDetails(blueFiesta);


//////////////////////////////////////////////////////////////////////////////


function multiply (multiplier1, multiplier2) {
  return multiplier1 * multiplier2;
};

///////////////////////////////////////////////////////////////////////////////

// Export Functions
exports.showAllDetails = showAllDetails;
exports.multiply = multiply;
