import axios from 'axios';
import loading from 'loading-cli';

async function followersGithub() {
    try {
        const load = loading("loading API!!").start()
        let rawDat = await axios.get('https://api.github.com/users', {
            auth: {
                username: 'MalikVedanshu',
                password: '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'
            }
        })
        let usersData = [];
        for(let i = 0; i < rawDat.data.length; i++){
            let data = await axios.get(rawDat.data[i].url, {
                auth: { username: 'MalikVedanshu', password: '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' }
            })
            usersData.push(data.data);
        }
        usersData = usersData.sort((a,b) => {
            if(a.followers > b.followers){
                return -1;
            }
            else {
                return 1;
            }
        })
        load.stop();
        console.log(usersData);
    }
    catch (error) {
        console.log(error);
    }
}
export default followersGithub;