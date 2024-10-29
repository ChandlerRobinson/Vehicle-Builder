// Vehicle class that implements Driveable interface
class Vehicle {
    // Constructor for the Vehicle class
    constructor() {
        this.started = false;
        this.currentSpeed = 0;
    }
    // Method to print vehicle details
    printDetails() {
        console.log(`Vehicle started: ${this.started}`);
        console.log(`Vehicle current speed: ${this.currentSpeed} mph`);
    }
    // Method to start the vehicle
    start() {
        this.started = true;
        console.log('Vehicle started');
    }
    // Method to accelerate the vehicle
    accelerate(change) {
        // Check if the vehicle is started
        if (this.started) {
            this.currentSpeed += change;
            console.log(`Vehicle accelerated to ${this.currentSpeed} mph`);
        }
        else {
            console.log('Start the vehicle first');
        }
    }
    // Method to decelerate the vehicle
    decelerate(change) {
        // Check if the vehicle is started
        if (this.started) {
            this.currentSpeed -= change;
            console.log(`Vehicle decelerated to ${this.currentSpeed} mph`);
        }
        else {
            console.log('Start the vehicle first');
        }
    }
    // Method to stop the vehicle
    stop() {
        this.currentSpeed = 0;
        this.started = false;
        console.log('Vehicle stopped');
    }
    // Method to turn the vehicle
    turn(direction) {
        // Check if the vehicle is started
        if (this.started) {
            console.log(`Vehicle turned ${direction}`);
        }
        else {
            console.log('Start the vehicle first');
        }
    }
    // Method to reverse the vehicle
    reverse() {
        // Check if the vehicle is started
        if (this.started) {
            console.log('Vehicle reversed');
        }
        else {
            console.log('Start the vehicle first');
        }
    }
}
// Export the Vehicle class
export default Vehicle;
