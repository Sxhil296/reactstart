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

  incrementByFive() {
    this.setState({
      count: this.state.count + 5
    },
    () => {
      console.log("Callback Value by 5:", this.state.count)
    })
  }

  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={ () => this.increment()}>INCREMENT</button>
        <button onClick={() => this.incrementByFive()}>INCREMENT BY 5</button>
      </div>
    )
  }
}

export default Counter