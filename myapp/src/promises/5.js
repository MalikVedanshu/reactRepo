import axios from "axios";






const gitHubUsername = ['malikvedanshu', 'ip11' , 'ry'];
let arr = gitHubUsername.map(users => axios.get(`https://api.github.com/users/${users}` , {
    auth : {
        username : 'malikvedanshu',
        password : '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'}
    }
    ));

Promise.all(arr)
    .then((res) => {
        res.forEach(respn => {
            console.log(respn.data.name, respn.data.followers, respn.data.following);
        });
    })
    .catch((err) => {
        console.log('some issue here.. watchout');
    })
    setTimeout(() => {
        console.log(arr);
    }, 7000);