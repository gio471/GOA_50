const person = {
    name: "giorgi",
    age: 67947697,
    height: 240
};


const { name, ...otherProperties } = person;

console.log(name); 
console.log(otherProperties); 




const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

const combinedObj = { ...obj1, ...obj2, ...obj3 };

console.log(combinedObj); 




function printNames(...names) {
    names.forEach(name => console.log(name));
}

// სახელების სია
const namesList = ["ana","toni","givi","vaxtangi","lamzira"];

printNames(...namesList);
