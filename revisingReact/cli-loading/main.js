import axios from 'axios';
import followersGithub from './followers.js';
import loginNamesGitHub from './loginNames.js';
import readlineSync, { keyIn } from 'readline-sync';

async function apiCLI() {
    let sortLike = readlineSync.questionInt(`------------------------------------------- \n
        input 0 to exit \n
        input 1 to sort followers count to decending order \n
        input 2 to sort login names to ascending oder \n
        -------------------------------------------      : `)
    switch (sortLike) {
        case 1:
            await followersGithub();
        case 2:
            await loginNamesGitHub();
        default:
            
    }
    if (readlineSync.keyInYN('do you want to continue ? ')) {
        apiCLI();
    }
    else {
        console.log('closing terminal');
    }
}
apiCLI();