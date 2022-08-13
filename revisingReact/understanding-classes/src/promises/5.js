import axios from 'axios';

async function hitAPI() {
    try {
        await axios.get('https://jsonplaceholder.typicode.com/');
    }
    catch (err) {
        console.log(err);
    }
}