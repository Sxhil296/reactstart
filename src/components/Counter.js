import React, { Component } from 'react' //rce

class Counter extends Component {

  constructor(props) { //rconst
    super(props)
  
    this.state = {
       count: 0
    }
  }

  increment() { //main function
    this.setState({
      count: this.state.count + 1
    },
    () => {
      console.log("Callback Value:", this.state.count) //callback function
      }
    )
    console.log(this.state.count) //synchronous function
  }

  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={ () => this.increment()}>INCREMENT</button>
      </div>
    )
  }
}

export default Counter