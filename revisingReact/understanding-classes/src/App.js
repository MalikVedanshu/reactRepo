import React from "react";
import axios from 'axios'
import './App.css';
import Loading from './loading';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            headers: [],
            dataa: [],
            Loading : false
        }
    }
    async componentDidMount() {
        this.setState({
            Loading : true
        });
        let todos = await axios.get('https://jsonplaceholder.typicode.com/todos');
        let myData = todos.data.map(elemm => Object.values(elemm))
        // console.log(myData);

        this.setState({
            headers: Object.keys(todos.data[0]),
            dataa: myData,
            Loading : false
        })
    }
    render() {
        return (
            <>
            <center>
                <button>Completed</button>
            <table>
                <thead>
                    <tr>
                        {
                            this.state.headers.map((ele, i) => (
                                <th key={i}>{ele}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.dataa.map((elemen, j) => (
                            <tr key={j}>
                                {
                                    elemen.map((element, k) => (
                                        <td key={k}>{element.toString()}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {
                this.state.Loading && (<Loading />)
            }
            
            </center>
            </>
        )
    }
}

export default App;