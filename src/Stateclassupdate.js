import React, { Component } from 'react'

export class Stateclassupdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            massage: 'Welcome to ReactJS'
        }
    }
    clickHandler = () => {
        this.setState({
            massage: 'Thanks for subscribing ReactJS'
        })
    }
  render() {
    return (
      <div>
        <h2>{this.state.massage}</h2>
        <button onClick={() => this.clickHandler()}>Subscribe</button>
      </div>
    )
  }
}

export default Stateclassupdate
