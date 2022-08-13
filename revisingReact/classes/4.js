var arr = require("./3.");
console.log(arr);
let newArr = [];
let p= 0;
let q = 50;
for(let i = 0; i < 50; i++){
    newArr.push(arr.slice(p,q));
    p+=50; q+=50;
}
console.log(newArr);