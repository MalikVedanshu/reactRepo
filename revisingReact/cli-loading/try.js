let obj = [
    { login: 'technoweenie' } , { login: 'macournoyer' },{ login: 'caged' },{ login: 'roland' }
]

// let sortedObj = obj.sort((a,b) =>  {
//     if(a.login > b.login) {
//         return b - a;
//     }
//     else {
//         return a - b;
//     }
// })
// console.log(sortedObj);
obj = obj.sort((a,b) => {
    if(a.login > b.login){
        return 1;
    }
    else{
        return -1;
    }
})
console.log(obj);