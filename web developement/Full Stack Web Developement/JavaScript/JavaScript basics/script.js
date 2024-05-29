function invite1(name = "Guest") {
    console.log(`Welcome ${name} to the event 1`);
}
invite1("Alpha");

let invite2 = function (name = "Guest") {
    console.log(`Welcome ${name} to the event 2`);
}
invite2("Beta");

let invite3 = function (name = "Guest") {
    return `Welcome ${name} to the event 3`;
}
console.log(invite3("Gamma"));

//Arrow Function
// let varName = (arg1, arg2, arg3, ...) => { return ret; }
// let varName = (arg1, arg2, arg3, ...) => ret; for single return
let invite4 = name => `welcome ${name} to the event 4`;
console.log(invite3("Delta"));

// Higher order function
// 1. Function calling another function
let transformer = function (name, functionName) {
    return functionName(name);
}
console.log(transformer("Eta", invite3))
console.log(transformer("Fre", invite4))

// 2. Function returning another function
let invite5 = function (name) {
    return function (time) {
        console.log(`Welcome ${name} to event 5 at ${time}`);
    }
}
invite5("Red")("evening");
let invite6 = invite5("Blue");
invite6("morning");
invite6("evening");

// setTimeout -> Runs a function once after a certain interval
function greeting(name = "Guest") {
    console.log(`Welcome ${name} to JavaScript page`);
}
setTimeout(greeting("Green"), 5000); // 5000ms = 5sec

//Runs code repetedly at every interval
// setInterval(greeting, 3000, "Yellow");

// var and functions is declared at the begining of code interpetation, this is hoisting
test = 10;
console.log(test);
var test;

invite7("Black");
function invite7(name) {
    console.log(`Welcome ${name} to the event 7`);
}

let car = {
    color: "black",
    model: "2022",
    company: "Indigo"
}
console.log(car);
console.log(car["model"]);
let property = "color";
console.log(car[property]);
property = "company";
console.log(car[property]);
console.log(car.model);

car.color = "Lime";
console.log(car.color);

car["model"] = "2020";
console.log(car.model);

delete car.model;
delete car["color"];

let person = {
    name: "Brown",
    // function of an object is called method
    ageCalculate: function (birthYear) {
        let age = 2023 - birthYear;
        return age;
    },
    // this keyword
    summary: function () {
        return `Person name is ${this.name}. His age is ${this.ageCalculate(2000)}.`
    }
}
console.log(`Current age is ${person.ageCalculate(2003)}`);
console.log(person.summary());

let colors = ["Lime", "White", "Brown", "Black", "Yellow"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
colors.forEach(function (element) {
    console.log(element);
})

let mainPlane = {
    airline: "Fly High",
    iataCode: "FH",
    bookings: [],
    book: function (flightNum, name) {
        console.log(`${name} booked flight on ${this.airline} with flight number ${this.iataCode}${flightNum}.`);
        this.bookings.push({ flightname: `${this.airline}`, name: name, flightNum: `${this.iataCode}${flightNum}` });
    }
}
mainPlane.book(553, "Green");
console.log(mainPlane);

let childPlane = {
    airline: "FLy More",
    iataCode: "FM",
    bookings: []
}
let books = mainPlane.book;
books.call(mainPlane, 540, "Blue");
books.call(childPlane, 608, "Pink");
books.apply(childPlane, [593, "Orange"]); // arguments of functions is passed in an array
console.log(mainPlane);
console.log(childPlane);

function greet() {
    console.log(`Welcome ${this.firstName} ${this.lastName} to the event.`);
}
let user = {
    firstName: "Stomach",
    lastName: "Ulcer"
}
let greets = greet.bind(user);
greets();

let arr = [1, 2, 3, 4, 5];
let getRef = arr; // Pass by reference
getRef[2] = 9;
console.log(arr);
console.log(getRef);
let getVal = [...arr]; // Pass by value using spread operator
getVal[3] = 6;
console.log(arr);
console.log(getRef);
console.log(getVal);

// for in loop
let itemList = {
    item1: "Ginger",
    item2: "Cucumber",
    item3: "Potato",
    item4: "Radish",
    item5: "Coconut"
}
for (let keyName in itemList) {
    console.log(keyName);
    console.log(itemList[keyName]);
}