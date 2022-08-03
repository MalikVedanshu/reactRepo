import axios from "axios";
import loading from 'loading-cli';
// url = https://api.github.com/usersss

async function loginNamesGitHub() {
    try {
        const load = loading("loading API!!").start();
        let res = await axios.get('https://api.github.com/users', {
            auth: {
                username: 'MalikVedanshu',
                password: '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'
            }
        })
        
        let sortedNameArray = res.data.sort((a,b) => {
            if(a.login.toLowerCase() > b.login.toLowerCase()){
                return 1;
            }
            else{
                return -1;
            }
        });
        load.stop()
        console.log(sortedNameArray);
    }
    catch (error) {
        console.log('Something went wrong');
    }
}

export default loginNamesGitHub;