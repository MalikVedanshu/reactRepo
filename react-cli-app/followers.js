import axios from "axios";

async function followersGithub(){
    try{
        let res = await axios.get('https://api.github.com/users');
        console.log(res.data);
    }
    catch (err){
        return 'something went wrong'
    }
}
// followersGithub();

export default followersGithub;