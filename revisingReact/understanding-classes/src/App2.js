import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      a: 3,
      b:2,
      data : ['ved','sun','river']
    }
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({
        a : this.state.a+1
      })
    },2000);
    
  }
  render() {
    console.log('value of a is',this.state.a);
    return(
      <>
      {this.state.data.map((elem,i) => (
        <h1 key={i}> {elem} </h1>
      ))}
      <h2> The value of a is : {this.state.a}</h2>
      <h2> The value of a is : {this.state.b}</h2>
      </>
    )
  }
}

export default App;
