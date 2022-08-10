class Members{
    constructor(name,phone){
        this.name = name;
        this.phone = phone;
        this.hobby = [];
    }
    addHobby(hobby){
        this.hobby.push(hobby);
    }
    popHobby(){
        this.hobby.pop()
    }
}
// let ved = new Members('vedanshu','954654426');
// console.log(ved);
// ved.addHobby('swimming');
// ved.addHobby('boxing');
// ved.addHobby('jua');
// console.log(ved);

module.exports = Members;