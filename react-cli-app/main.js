import readlineSync from 'readline-sync';
import axios from 'axios';
import loginnamesGithub from './loginnames.js';
import followersGithub from './followers.js';


async function main() {
    console.clear();
    console.log('-----------------------------------');
    console.log('\t Axios Github CLI');
    console.log('----------------------------------');
    let choose = readlineSync.questionInt(`
    0 to Exit \n
    1 to Sort Github login names in descending order \n
    2 to Sort according to followers in descending order \n\n
    Enter your Option : `);
        switch (choose) {
            case 1:
                await followersGithub();
                break;
            case 2:
                await loginnamesGithub();
                break;
            default:
                console.log('invalid input');
                
                
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