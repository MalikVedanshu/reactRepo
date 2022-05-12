function stutter(str,times){
    if(times < 0){
        return;
    }
    let output = stutter((str.substring(0,3)),times-=1) + str;
    return output;
}

let randomArr = [];
for(let k = 0; k < 100; k++){
  randomArr[k] = k+1;
}
randomArr.sort((a,b) => 0.5 - Math.random());

let arr = [];
  for(let i = 0; i < 10; i++){
    arr.push(randomArr.splice(0,10));
  }
  console.log(arr);