import React from "react";
import axios from "axios";
import './App.css';
import Loading from './loading';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: false,
      sortName: false,
      sortFollowers: false
    }
  }
  async componentDidMount() {
    this.setState({
      loading: true
    })
    let apiData = await axios.get('https://api.github.com/users', {
      auth: {
        username: 'MalikVedanshu',
        password: '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'
      }
    })

    for (let i = 0; i < apiData.data.length; i++) {
      let output = await axios.get(apiData.data[i].url);

      apiData.data[i]['userFollowers'] = output.data.followers;
      apiData.data[i]['names'] = output.data.name;
    }

    this.setState({
      data: apiData.data,
      loading: false
    })
  }

  sortByName = () => {
    if (this.state.sortName === true) {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.login.toLowerCase() > b.login.toLowerCase()) {
            return 1
          }
          else {
            return -1
          }
        }),
        sortName: false
      })
    }
    else {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.login.toLowerCase() > b.login.toLowerCase()) {
            return -1
          }
          else {
            return 1
          }
        }),
        sortName: true
      })
    }

  }
  sortByFollowers = () => {
    if (this.state.sortFollowers === true) {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (b.userFollowers > a.userFollowers) {
            return 1;
          }
          else {
            return -1;
          }
        }),
        sortFollowers : false
      })
      
    }
    else {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (b.userFollowers > a.userFollowers) {
            return -1;
          }
          else {
            return 1;
          }
        }),
        sortFollowers : true
      })
    }
  }

  render() {
    return (
      <>
        <center>
          <button onClick={this.sortByName}> Sort by Github Names</button>
          <button onClick={this.sortByFollowers}> Sort by Followers</button>

          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Login Name</th>
                <th>ID </th>
                <th>Full Name</th>
                <th>Profile Picture </th>
                <th>Avatar URL</th>
                <th>Followers</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.data.map((elem, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{elem.login}</td>
                    <td>{elem.id}</td>
                    <td>{elem['names']}</td>
                    <td><img src={elem.avatar_url} alt={elem.avatar_url}></img></td>
                    <td><a href={elem.followers_url}>{elem.followers_url}</a></td>
                    <td>{elem['userFollowers']}</td>
                  </tr>
                ))
              }

            </tbody>
          </table>
          {this.state.loading && <Loading />}
        </center>

      </>
    )
  }
}
export default App;