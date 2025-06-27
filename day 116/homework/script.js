class Transport {
    constructor(maxSpeed, color, fuel) {
        this.maxSpeed = maxSpeed;
        this.color = color;
        this.fuel = fuel;
        this.distanceTraveled = 0;
    }

    refuel(liter) {
        if (typeof liter !== 'number' || liter < 0) {
            throw new Error('Invalid fuel amount. Must be a non-negative number.');
        }
        this.fuel += liter;
    }

    changeColor(color) {
        if (typeof color !== 'string') {
            throw new Error('Color must be a string.');
        }
        this.color = color;
    }


    getInfo() {
        return `this is a kind of transport,which max speed is - ${this.maxSpeed}; color - ${this.color}; fuel amount - ${this.fuel}; distance traveled - ${this.distanceTraveled}`;
    }

    move(distance, fuelNeeded) {
        if (typeof distance !== 'number' || typeof fuelNeeded !== 'number') {
            throw new Error('Distance and fuel needed must be numbers.');
        }

        if (this.fuel < fuelNeeded) {
            throw new Error('Not enough fuel to complete the journey.');
        }

        this.distanceTraveled += distance;
        this.fuel -= fuelNeeded;
    }
}


class Car extends Transport {
    constructor(maxSpeed, color, fuel) {
        super(maxSpeed, color, fuel);
    }


    getInfo() {
        return `this is a car, which max speed is - ${this.maxSpeed}; color - ${this.color}; fuel amount - ${this.fuel};distance traveled - ${this.distanceTraveled}`;
    }
}


class Plane extends Transport {
    constructor(maxSpeed, color, fuel) {
        super(maxSpeed, color, fuel);
    }

    getInfo() {
        return `this is a  plane,which max speed is  - ${this.maxSpeed}; color - ${this.color}; fuel amount - ${this.fuel}; distance traveled- ${this.distanceTraveled}`;
    }
}

class Boat extends Transport {
    constructor(maxSpeed, color, fuel) {
        super(maxSpeed, color, fuel);
    }


    getInfo() {
        return `this is a boat,which max sizeis - ${this.maxSpeed}; color - ${this.color}; fuel amount - ${this.fuel}; distance traveled - ${this.distanceTraveled}`;
    }
}


const myCar = new Car(220, 'red', 50);
console.log(myCar.getInfo());

const myPlane = new Plane(900, 'white', 10000);
console.log(myPlane.getInfo());

const myBoat = new Boat(60, 'blue', 200);
console.log(myBoat.getInfo());


myCar.refuel(20);
myCar.changeColor('blue');
myCar.move(100, 5);
console.log(myCar.getInfo());

try {
    myPlane.move(500, 12000); 
} catch (error) {
    console.error(error.message);
}