import readlineSync from 'readline-sync';
import loginNameGitHub from './loginnames';

function main() {
    console.clear();
    console.log('-----------------------------------');
    console.log('\t Random string CLI');
    console.log('----------------------------------');
    let choose = readlineSync.questionInt(`
    0 to Exit \n
    1 to Generate random Alpha-Numeric string \n
    2 to Generate random string of only alphabets \n\n
    Enter your Option : `);



    
    switch (choose) {
        
        case 1:
            createString();
            break;
        case 2:
            createRandomAlpha();
            break;
        default:
            console.log('Terminating..')
    }
    
    let ask = readlineSync.question("Do you want to continue ? (y/n)");
    if(ask == 'y' || ask == 'Y' || ask == 'yes' || ask == 'Yes'){
        main();
    }
    else{
        console.log('Terminating program.. ')
        return;
    }
}

main();

function createString() {
    const lengthOfStringRequired = readlineSync.questionInt("Enter the length requred : ");
    let str = Math.random().toString(36).substring(2, 18);
    let stri = '';
    while (stri.length < lengthOfStringRequired) {
        stri = stri + str;
        if (stri.length >= lengthOfStringRequired) {
            stri = stri.substring(0, lengthOfStringRequired);
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