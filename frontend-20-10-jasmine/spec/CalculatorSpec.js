/**
 * Created by esli on 10/20/15.
 */

var customMatchers = {
    toBeBetween: function () {
        return {
            compare: function (actual, min, max) {
                return {
                    pass: actual > min && actual < max
                };
            }
        }
    }
};

beforeEach(function () {
    jasmine.addMatchers(customMatchers);
});

// Test suite = verzameling van verschillende unit tests
describe("Calculator Tests", function(){

    describe("Calculator object test", function() {
        var calc = null;

        beforeEach(function () {
            calc = new Calculator(addModule, divideModule);
        });

        it("Calculator object should exist", function() {
            // AAA, SEE (jasmine)
            // SETUP
            var calc = new Calculator();
            // EXECUTE -> not needed
            // EXPECTATIONS
            expect(calc).toBeDefined();
        });

        it("Calculator should have implemented the addModule", function () {
            //var calc = new Calculator(addModule); -> beforeEach
            expect(calc.addModule).toBeDefined();
        })
    });

    describe("Add module test", function() {
        it("Add module should exist", function() {
            expect(addModule).toBeDefined();
        });

        it("Add module should contain an exe method", function () {
            expect(addModule.exe).toBeDefined();
        });

        it("Should be able to add 3 + 4", function () {
            // SETUP
            var result;

            // EXE
            result = addModule.exe(3, 4);

            // EXP
            expect(result).toBe(7);
        });
    });

    describe("Divide Module Test", function () {
        it("Should be able to divide 8, 3", function () {
            // SETUP
            var result;

            // EXE
            result = divideModule.exe(8, 3);

            // EXP
            //expect(result).toBeGreaterThan(2);
            //expect(result).toBeLessThan(4);
            expect(result).toBeBetween(2, 4);
            expect(result).toBe((8/3));
        })
    })
});
