const fs = require('fs');

// executes itself then moves code forward ( BAD PROGRAMMING )
// const data = fs.readFileSync('data.txt','utf-8'); // async
// console.log(data);

// parallaly executes increase system performance ( GOOD PROGRAMMING )
fs.readFile('data.txt','utf-8',(err,txt)=>{
    console.log(txt);
})

console.log(1,65);