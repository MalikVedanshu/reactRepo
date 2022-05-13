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
                bio: '',
                interests: []
            }
        }
    }
    onChange = (event) => {
        this.setState({
            userdata: {
                ...this.state.userdata,
                [event.target.name]: event.target.value
            }
        });
    }
    checkBoxHandler = (event) => {
        let interests = this.state.userdata.interests;
        event.target.checked ? interests.push(event.target.value) : interests = interests.filter(skill => skill !== event.target.value);
        this.setState({
            userdata: {
                ...this.state.userdata,
                interests: interests
            }
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.userdata);
    }
    render() {
        const { fname, lname, email, profileurl, bio } = this.state.userdata;
        return (
            <div className="formdata">
                <center>
                    <h1> Customer Form </h1>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="fname">First name:</label>
                        <input type="text" name="fname"
                            onChange={this.onChange}
                            required
                            value={fname}
                        /> <br /><br />
                        <label htmlFor="lname" >Last name:</label>
                        <input type="text" name="lname" onChange={this.onChange} required value={lname} /><br /><br />

                        <label htmlFor="email">Enter your email:</label>
                        <input type="email" name="email" onChange={this.onChange} required value={email} /><br /><br />

                        <p>Choose your gender :</p>
                        <input type="radio" name="gender" value="Male" onChange={this.onChange} /><label htmlFor="html"> Male </label>
                        <input type="radio" name="gender" value="Female" onChange={this.onChange} /><label htmlFor="html"> Female </label>
                        <input type="radio" name="gender" value="Other" onChange={this.onChange} /><label htmlFor="html"> Other </label><br /><br />

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
                        <label htmlFor="interests"> UI Development</label>
                        <input type="checkbox" value="UI Development" name="interests" onChange={this.checkBoxHandler} />

                        <label htmlFor="interests"> Backend Development</label>
                        <input type="checkbox" value="Backend Development" name="interests" onChange={this.checkBoxHandler} />

                        <label htmlFor="interests"> Cloud Architect </label>
                        <input type="checkbox" value="Cloud Architect" name="interests" onChange={this.checkBoxHandler} />

                        <label htmlFor="interests"> Digital Marketing </label>
                        <input type="checkbox" value="Digital Marketing" name="interests" onChange={this.checkBoxHandler} />
                        <br /><br />
                        <label htmlFor="dob">Date of Birth:  </label>
                        <input type="date" name="birthday" onChange={this.onChange}></input><br /><br />
                        <label htmlFor="profile">Enter your twitter/linked in profile URL : </label>
                        <input type="url" name="profileurl" onChange={this.onChange} value={profileurl} /> <br /><br />
                        <label htmlFor="bio">Enter your Bio :</label> <br />

                        <textarea name="bio" rows="4" cols="50" onChange={this.onChange} value={bio}>

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