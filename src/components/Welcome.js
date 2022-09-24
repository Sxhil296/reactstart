import { Component } from "react";

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>class components</h1>
                <h1>Hello {this.props.name} {this.props.lname}</h1>
            </div>
        )
    }
}
export default Welcome