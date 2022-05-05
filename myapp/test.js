import axios from "axios";

let url = 'https://api.github.com/users';
const key = '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';
axios.get(url)
    .then((res) => {
        let arr = [];
        res.data.forEach(ele => {
            // console.log(ele.login,ele.id);
            arr.push(ele.login);
        })
        arr.filter()
    })
    .catch(() => {
        console.log('something went wrong');
    })