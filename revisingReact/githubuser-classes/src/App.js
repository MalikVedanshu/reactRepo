import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
  super();
  this.state = {
    data : []
  }
  }

  async componentDidMount() {
    // let url = 'https://api.github.com/users'
    let apiData = await axios.get('https://api.github.com/users');
    this.setState({
      data : apiData.data
    })
  }

  render() {
    return(
      <>
      <center>
            {
              this.state.data.map((ele,idx) => (
                <div key={idx}>
                  <img src={ele.avatar_url} alt= "avatarPic"></img><br></br>
                  <button> {ele.login} </button>
                </div>
              ))
            }
      </center>
      </>
    )
  }
}

export default App;
