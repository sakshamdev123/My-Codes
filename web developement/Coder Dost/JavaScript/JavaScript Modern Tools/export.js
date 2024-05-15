console.log("Exporting modules");

export let order = (customerName, itemName) => { // single export
    console.log(`${customerName} ordered ${itemName}`);
}

let employeeName = "Beta";
let employeeSalary = 3500;
export { employeeName, employeeSalary as salary }; // multiple export and changing name of exported variable