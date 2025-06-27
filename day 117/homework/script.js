class Car {
    constructor(brand, model, year, maxSpeed, color, fuelType, image, sound) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.color = color;
        this.fuelType = fuelType;
        this.image = image;
        this.sound = sound;
    }

    getInfo() {
        return `
            <p><strong>Brand:</strong> ${this.brand}</p>
            <p><strong>Model:</strong> ${this.model}</p>
            <p><strong>Year:</strong> ${this.year}</p>
            <p><strong>Max Speed:</strong> ${this.maxSpeed} km/h</p>
            <p><strong>Color:</strong> ${this.color}</p>
            <p><strong>Fuel Type:</strong> ${this.fuelType}</p>
        `;
    }

    playEngineSound() {
        const audio = document.getElementById('engineAudio');
        audio.src = this.sound;
        audio.play().catch(e => console.log("Audio play failed:", e));
    }
}


class BMW extends Car {
    constructor(model, year, maxSpeed, color, fuelType) {
        super('BMW', model, year, maxSpeed, color, fuelType, 
            `images/bmw-${model.toLowerCase()}.jpg`, 
            'sounds/bmw-engine.mp3');
        this.driveType = 'Rear-wheel drive';
    }

    getInfo() {
        return super.getInfo() + `<p><strong>Drive Type:</strong> ${this.driveType}</p>`;
    }
}

class Mercedes extends Car {
    constructor(model, year, maxSpeed, color, fuelType) {
        super('Mercedes', model, year, maxSpeed, color, fuelType, 
            `images/mercedes-${model.toLowerCase()}.jpg`, 
            'sounds/mercedes-engine.mp3');
        this.luxuryFeatures = ['Premium leather seats', 'Ambient lighting', 'Air suspension'];
    }

    getInfo() {
        return super.getInfo() + 
            `<p><strong>Luxury Features:</strong> ${this.luxuryFeatures.join(', ')}</p>`;
    }
}

class Audi extends Car {
    constructor(model, year, maxSpeed, color, fuelType) {
        super('Audi', model, year, maxSpeed, color, fuelType, 
            `images/audi-${model.toLowerCase()}.jpg`, 
            'sounds/audi-engine.mp3');
        this.quattro = true;
    }

    getInfo() {
        return super.getInfo() + 
            `<p><strong>Quattro AWD:</strong> ${this.quattro ? 'Yes' : 'No'}</p>`;
    }
}


const cars = [
    new BMW('M5', 2022, 305, 'Blue', 'Petrol'),
    new Mercedes('S-Class', 2023, 250, 'Black', 'Hybrid'),
    new Audi('RS6', 2023, 280, 'Gray', 'Petrol')
];

document.addEventListener('DOMContentLoaded', () => {
    const carName = document.getElementById('carName');
    const carImage = document.getElementById('carImage');
    const carDetails = document.getElementById('carDetails');
    const infoBtn = document.getElementById('infoBtn');
    const soundBtn = document.getElementById('soundBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentCarIndex = 0;
    let currentCar = null;

    function displayCar(index) {
        if (index >= 0 && index < cars.length) {
            currentCarIndex = index;
            currentCar = cars[currentCarIndex];
            
            carName.textContent = `${currentCar.brand} ${currentCar.model}`;
            carImage.src = currentCar.image;
            carImage.style.display = 'block';
            carImage.alt = `${currentCar.brand} ${currentCar.model}`;
            carDetails.innerHTML = '';
            
            
            nextBtn.disabled = currentCarIndex === cars.length - 1;
        }
    }

    infoBtn.addEventListener('click', () => {
        if (currentCar) {
            carDetails.innerHTML = currentCar.getInfo();
        }
    });

    soundBtn.addEventListener('click', () => {
        if (currentCar) {
            currentCar.playEngineSound();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentCarIndex < cars.length - 1) {
            displayCar(currentCarIndex + 1);
        }
    });


    displayCar(0);
});