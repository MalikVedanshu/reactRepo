import axios from 'axios';

// let url = `https://gist.githubusercontent.com/yoobi55/5d36f13e902a75225a39a8caa5556551/raw/cbd57cfdddbdfc009fd9ccdadf5fb7129af71c73/restaurant-data.json`;

function hitAPI(link){
    return axios.get(link);
}

let url = `https://gist.githubusercontent.com/yoobi55/5d36f13e902a75225a39a8caa5556551/raw/cbd57cfdddbdfc009fd9ccdadf5fb7129af71c73/restaurant-data.json`;
hitAPI(url)
    .then((res) => {
        res.data.restaurants.forEach(ele => {
            // console.log(ele.operating_hours);
            for (let key in ele.operating_hours) {
                    let element = ele.operating_hours[key];
                    if(element.slice(0,1) * 0 == 0){
                        element = element.split(', ');
                        // console.log(element);
                        let OPHours = element.map(elem => {
                            elem = elem.split('-');
                            elem[0] = to24HourTime(elem[0].trim());
                            elem[1] = to24HourTime(elem[1].trim());
                            return elem[0] + ' - ' + elem[1];
                        })
                        element = OPHours.join(' ,');
                    }
                    ele.operating_hours[key] = element;
            }
            console.log(ele);
        });
        })
    .catch((err) => {
        console.log('something went wrong');
    })
    
    function to24HourTime(time) {
        let parts = time.split(' ');
        let HrMins = parts[0].split(':')
        if (parts[1] === "AM" && HrMins[0] == 12){
            return '00:' + HrMins[1];
        }
        if (parts[1] === "PM" && HrMins[0] == 12){
            return '12:' + HrMins[1];
        }
        if (parts[1] === "AM") {
            return parts[0];
        }
        return 12 + parseFloat(HrMins[0]) + ':' + HrMins[1];
    }
