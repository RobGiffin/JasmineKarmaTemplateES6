/*jshint esnext: true */

var Car = require("../car");
var App = require("../app");

describe('Main Application Jasmine Tests', function () {

    var result;

    describe('Car Class and Method Exists Tests', () => {
        it('Can instantiate a Car Object.', () => {
            var blueFiesta = new Car("blue","Ford","Fiesta");
            expect(blueFiesta).toBeDefined(true);
        });
        
        it('Check method showDescription exists on the Car Class.', () => {
            var blueFiesta = new Car("blue","Ford","Fiesta");
            spyOn(blueFiesta, 'showDescription');
            blueFiesta.showDescription(blueFiesta);
            expect(blueFiesta.showDescription).toHaveBeenCalled();
        });
    });

    describe('Car Class and Method Results Tests', () => {
        it('Check return value from showDescription method on Car object.', () => {
            var blueFiesta = new Car("blue","Ford","Fiesta");
            result = blueFiesta.showDescription(blueFiesta);
            expect(result).toContain('This is a blue motorvehicle.');
        });

        it('Check colour red is returned from function showAllDetails.', () => {
            var redVectra = new Car("red","Vauxhall","Vectra");
            expect(App.showAllDetails(redVectra)).toContain('red');
        });

        it('Check exact value is return value from function showAllDetails.', () => {
            var blueFiesta = new Car("blue","Ford","Fiesta");
            expect(App.showAllDetails(blueFiesta)).toContain('This motorvehicle is a Fiesta Ford, who\'s colour is blue');
        });

        it('Check method showDescription exists on the Car Class.', () => {
            var blueFiesta = new Car("blue","Ford","Fiesta");
            spyOn(blueFiesta, 'showDescription');
            blueFiesta.showDescription(blueFiesta);
            expect(blueFiesta.showDescription).toHaveBeenCalled();
        });

    });

    xdescribe('Skipped test', () => {
        it('This test is skipped due to xdescribe.', () => {
            expect(true).toBeTruthy('This is truthy');
        });
    });

});
