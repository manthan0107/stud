import React, { Component } from 'react'

export class Stateclassprop extends Component {
    state = {
        Rno: this.props.Rno,
        Name: this.props.Name,
        Gender: this.props.Gender
    }
  render() {
    return (
      <div>
        <h2>Roll Number: {this.state.Rno}</h2>
        <h2>Name: {this.state.Name}</h2>
        <h2>Gender: {this.state.Gender}</h2>
      </div>
    )
  }
}
export default Stateclassprop
