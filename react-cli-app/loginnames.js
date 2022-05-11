import axios from "axios";

async function loginnamesGithub(){
    try{
        let res = await axios.get('https://api.github.com/users');
        console.log(res.data);
    }
    
    catch (err){
        console.log('something went wrong')
    }

}
// loginnamesGithub();

export default loginnamesGithub;