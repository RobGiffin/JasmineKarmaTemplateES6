/*jshint esnext: true */

var Car = require("../car");
var sut = require("../app");

describe('My App Jasmine Tests', function () {

    var result;

    describe('Car Class Tests', () => {
        it('Simple Truth Test', () => {
            expect(true).toBeTruthy('This is truthy');
        });

        it('Can instantiate a Car object.', () => {
            var blueFiesta = new Car("blue","Ford","Fiesta");
            expect(blueFiesta).toBeDefined(true);
        });

        it('Check return value from showDescription method on Car object.', () => {
            var blueFiesta = new Car("blue","Ford","Fiesta");
            result = blueFiesta.showDescription(blueFiesta);
            expect(result).toContain('This is a blue motorvehicle.');
        });

        it('check colour red is returned from function showAllDetails.', () => {
            var redVectra = new Car("red","Vauxhall","Vectra");
            //result = sut.showAllDetails(redVectra);
            expect(sut.showAllDetails(redVectra)).toContain('red');
        });

        it('Check exact value is return value from function showAllDetails.', () => {
            var blueFiesta = new Car("blue","Ford","Fiesta");
            expect(sut.showAllDetails(blueFiesta)).toContain('This motorvehicle is a Fiesta Ford, who\'s colour is blue');
        });

    });

    xdescribe('Skipped test', () => {
        it('Simple Truth Test', () => {
            expect(true).toBeTruthy('This is truthy');
        });
    });

});
