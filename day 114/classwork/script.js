class PersianGuineaPig {
    constructor(color, size, birthYear, birthMonth, birthDay) {
    this.color = color;
    this.size = size;
    this.birthDate = new Date(birthYear, birthMonth - 1, birthDay); 
    }

calculateAge() {
    const today = new Date();
    let years = today.getFullYear() - this.birthDate.getFullYear();
    let months = today.getMonth() - this.birthDate.getMonth();
    let days = today.getDate() - this.birthDate.getDate();


    if (days < 0) {
        months -= 1;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return `${years} years, ${months} month and  ${days} day`;
    }
}


const pig = new PersianGuineaPig("white", "normal", 2020, 3, 15);
console.log("age is:", pig.calculateAge());
