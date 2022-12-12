import React, { Component } from 'react'
import EnComponent from './EnComponent'
class HoverCounter extends Component {
  
  render() {
    const {name,count,increment}=this.props
    return (
      <div>
        <button onMouseMove={increment}>Hover{count} </button>
      </div>
    )
  }
}
export default EnComponent(HoverCounter);
