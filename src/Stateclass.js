import React, { Component } from 'react'

export class Stateclass extends Component {
    state={
        Rno:1,
        Name:'mohit',
        Gender:'Male'
    }
  render() {
    return (
      <div>
        <h2>Roll Number:{this.state.Rno}</h2>
        <h2>Name:{this.state.Name}</h2>
        <h2>Gender:{this.state.Gender}</h2>
      </div>
    )
  }
}

export default Stateclass
