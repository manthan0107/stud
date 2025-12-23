import React, { Component } from 'react'

export class Eventclass extends Component {
    clickHandle = () => {
        alert("Button Clicked");
    }
    render() {
        return (
            <div>
                <h2>Event Management</h2>
                <button onClick={this.clickHandle} >Click Here</button>
            </div>
        )
    }
}

export default Eventclass
