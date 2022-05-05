import axios from "axios";

let url = 'https://api.github.com/users';
const key = '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';
axios.get(url, {
    headers: {
        'Authorization' : `Basic ${key}`
    }
})
    .then((res) => {
        console.log(res.data);
    })
.catch((err) => {
    console.log('something went wrong');
})