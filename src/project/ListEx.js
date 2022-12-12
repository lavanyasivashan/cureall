import React, { Component } from 'react'
export default class ListEx extends Component {
  render() {
    const cars=[{model:"nano ",id:1},
    {model:"skoda ",id:2},
    {model:"audi ", id:3},
    {model:"breeza",id:4}
  ];
    return (
      <>
      <h1>
      {cars.map((val)=> <li key={val.id}>{val.model} </li>)}
      </h1>
      <h2>
      abc
      </h2>
      </>
    )
    }
}


