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
            Loading : false,
            button : true,
            myData : []
        }
    }
    async componentDidMount() {
        this.setState({
            Loading : true
        })
        let todos = await axios.get('https://jsonplaceholder.typicode.com/todos');
        this.setState({
            myData : todos.data.map(elemm => Object.values(elemm)),
            headers: Object.keys(todos.data[0]),
            Loading : false,
            button : this.state.button,
            dataa : this.state.myData
        });
    }
    clickMethod = () => {
        this.setState({
            button : !this.state.button,
            dataa : this.state.myData.filter(elem => this.state.button ? elem[3] : !elem[3])
        })
    }
    render() {
        return (
            <>
            <center>
                <button onClick={this.clickMethod}>{this.state.button ? 'Completed' : 'Not-Completed'}</button>
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