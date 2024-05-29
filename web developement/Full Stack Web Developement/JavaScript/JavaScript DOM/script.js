console.log(document);
console.log(document.URL);

let result1 = document.querySelector('p'); // search first element
let result2 = document.querySelectorAll('p'); // search all elements
console.log(result1);
console.log(result2);
result2.forEach(ele => {
    console.log(ele);
})

// class
let result3 = document.querySelector('.p2'); // querySelectorAll also works
console.log(result3);

// id
let result4 = document.querySelector('#p3'); // querySelectorAll also works
console.log(result4);

// same function can be done by old style getElementsByTagName, getElementsByClassName or getElementById
// gives HTMLCollection data structure unlike NodeList by querySelector and querySelectorAll
// forEach loop doesn't work on this
let result5 = document.getElementsByTagName('p');
let result6 = document.getElementsByClassName('p2'); // search all elements
let result7 = document.getElementById('p3'); // search one element as id is unique
console.log(result5);
console.log(result6);
console.log(result7);

let info1 = document.querySelector('h4');
console.log(info1);
console.log(info1.innerText);

// it can also be done by innerHTML
// innerHTML does not ignore whitespaces
console.log(info1.innerHTML);
// it also retrive and set content in HTML format unlike innerText which only retrives and sets as plain text
let info2 = document.querySelector('.pageInfo');
console.log(info2.innerText);
console.log(info2.innerHTML);

info1.innerText += "\n<p>Hey</p>"; // update as plain text. we can append using += operator and replace using = operator
info2.innerHTML += "<p>Hey</p>"; //update as HTML

let link = document.querySelector('a');
// get attribute
console.log(link.getAttribute('href'));
// set attribute
link.setAttribute('href', "www.yahoo.com");
link.innerText = "Yahoo";
console.log(link.getAttribute('href'));

result1.style.color = "red";
result3.style.backgroundColor = "yellow";

result3.classList.add('newClass');
result3.classList.remove('p2');
result3.classList.replace("newClass", "p2");

let parent = document.querySelector('.parent');
console.log(parent.children); // it gives HTMLCollection which can't be iterated by a loop
// so we convert HTMLCollection to Array using Array.from() method
console.log(Array.from(parent.children)); // This can be iterated through loop
Array.from(parent.children).forEach(key => {
    key.classList.add("added");
})

let child = document.querySelector('.child');
console.log(child.parentElement);
console.log(child.nextElementSibling);
console.log(child.previousElementSibling);

let button = document.querySelector('.button');
button.addEventListener('click', function () {
    console.log("Button Clicked");
    let newChild = document.createElement('div'); // add new element
    newChild.textContent = "New Child";
    newChild.classList.add("child");
    parent.append(newChild); // prepend also works
})

let children = document.querySelectorAll('.child');
children.forEach(e => {
    e.addEventListener('click', e => {
        console.log(e);
        console.log(e.target);
        e.target.style.color = "pink";
        e.target.remove(); // remove clicked elements
    })
})

// event bubbling - event occured on child will also occur on its parent
// this can cause both event meant for child and parent to be done on clicking child
// delegation - specifying where exactly event occured to specify task for only doing event for child
let paragraphs = document.querySelector('.paragraphs');
paragraphs.addEventListener('click', e => {
    if (e.target.nodeName == "P") {
        e.target.remove();
    } else {
        console.log("Paragraphs Clicked")
    }
})

let form = document.querySelector('form');
// let email = document.querySelector('#email'); // method 1
let userName = document.querySelector('#user');
// let password = document.querySelector('#password'); // method 1
let passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$"; // regular expression or regex
// password must contain atleast one uppercase letter
// password must contain atleast one lowercase letter
// password must contain atleast one number
// maximum password length is 16 and minimum passwrod length is 8
let userNamePattern = /^[A-Za-z]{6,12}$/
// username can only contain uppercase or lowercase letters
// username size must be between 6 - 12
form.addEventListener('submit', e => {
    e.preventDefault(); // prevent page from reloading and removing email password and console logs on submit
    // console.log(email.value,password.value); // method 1
    // console.log(form.email.value,form.password.value); // method 2
    console.log(form.userEmail.value, form.userPassword.value);
    let result8 = form.userPassword.value.match(passwordPattern); // match does not return boolean value
    console.log(result8);
    if (result8) {
        console.log("Strong Password. Accepted");
    } else {
        console.log("Weak Password. Try Again")
    }
    let result9 = userNamePattern.test(userName.value); // test returns boolean value
    if (result9 == true) {
        console.log("UserName Valid");
    } else {
        console.log("UserName Invalid");
    }
})

// Live Feedback
userName.addEventListener('keyup', e => {
    // console.log(e);
    if (userNamePattern.test(e.target.value)) {
        // console.log("UserName is Valid");
        user.setAttribute("class", "success");
    } else {
        // console.log("UserName is Invalid");
        user.setAttribute('class', 'error');
    }
})