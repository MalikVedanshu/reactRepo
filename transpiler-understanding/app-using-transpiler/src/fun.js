function stutter(str,times){
    if(times < 0){
        return;
    }
    let output = stutter((str.substring(0,3)),times-=1) + str;
    return output;
}

console.log(stutter('shamshad',4));