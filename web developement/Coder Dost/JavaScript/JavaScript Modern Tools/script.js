import { order, employeeName, salary as employeeSalary } from './export.js'; // importing and changing name of imported variable
console.log("Importing modules");
order("Alpha", "Tablet");
console.log(employeeName, employeeSalary);

import * as singleVariable from './export.js'; // importing everything from export.js
console.log(singleVariable);
singleVariable.order("Gamma", "Laptop");
console.log(singleVariable.employeeName, singleVariable.salary);

import add from './singleExport.js'; // for importing single object no need for curly braces {}
// name of imported variable may or may not be same
console.log(add(4, 7));

// IIFE - Immediately Invoke Function Expressions
let cart = (function () { // calls automatically without calling
    console.log("IIFE function")
    let orders = [];
    let addToCart = (product, quantity) => {
        console.log(`${quantity} of ${product} was ordered`);
        orders.push({ product, quantity });
    }
    return {
        orders,
        addToCart
    }
})() // if IIFE functions has any arguments it can be passed through the last parantheses if this line
cart.addToCart("Tablet", 2);
cart.addToCart("Laptop", 3);
console.log(cart.orders);

// top level await
// await without the need of async function
console.log("start");
let response = await fetch("https://jsonplaceholder.typicode.com/todos");
let data = await response.json();
console.log(data);
console.log("end");
// it should be not used generally to avoid blocking of execution of next part of code
// we should always prefer writing await code part within an async function