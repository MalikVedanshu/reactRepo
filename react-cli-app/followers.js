import axios from "axios";

async function followersGithub(){
    try{
        let res = await axios.get('https://api.github.com/users');
        let followerData = res.data.map(user => {
            return {
                name: user.login, id :user.id
            }
        })
        // followerData = followerData.sort((a,b) => )
    }
    catch (err){
        return 'something went wrong'
    }
}
// followersGithub();

export default followersGithub;