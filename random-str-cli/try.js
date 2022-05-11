import axios from "axios";

async function loginNameGitHub() {
    try {
        const res = await axios.get("https://api.github.com/users");
        let arr = [];
        let names = res.data.map(ele => {
            arr.push(ele);
        });
        console.log(arr);
    }
    catch (err){
        console.log('something went wrong..')
    }
}
loginNameGitHub();
export default loginNameGitHub;