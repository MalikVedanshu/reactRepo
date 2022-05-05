import axios from "axios";

axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        let objj = {}
        res.data.forEach(ele => {
            let uname = ele.username;
            let geoLok = ele.address.geo;
            objj[uname] = `stays at ${geoLok.lat} latitude and ${geoLok.lng} longitude`;
        });
        console.log(objj);
    })
    .catch((err) => {
        console.log(err);
    })