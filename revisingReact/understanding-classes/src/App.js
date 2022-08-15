import React from "react";
import axios from "axios";
import './App.css';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data : []
        }
        
    }

    async componentDidMount(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({
            data : res.data
        });
        // console.log(this.state.data,dataArr);
    }

    render(){
        return(
            <>
            <center>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Geo</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((ele,keyele) => (
                                <tr key={keyele}>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.username}</td>
                                    <td>{ele.email}</td>
                                    <td>
                                        <address>
                                            {Object.values(ele.address).map((el,idx) => {
                                                if(idx < Object.values(ele.address).length - 1){
                                                    return (<p>{el}</p>)
                                                }
                                            })}
                                        </address>
                                    </td>
                                    <td><p>{Object.values(ele.address.geo.lat)}</p> <p>{Object.values(ele.address.geo.lng)}</p></td>
                                    <td>{ele.phone}</td>
                                    <td><a href={ele.website}>{ele.website} </a></td>
                                    <td>
                                        <address>{Object.values(ele.company).map((elemente) => (
                                            <p>{elemente}</p>
                                        ))}</address>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </center>
            </>
        )

    }
}
export default App;