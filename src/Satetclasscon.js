import React, { Component } from 'react'

export class Satetclasscon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Rno: this.props.Rno,
            Name: 'mohit'
        }
    }
    render() {
        return (
            <div>
                <h2>Hello: Your rollno is{this.state.Rno} and Name is :{this.state.Name}</h2>
            </div>
        )

    }
}

export default Satetclasscon;
