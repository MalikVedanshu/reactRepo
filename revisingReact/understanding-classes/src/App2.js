import React from "react";
import axios from "axios";
import './App.css';
import Loading from './loading';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data : [],
            loading : false
        }
    }

    async componentDidMount(){
        this.setState({
            loading : true
        })
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            this.setState({
            data : res.data
        });
        this.state.loading = false;
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
                                            {Object.values(ele.address).map((el,idx) => (
                                                idx < Object.values(ele.address).length - 1 && (<p key={idx}>{el}</p>)
                                            ))}
                                        </address>
                                    </td>
                                    <td><p>{Object.values(ele.address.geo.lat)}</p> <p>{Object.values(ele.address.geo.lng)}</p></td>
                                    <td>{ele.phone}</td>
                                    <td><a href={ele.website}>{ele.website} </a></td>
                                    <td>
                                        <address>{Object.values(ele.company).map((elemente,eleKii) => (
                                            <p key={eleKii}>{elemente}</p>
                                        ))}</address>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {this.state.loading && (<Loading />)}
            </center>
            </>
        )

    }
}
export default App;