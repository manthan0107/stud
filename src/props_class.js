
import { Component } from "react";

class Props_class extends Component {
  render() {
    return (
      <div>
        <h1>Porps example by class Component</h1>
        <h1>eid = {this.props.eid}</h1>
        <h1>ename = {this.props.ename}</h1>
        <h1>salary = {this.props.salary}</h1>
      </div>
    );
  }
}

export default Props_class;
