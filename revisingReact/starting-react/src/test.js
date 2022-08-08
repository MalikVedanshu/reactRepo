import axios from "axios";

async function hitAPI() {
    try {
        let users = await axios.get('https://api.github.com/users' , 
        {auth: 
            { username: 'MalikVedanshu', password: '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' }
        })
        let usersData = [];
        for(let i = 0; i < users.data.length; i++){
            let auser = await axios.get(users.data[i].url , 
            {auth: 
                { username: 'MalikVedanshu', password: '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' }
            })
            usersData.push(auser);
        }
        console.log(usersData);
    }
    catch (error) {
        console.log('it went wrong');
    }
}

hitAPI();