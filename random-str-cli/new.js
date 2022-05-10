import readlineSync from 'readline-sync';
function createString() {
    const lengthOfStringRequired = readlineSync.questionInt("Enter the length requred : ");
    let str = Math.random().toString(36).substring(2, 18);
    let stri = '';
    while (stri.length < lengthOfStringRequired) {
        stri = stri + str;
        if (stri.length >= lengthOfStringRequired) {
            stri = stri.substring(0, lengthOfStringRequired);
            // console.log(str);
            break;
        }
    }
    console.log(stri);
}

function createRandomAlpha() {
    const lengthNeeded = readlineSync.questionInt("Enter the length requred : ");
    let arr = [];
    for (let num = 10; num < 36; num++) {
        arr.push(num.toString(36));
    }

    let strg = '';
    while (strg.length < lengthNeeded) {
        strg = strg + arr[Math.floor(26 * Math.random())] + '';
    }
    console.log(strg)
}


// createString();
createRandomAlpha();