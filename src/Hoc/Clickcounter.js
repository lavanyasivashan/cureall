import React, { Component } from 'react'
import EnComponent from './EnComponent'
class Clickcounter extends Component {
  /*  constructor(props)
{
    super(props)
    this.state={count:0}
} */

render() {
    return (
      <div>
        <button onClick={this.props.increment}>Click{this.props.count}</button>
      </div>
    )
  }
 /* inc=()=>{this.setState(
    {count:this.state.count+1}
    )
}*/
}
export default EnComponent(Clickcounter);

