function calculateMySum(a, b, ...numbers) {
    const product = a * b;
console.log(product);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);


const totalSum = a + b + sum;
console.log(totalSum);
return totalSum;
}

calculateMySum(2, 3, 5, 7, 11, 13);





const mylist1 = [7,5,9,];
const mylist2 = ["g","a","n"];
const mylist3 = [true,null,false];

const combinedList = [...mylist1, ...mylist2, ...mylist3];

combinedList.push(2,"Georgia",true,7);
console.log(combinedList);
