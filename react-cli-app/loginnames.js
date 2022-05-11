import axios from "axios";

async function loginnamesGithub(){
    try{
        const res = await axios.get('https://api.github.com/users', {
            auth: {
                username: 'MalikVedanshu',
                password: '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'
            }
        });
        // console.log(res.data);
        for(let i = 0; i < res.data.length; i++){
            let user = await axios.get(`https://api.github.com/users/${res.data[i].login}`, {
            auth: {
                username: 'MalikVedanshu',
                password: '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'
                }
            });
            res.data[i].followers = user.data.followers;
            console.log(res.data);
        }
        console.log(res.data);
    }
    
    catch (err){
        console.log('something went wrong');
    }

}


loginnamesGithub();

export default loginnamesGithub;