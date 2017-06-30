// create a Car Object Class with methods
class Car {
    constructor(colour,make,model) {
        this.colour = colour;
        this.type = "motorvehicle";
        this.make = make;
        this.model = model;
    }

    showDescription() {
        var output = "This is a "+this.colour+" "+this.type+"."; 
        console.log("-- Method from Car --");
        console.log(output);
        console.log("");
        return output;
    }

    showDetailedDescription() {
        var output = "This "+this.type+" is a "+this.model+" "+this.make+", who's colour is "+this.colour; 
        console.log("-- Method from Car --");
        console.log(output);
        console.log("");
        return output;
    }   
}

module.exports = Car;