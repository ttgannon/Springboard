class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep!";
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
    
}


class Car extends Vehicle {
    constructor(make, model, year) {
            super(make, model, year);
            this.numWheels = 4;
        }
    }

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        console.log("VROOM!!!");
    }
}


class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "This is not a vehicle";
        }
        if (this.vehicles.length >= this.capacity) {
            return "We are full.";
        }
        this.vehicles.push(newVehicle);
        return "Done";
    }
    
}