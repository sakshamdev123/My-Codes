// Destructuring an array
let arr = [1, 4, 6, 4];
let [a, b, c, d] = arr;
console.log(a, b, c, d);

let hotel = {
    name: "Hotel Alpha",
    location: "Beta",
    foodCategories: ["Italian", "Chinese", "English"],
    openingHours: {
        sunday: { open: "09:00AM", close: "11:00PM" },
        monday: { open: "10:00AM", close: "10:00PM" },
        tuesday: { open: "08:00AM", close: "10:00PM" }
    }
}
let [first, second] = hotel.foodCategories;
console.log(first, second);
let [x, , z] = hotel.foodCategories;
console.log(x, z);

// Swapping
[z, x] = [x, z]; // two variables can be also swapped using temp
console.log(x, z);

// Destructuring of nested array
let array = [2, 5, [3, 8]];
let [q, , [e, r]] = array;
console.log(q, e, r);

// Destructuring of an object
let { name, foodCategories } = hotel; // order does not matter variables are assigned using keys
console.log(name, foodCategories);

// Set custom name to the variable in destructuring of an object
let { name: hotelName, foodCategories: cusine } = hotel;
console.log(hotelName, cusine);
let { name: Name, foodCategorie: Cusine = [] } = hotel; // Setting default value so that in case of name mismatch it does not give error
console.log(Name, Cusine);

// Destructuring of nested objects
let { name: newName, openingHours } = hotel;
console.log(newName, openingHours);
let { monday } = openingHours;
console.log(monday);
let { sunday: { open, close } } = openingHours;
console.log(open, close);

// Spread operator (...)
console.log(...arr); // spread operator -> comma seperated objects
console.log(1, 4, 6, 4);

let newArr = [5, 8, ...arr]; // Makes a shallow copy
console.log(newArr);
let newFoodCategories = [...hotel.foodCategories, "German", "French"];
console.log(newFoodCategories);

let newArray = [...array, ...newArr];
console.log(newArray);

// Spread operator on strings
let color = "Yellow";
console.log(...color);

// REST(...) is used in LHS unlike Spread(...) that is used in RHS
let [f, g, ...h] = newArr;
console.log(h);

let { sunday: S, ...weekDays } = hotel.openingHours;
console.log(weekDays);

// Short Circuiting
// And operator(&&) returns first falsly value, if not available returns last truthly value
let result1 = "Alpha" && 12 && "Beta"
console.log(result1);

// Or operator(||) returns first truthly value, if not available returns last falsly value
let result2 = '' || 0 || null || undefined;
console.log(result2);

// Nullish coalesing operator(??) only null and undefined as falsly values, returns first truthly value
let result3 = null ?? 0 ?? undefined;
console.log(result3);

// for-of loop
for (let item of newArr) {
    console.log(item);
}
for (let item of newArr.entries()) {
    console.log(item);
    console.log(`${item[0] + 1}: ${item[1]}`);
}
for (let [i, item] of newArr.entries()) {
    console.log(`${i + 1}: ${item}`);
}

// Enhanced object literals
let mainBuilding = "headquarter";
let umbrellaCorporations = {
    mall: {
        name: "Gamma Mall",
        location: "Delta"
    },
    hotel, // if hotel is already declared we can just write hotel, while before ES6 we had to write hotel: hotel,
    [mainBuilding]: "Ita", // computed property name, after ES6 we can use variables as key name using [] operator
    getList() { // Before ES6 => getlist: function() {
        return { mall, hotel };
    }
}
console.log(umbrellaCorporations);

// Optional chaining
// without optional chaining
if (hotel.openingHours && hotel.openingHours.saturday) { // To avoid errors like reading the value of undefined
    console.log(hotel.openingHours.saturday.open); // if we used it directly and saturday is not defined it give error
}
// with optional chaining
console.log(hotel.openingHours?.saturday?.open); // same as above if openingHours or saturday doesn't exits it returns undefined

// object looping
let keys = Object.keys(openingHours);
console.log(keys);

for (let key of keys) {
    console.log(key);
}

let values = Object.values(openingHours);
console.log(values);

let entries = Object.entries(openingHours); // Returns a 2D array, for each row zeroth index is key and first index is its value
console.log(entries);

for (let [day, { open, close }] of entries) { // destructuring of elements of entries
    // (let entry of entries) => entry is an array containing key and its object value
    // (let [day,openClose] of entries) => day is a key and openClose is an object containing open and close keys and its values
    console.log(`On ${day}, We Open at ${open} and Close at ${close}`);
}

// Sets
let itemArray = [1, 8, 4, 2, 1, 7, 9, 2, 7];
let itemSet1 = new Set(itemArray);
let itemSet2 = new Set([2, 7, 5, 4, 7, 4]);
console.log(itemSet1);
console.log(itemSet2);
console.log(itemSet1.size);
console.log(itemSet1.has(5));
console.log(itemSet2.has(7));
itemSet1.add(5);
itemSet1.add(5);
console.log(itemSet1);
itemSet2.delete(5);
console.log(itemSet2);

// Set are iterables
for (let items of itemSet2) {
    console.log(items);
}

let alpha = new Set("alpha");
console.log(alpha);

// Map
let itemMap = new Map();
itemMap.set("title", "Item Map"); // set is used for inserting elements to map
// set is chainable, we can insert multiple elements to map using a single chain
itemMap.set(1,"Item1").set(2,"Item2").set(3,"Item3");
console.log(itemMap);

// get method in map for accessing the values using key
console.log(itemMap.get(2),itemMap.get("title"));

// Size of map
console.log(itemMap.size);