// Local Storage

// Set an item
localStorage.setItem('color', "Red");
localStorage.setItem('salary', "3000");
console.log(localStorage);

// Get an item
let stored = localStorage.getItem('color');
console.log(stored);

// Update an item
localStorage.setItem('color', "Green"); // Overwrite the previous value
console.log(localStorage);

// Remove an item
localStorage.removeItem('salary');
console.log(localStorage);

// Remove all items
localStorage.clear();
console.log(localStorage);

// Storing complex objects in localStorage
let employees = [
    { name: "Alpha", salary: 3000 },
    { name: "Beta", salary: 4000 }
]
let stringOfEmployees = JSON.stringify(employees);
console.log(typeof stringOfEmployees);
localStorage.setItem("Employees",stringOfEmployees);
console.log(localStorage);

// Retrieving complex object's string and converting it to original form
let stroredData = localStorage.getItem('Employees');
let originalData = JSON.parse(stroredData);
console.log(originalData);