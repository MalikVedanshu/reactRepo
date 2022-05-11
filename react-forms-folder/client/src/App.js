import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            userdata: {
                fname: '',
                lname: '',
                email: '',
                gender: '',
                techstack: '',
                birthday: '',
                profileurl: '',
                bio: ''
            }
        }
    }

    onChange = (event) => {
        // console.log(event.target.name,event.target.value);
        this.setState({
            userdata : {
                this.state.userdata,
                [event.target.name]: event.target.value
            }
        })
    }

    
    
    
    render() {
        return (
            <div className="formdata">
                <center>
                    <h1> Customer Form </h1>
                    <form>
                        <label htmlFor="fname">First name:</label>
                        <input type="text" name="fname" onChange={this.onChange} required/> <br /><br />
                        <label htmlFor="lname" >Last name:</label>
                        <input type="text" name="lname" onChange={this.onChange} required/><br /><br />

                        <label htmlFor="Email">Enter your email:</label>
                        <input type="email" name="email" onChange={this.onChange} required /><br /><br />

                        <p>Choose your gender :</p>
                        <input type="radio" name="gender" onChange={this.onChange} /><label htmlFor="html"> Male </label>
                        <input type="radio" name="gender" onChange={this.onChange} /><label htmlFor="html"> Female </label>
                        <input type="radio" name="gender" onChange={this.onChange} /><label htmlFor="html"> Other </label><br /><br />

                        <label htmlFor="techstack">Choose your tech stack :</label>
                        <select name="techstack" onChange={this.onChange}>
                            <option value="None">None</option>
                            <option value="PHP">PHP</option>
                            <option value="javascript">Javascript</option>
                            <option value="java">Java</option>
                            <option value="ruby">Ruby</option>
                            <option value="python">Python</option>
                        </select><br /><br />
                        <br />

                        <label htmlFor="dob">Date of Birth:  </label>
                        <input type="date" name="birthday" onChange={this.onChange}></input><br /><br />
                        <label htmlFor="profile">Enter your twitter/linked in profile URL : </label>
                        <input type="url" name="profileurl" onChange={this.onChange} /> <br /><br />
                        <label htmlFor="bio">Enter your Bio :</label> <br />

                        <textarea name="bio" onChange={this.onChange} rows="4" cols="50">

                        </textarea>
                        <br /><br />

                        <input type="submit" value="Submit" />
                    </form>
                </center>

            </div>
        )
    }
}

export default App;