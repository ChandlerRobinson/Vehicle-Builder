// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";
// define the Cli class
class Cli {
    constructor(vehicles) {
        this.exit = false;
        this.vehicles = vehicles;
    }
    static generateVin() {
        return (Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15));
    }
    // Update this method to be async
    async chooseVehicle() {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'selectedVehicleVin',
                message: 'Select a vehicle to perform an action on',
                choices: this.vehicles.map((vehicle) => {
                    return {
                        name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                        value: vehicle.vin,
                    };
                }),
            },
        ]);
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // Call performActions and await it
        await this.performActions(); // Add await here
    }
    // Update this method to be async
    async createVehicle() {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'vehicleType',
                choices: ['Car', 'Truck', 'Motorbike'],
            },
        ]);
        if (answers.vehicleType === 'Car') {
            await this.createCar(); // Add await here
        }
        else if (answers.vehicleType === 'Truck') {
            await this.createTruck(); // Add await here
        }
        else if (answers.vehicleType === 'Motorbike') {
            await this.createMotorbike(); // Add await here
        }
    }
    async createCar() {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
        ]);
        const car = new Car(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), []);
        this.vehicles.push(car);
        this.selectedVehicleVin = car.vin;
        await this.performActions(); // Add await here
    }
    async createTruck() {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
            {
                type: 'input',
                name: 'towingCapacity',
                message: 'Enter Towing Capacity',
            },
        ]);
        const truck = new Truck(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), [], parseInt(answers.towingCapacity));
        this.vehicles.push(truck);
        this.selectedVehicleVin = truck.vin;
        await this.performActions(); // Add await here
    }
    async createMotorbike() {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
            {
                type: 'input',
                name: 'frontWheelDiameter',
                message: 'Enter Front Wheel Diameter',
            },
            {
                type: 'input',
                name: 'frontWheelBrand',
                message: 'Enter Front Wheel Brand',
            },
            {
                type: 'input',
                name: 'rearWheelDiameter',
                message: 'Enter Rear Wheel Diameter',
            },
            {
                type: 'input',
                name: 'rearWheelBrand',
                message: 'Enter Rear Wheel Brand',
            },
        ]);
        const frontWheel = new Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand);
        const rearWheel = new Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand);
        const motorbike = new Motorbike(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), [frontWheel, rearWheel]);
        this.vehicles.push(motorbike);
        this.selectedVehicleVin = motorbike.vin;
        await this.performActions(); // Add await here
    }
    async findVehicleToTow(truck) {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'vehicleToTow',
                message: 'Select a vehicle to tow',
                choices: this.vehicles.map((vehicle) => {
                    return {
                        name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                        value: vehicle,
                    };
                }),
            },
        ]);
        if (!this.selectedVehicleVin) {
            console.log("No vehicle is currently selected.");
            await this.performActions(); // Add await here
            return;
        }
        if (this.selectedVehicleVin === truck.vin) {
            console.log("A truck cannot tow itself.");
            await this.performActions(); // Add await here
        }
        else {
            const selectedVehicle = this.vehicles.find(v => v.vin === this.selectedVehicleVin);
            if (selectedVehicle) {
                console.log(`${truck.make} ${truck.model} is towing ${selectedVehicle.make} ${selectedVehicle.model}.`);
                await this.performActions(); // Add await here
            }
            else {
                console.log("Selected vehicle not found.");
                await this.performActions(); // Add await here
            }
        }
    }
    // Update this method to be async
    async performActions() {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                choices: [
                    'Print details',
                    'Start vehicle',
                    'Accelerate 5 MPH',
                    'Decelerate 5 MPH',
                    'Stop vehicle',
                    'Turn right',
                    'Turn left',
                    'Reverse',
                    'Tow a vehicle', // Add this option
                    'Select or create another vehicle',
                    'Exit',
                ],
            },
        ]);
        if (answers.action === 'Print details') {
            for (let i = 0; i < this.vehicles.length; i++) {
                if (this.vehicles[i].vin === this.selectedVehicleVin) {
                    this.vehicles[i].printDetails();
                }
            }
        }
        else if (answers.action === 'Start vehicle') {
            for (let i = 0; i < this.vehicles.length; i++) {
                if (this.vehicles[i].vin === this.selectedVehicleVin) {
                    this.vehicles[i].start();
                }
            }
        }
        else if (answers.action === 'Accelerate 5 MPH') {
            for (let i = 0; i < this.vehicles.length; i++) {
                if (this.vehicles[i].vin === this.selectedVehicleVin) {
                    this.vehicles[i].accelerate(5);
                }
            }
        }
        else if (answers.action === 'Decelerate 5 MPH') {
            for (let i = 0; i < this.vehicles.length; i++) {
                if (this.vehicles[i].vin === this.selectedVehicleVin) {
                    this.vehicles[i].decelerate(5);
                }
            }
        }
        else if (answers.action === 'Stop vehicle') {
            for (let i = 0; i < this.vehicles.length; i++) {
                if (this.vehicles[i].vin === this.selectedVehicleVin) {
                    this.vehicles[i].stop();
                }
            }
        }
        else if (answers.action === 'Turn right') {
            for (let i = 0; i < this.vehicles.length; i++) {
                if (this.vehicles[i].vin === this.selectedVehicleVin) {
                    this.vehicles[i].turn('right');
                }
            }
        }
        else if (answers.action === 'Turn left') {
            for (let i = 0; i < this.vehicles.length; i++) {
                if (this.vehicles[i].vin === this.selectedVehicleVin) {
                    this.vehicles[i].turn('left');
                }
            }
        }
        else if (answers.action === 'Reverse') {
            for (let i = 0; i < this.vehicles.length; i++) {
                if (this.vehicles[i].vin === this.selectedVehicleVin) {
                    this.vehicles[i].reverse();
                }
            }
        }
        else if (answers.action === 'Tow a vehicle') {
            const selectedVehicle = this.vehicles.find(v => v.vin === this.selectedVehicleVin);
            if (selectedVehicle instanceof Truck) {
                await this.findVehicleToTow(selectedVehicle); // Add await here
                return;
            }
            else {
                console.log("You can only tow a vehicle with a truck");
            }
        }
        else if (answers.action === 'Select or create another vehicle') {
            await this.startCli(); // Add await here
            return;
        }
        else {
            this.exit = true;
        }
        if (!this.exit) {
            await this.performActions(); // Add await here
        }
    }
    // Update this method to be async
    async startCli() {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'CreateOrSelect',
                message: 'Would you like to create a new vehicle or perform an action on an existing vehicle?',
                choices: ['Create a new vehicle', 'Select an existing vehicle'],
            },
        ]);
        if (answers.CreateOrSelect === 'Create a new vehicle') {
            await this.createVehicle(); // Add await here
        }
        else {
            await this.chooseVehicle(); // Add await here
        }
    }
}
// export the Cli class
export default Cli;
