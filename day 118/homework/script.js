class Employee {
    #id;
    #monthSalary;

    constructor(id, firstName, lastName, monthSalary) {
        this.#id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.#monthSalary = monthSalary;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const parts = name.split(' ');
        if (parts.length >= 2) {
            this.firstName = parts[0];
            this.lastName = parts.slice(1).join(' ');
        }
    }

    get yearSalary() {
        return this.#monthSalary * 12;
    }

    get monthSalary() {
        return this.#monthSalary;
    }

    set monthSalary(newSalary) {
        if (newSalary > 0) {
            this.#monthSalary = newSalary;
        } else {
            console.error("Salary must be greater than 0");
        }
    }

    get id() {
        return this.#id;
    }
}


class Manager extends Employee {
    constructor(id, firstName, lastName, monthSalary, department) {
        super(id, firstName, lastName, monthSalary);
        this.department = department;
    }

    set changeDepartment([newDepartment, newSalary]) {
        if (typeof newDepartment === 'string' && newSalary > this.monthSalary) {
            this.department = newDepartment;
            this.monthSalary = newSalary;
        } else {
            console.error("Invalid department change: new salary must be higher than current");
        }
    }

    get yearSalary() {
        return super.yearSalary * 1.2; 
    }

    info() {
        return `Manager ${this.fullName} (ID: ${this.id}) works in ${this.department} department. 
        Monthly salary: $${this.monthSalary}, Annual salary (with bonus): $${this.yearSalary}`;
    }
}


class Boss extends Employee {
    constructor(id, firstName, lastName, monthSalary, department) {
        super(id, firstName, lastName, monthSalary);
        this.department = department;
    }


    set changeDepartment([newDepartment, newSalary]) {
        if (typeof newDepartment === 'string' && newSalary > this.monthSalary) {
            this.department = newDepartment;
            this.monthSalary = newSalary;
        } else {
            console.error("Invalid department change: new salary must be higher than current");
        }
    }

    get yearSalary() {
        return super.yearSalary * 1.5; 
    }

    info() {
        return `BOSS ${this.fullName.toUpperCase()} (ID: ${this.id}) leads ${this.department} department. 
        Monthly salary: $${this.monthSalary}, Annual salary (with bonus): $${this.yearSalary}`;
    }
}




const emp1 = new Employee(1, "sigma", "giga", 3000);
console.log(emp1.fullName); 
emp1.fullName = "sigma sigma";
console.log(emp1.firstName); 
console.log(emp1.lastName); 
console.log(emp1.yearSalary); 
console.log(emp1.id); 

const manager = new Manager(2, "niga", "white", 5000, "Marketing");
console.log(manager.info());


manager.changeDepartment = ["Sales", 5500];
console.log(manager.info());


const boss = new Boss(3, "roberta", "tavadze", 10000, "Executive");
console.log(boss.info());


boss.changeDepartment = ["Corporate", 12000];
console.log(boss.info());
