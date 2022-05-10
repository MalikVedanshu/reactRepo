import axios from "axios";

async function loginNameGitHub() {
    try {
        const res = await axios.get("https://api.github.com/users");
        let names = res.data.map(ele => {
            console.log(ele.login);
        })
    }
    catch (err){
        console.log('something went wrong..')
    }
}
loginNameGitHub();
export default loginNameGitHub;