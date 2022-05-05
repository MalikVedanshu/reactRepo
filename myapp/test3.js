import axios from 'axios';
import readlineSync from 'readline-sync';

function hitAPI(username){
    return axios.get(`https://api.github.com/users/${username}`);
}

const username = readlineSync.question('Enter the Github username you are looking for .. ')
hitAPI(username)
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log('some error dude');
    })