import axios from 'axios';

for(let i = 1; i<= 5; i++){
    axios.get(`https://jsonplaceholder.typicode.com/users/${i}/todos`)
        .then((res) => {
            console.log(res.data[0]);
        })
        .catch((err) => {
            console.log(err);
        });

}