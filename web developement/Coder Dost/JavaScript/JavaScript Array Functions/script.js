// Map
let salaries = [2000, 4000, 3000, 3500, 2000];
// Each salary increased by 50%
let increasedSalaries = salaries.map(salary => {
    let incrementedSalary = salary / 2;
    return salary + incrementedSalary;
})
console.log(salaries);
console.log(increasedSalaries);
// Length of new array = Length of original array

// Filter
// Salary more than 3000 are selected
let filteredSalaries = salaries.filter(salary => {
    if (salary > 3000) {
        return salary;
    }
})
console.log(salaries);
console.log(filteredSalaries);
// Length of new array may or may not be equal to original array

// Reduce
// Sum of all salaries
let sumOfSalaries = salaries.reduce((totalSum, currentSum) => {
    return totalSum + currentSum; // Similarly for product use * operator instead of + operator
})
console.log(salaries);
console.log(sumOfSalaries);

//indexOf
// Returns index of first element we are looking for
console.log(salaries.indexOf(3500));

// find
// Returns first element we are looking for
let colors = [{ id: 1, name: "Red" }, { id: 2, name: "Green" }, { id: 1, name: "Blue" }];
let findColor = colors.find(color => {
    return color.id == 1;
})
console.log(colors);
console.log(findColor);

// findIndex
// Returns index of first element that satisfies the condition otherwise -1
// Find index of salary greater than 3000
let findSalary = salaries.findIndex(salary => {
    return salary > 3000;
})
console.log(salaries);
console.log(findSalary);

// some
// returns true if any element of array passes the condition
// Check if any salary is greater than 3000
let test1 = salaries.some(salary => {
    return salary > 3000;
})
console.log(salaries);
console.log(test1);

// every
// returns true if all elements of array passes the condition
// Check if each salary is greater than 3000
let test2 = salaries.every(salary => {
    return salary > 3000;
})
console.log(salaries);
console.log(test2);

// flat
// removes subarray and make new array with subarray elements
let array = [1, 2, 3, [4, 5, [6, 7, 8, 9]]];
let semiflat = array.flat(); // by default 1 depth of nested subarray
let flatArray = array.flat(2);
console.log(array);
console.log(semiflat);
console.log(flatArray);

// flatMap
// performs both map() and flat()
let items = [{
    name: "Tooth Paste",
    quantity: 3,
    price: 100
},
{
    name: "Soap",
    quantity: 5,
    price: 25
}]
// A Shampoo Pouch is free with two Soaps
let finalItems = items.flatMap(item => {
    if (item.name === "Soap") { // map checking condition
        return [item, {
            name: "Shampoo Pouch",
            quantity: Math.trunc(item.quantity / 2),
            price: 0
        }] // flat for removing this subarray
    } else {
        return [item]; // flat for removing this subarray
    }
})
console.log(items);
console.log(finalItems);