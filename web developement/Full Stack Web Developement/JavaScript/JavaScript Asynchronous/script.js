console.log("start")
// Async code
setTimeout(() => { // arguments: first function, timer, callbak function(the function which will occur after timer ends)
    console.log("async code");
}, 3000); // after 3000 ms or 3 sec
console.log("end");

// +-------------------------------------------------------------------------------+
// |                                Readystate                                     |
// +-------+--------------------+--------------------------------------------------+
// | Value |        State       |                Description                       |
// +-------+--------------------+--------------------------------------------------+
// |   0   |        UNSENT      |  Client has been created, open() not called yet  |
// |   1   |        OPENED      |  open() has been called                          |
// |   2   |  HEADERS_RECEIVED  |  send() has been called and headers are received |
// |   3   |       LOADING      |  Downloading, responseText holds partial data    |
// |   4   |         DONE       |  The operation is complete                       |
// +-------+--------------------+--------------------------------------------------+

// +-------------------------------------------------------------------------------+
// |                        HTTP response status codes                             |
// +--------------------+----------------------------------------------------------+
// |    Status code     |                    Description                           |
// +--------------------+----------------------------------------------------------+
// |     100 - 199      |               Informational responses                    |
// |     200 - 299      |                Successfull responses                     |
// |     300 - 399      |                 Redirection messages                     |
// |     400 - 499      |               Client error responses                     |
// |     500 - 599      |               Server error responses                     |
// +--------------------+----------------------------------------------------------+

console.log("start");
let httpRequest = (resource, callback) => {
    // Making HTTP request
    let request = new XMLHttpRequest();
    console.log(request);

    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4) {
            if (request.status == 200) {
                let data = JSON.parse(request.responseText);
                callback(data, undefined);
            } else {
                callback(undefined, "Data could not be fetched");
            }
        }
    })

    // Set up the request
    request.open("Get", resource);

    //Sending the request
    request.send();
}
httpRequest("https://jsonplaceholder.typicode.com/todos", (Data, error) => { // calling httpRequest function
    if (error) {
        console.log(error);
    } else {
        console.log(Data);
    }
    // since callback is asynchronous in nature we can't make sure which callback will execute first
    // This may cause error if one callback function is dependent on other which is not yed executed
    // One way to overcome this is to make nested callback functions
    // This chain of cllback makes code complicated and is called callback hell
    httpRequest("data.json", (Data, error) => {
        if (error) {
            console.log(error);
        } else {
            console.log(Data);
        }
        // more nested callbacks here
    })
})
console.log("end");

// Promise
// To avoid this calllback hell we use Promise
let newHttpRequest = (resource) => {
    return new Promise((resolve, reject) => {
        // Making HTTP request
        let request = new XMLHttpRequest();
        console.log(request);

        request.addEventListener('readystatechange', () => {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    let data = JSON.parse(request.responseText);
                    resolve(data); // Call resolve on success
                } else {
                    reject("Data could not be fetched"); // Call reject on failure
                }
            }
        })

        // Set up the request
        request.open("Get", resource);

        //Sending the request
        request.send();
    })
}
newHttpRequest("data.json").then((data) => { // then will be called if this function calls resolve instead of reject
    console.log("Promise 1 resolved : ", data);
    return newHttpRequest("https://jsonplaceholder.typicode.com/todos"); // return async function
}).then((data) => { //then is called if resolve is called on called function
    // in this case function at line 104 calls then if resolve is called
    console.log("Promise 2 resolved", data);
    // and so on
    // no callback hell here
}).catch((error) => { // first function to call reject triggers catch
    console.log(error);
})

// fetch API
fetch("data.json").then((response) => {
    console.log("Promise resolved");
    return response.json();
}).then((data) => {
    console.log(data);
    // more nesting
}).catch((error) => {
    console.log(error);
})

// async and await
// to avoid using multiple then and chaining data we use aync and await
// await can only be used in async function
// we can get the same output using then only once making it more readable
let getHTTPRequest = async (resource) => {
    let response = await fetch(resource);
    // custom error
    if (response.status !== 200) {
        throw new Error("Custom: Error in fetching the data");
    }
    let data = await response.json();
    return data;
}
getHTTPRequest("data.json").then((data) => {
    console.log(data);
}).catch((error) => {
    // Default collection of error messages are provided, custom error message can also be generated
    console.log(error.message);
})

// multiple data
let getHTTPRequests = async () => { // as in above we can also pass resource1 and resourse2 as argument
    try {
        let response1 = await fetch("data.json");
        let data1 = await response1.json();
        let response2 = await fetch("https://jsonplaceholder.typicode.com/todos");
        let data2 = await response2.json();
        // and response3, response4 and so on
        return { response1: data1, response2: data2 };
    } catch (error) {
        console.log(error.message);
    }
}
getHTTPRequests().then((data) => {
    console.log(data);
    console.log("Response 1: ", data['response1']);
    console.log("Response 2: ", data['response2']);
}).catch((error) => {
    console.log(error.message);
})

// try and catch
try {
    let x = 4;
    const y = 7;
    y = x; // value of const can't be changed
} catch (error) {
    console.log(error.message);
}