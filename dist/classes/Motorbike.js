// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
//The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
    // TODO: Create a constructor that accepts the properties of the Motorbike class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        super(); //call the parent constructor
        this.frontWheelDiameter = 18;
        this.frontWheelBrand = "GoodYear";
        this.rearWheelDiameter = 18;
        this.rearWheelBrand = "GoodYear";
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        //check if the wheels array has 2 elements
        if (wheels.length !== 2) {
            this.wheels = [new Wheel(), new Wheel()]; //Default wheels
        }
        else {
            this.wheels = wheels;
        }
    }
    // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    wheelie() {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie`);
    }
    // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Motorbike
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
    printDetails() {
        super.printDetails(); // call the parent printDetails
        console.log(`Front Wheel Diameter: ${this.frontWheelDiameter}inches`);
        console.log(`Front Wheel Brand: ${this.frontWheelBrand}`);
        console.log(`Rear Wheel Diameter: ${this.rearWheelDiameter}inches`);
        console.log(`Rear Wheel Diameter: ${this.rearWheelBrand}`);
        console.log(`VIN: ${this.vin}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        console.log(`Color: ${this.color}`);
    }
}
// Export the Motorbike class as the default export
export default Motorbike;
