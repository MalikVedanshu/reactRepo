import axios from "axios";

async function loginnamesGithub(){
    try{
        let res = await axios.get('https://api.github.com/users');
        let names = res.data.map(user => user.login)
        // names = names.sort((a,b) => b.login-a.login);
        names = names.sort();
        console.log(names);
    }
    
    catch (err){
        console.log('something went wrong')
    }

}
loginnamesGithub();

export default loginnamesGithub;