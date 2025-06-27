class Shape {
    constructor(length, width, color, coordinates) {
        this.length = length;
        this.width = width;
        this.color = color;
        this.coordinates = coordinates;
    }

    changeLength(amount) {
        this.length += amount;
        if (this.length < 0) this.length = 0; 
    }

    changeWidth(amount) {
        this.width += amount;
        if (this.width < 0) this.width = 0; 
    }


    changeColor(newColor) {
        this.color = newColor;
    }

    changeCoordinates(newCoordinates) {
        this.coordinates = newCoordinates;
    }


    draw() {
        console.log(`on cords - ${this.coordinates} shape is drawing, which sizes are ${this.length}/${this.width},which color os ${this.color}.`);
    }
}


class Circle extends Shape {
    constructor(radius, color, coordinates) {
        super(radius * 2, radius * 2, color, coordinates);
        this.radius = radius;
    }

    draw() {
        console.log(`on cords - ${this.coordinates} circle is drawing,which radius is ${this.radius}, which volor is${this.color}.`);
    }

    changeRadius(amount) {
        this.radius += amount;
        if (this.radius < 0) this.radius = 0;
        this.length = this.radius * 2;
        this.width = this.radius * 2;
    }
}


class Rectangle extends Shape {
    constructor(length, width, color, coordinates) {
        super(length, width, color, coordinates);
    }

    draw() {
        console.log(`on cords - ${this.coordinates} triangle is drawing,which sizes is ${this.length}/${this.width},which color is  ${this.color}.`);
    }
}

class Triangle extends Shape {
    constructor(base, height, color, coordinates) {
        super(base, height, color, coordinates);
    }


    draw() {
        console.log(`on cords - ${this.coordinates} triangle is drawing, which size is ${this.length}/${this.width}, which color is${this.color}.`);
    }
}


const circle = new Circle(5, "red", [10, 20]);
circle.draw();

const rectangle = new Rectangle(10, 5, "blue", [30, 40]);
rectangle.draw();

const triangle = new Triangle(8, 6, "green", [50, 60]);
triangle.draw();

circle.changeRadius(2);
circle.changeColor("pink");
circle.changeCoordinates([15, 25]);
circle.draw();

rectangle.changeLength(-3);
rectangle.changeWidth(2);
rectangle.changeColor("yellow");
rectangle.draw();