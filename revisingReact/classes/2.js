const Members = require("./1.js")
class moreMember extends Members{
    constructor(name,phone,exp){
        super(name,phone,exp)
        this.exp = exp;
    }
    addHobby(hobby){
        this.hobby.push(hobby);
    }
    popHobby(){
        this.hobby.pop()
    }
    
}
// const ved = new moreMember('ved','9654654426','2y');
// ved.hobby = 'sleeling';
// console.log(ved);
let sach = new moreMember('vedanshu','9654654426','2y');
sach.addHobby('boxing')
console.log(sach);