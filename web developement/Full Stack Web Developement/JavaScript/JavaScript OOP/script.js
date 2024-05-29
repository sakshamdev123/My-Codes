let Car = function (color, model) { // Constructor
    // instance's properties
    this.color = color;
    this.model = model;
}
// Method
Car.prototype.introduction = function () {
    console.log("This is a car");
}
// Properties can also be set using prototype
Car.prototype.company = "Honda";

let instance1 = new Car("Red", 2024);
let instance2 = new Car("Yellow", 2020);
console.log(instance1, instance2);
instance1.introduction();
console.log(instance2.__proto__);
console.log(Car.prototype); // Car.prototype is a prototype of all the instance made up of the Car constructor

let array = [2, 3, 4, 6, 9]; // [] is same as new Array([])
console.log(array.__proto__, Array.prototype);
console.log(Object.prototype);

// ES6 JavaScript
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    greeting() {
        console.log("Welcome employee to the company");
    }
    // Getter
    get detail() {
        return `Name of Employee: ${this.name},\nSalary: ${this.salary} and \nDesignation: ${this.designation}`;
    }
    // Setter
    set jobTitle(designation) {
        this.designation = designation;
    }
}
let employee1 = new Employee("Alpha", 4000);
console.log(employee1);
employee1.greeting(); // accessing as a function
employee1.jobTitle = "SWE"; // set as property
let description = employee1.detail; // accessing as a property
console.log(description);
console.log(employee1);

// Static method
Employee.company = function () {
    console.log("Employees work at Umbrella Corporation");
}
// Only work on Employee class not at its instances
Employee.company();

// Inheritence
class Worker extends Employee {
    constructor(name, salary, workingHours) {
        super(name, salary); // Passes the arguments to parent constructor
        this.workingHours = workingHours;
    }
    supervisor() {
        console.log("Your supervisor is Gamma");
    }
}
// Employee is Parent class and Worker is Child car
let worker1 = new Worker("Beta", 1000, 8);
console.log(worker1);

class BankAccount {
    constructor(name, pin) {
        this.name = name;
        this.pin = pin;
        this.history = [];
    }
    passbook() {
        return this.history;
    }
    deposit(amount) {
        this.history.push(amount);
        return this; // for chaining of methods
    }
    withdraw(amount) {
        this.deposit(-amount);
        return this; // for chaining of methods
    }
}

let accountBook = new BankAccount("Delta", 9570);
console.log(accountBook);
// chaining of methods - all these properties is applied on instance so we have to return an instance for chaining
console.log(accountBook.deposit(500).deposit(400).withdraw(200).withdraw(100).passbook());