import React, { Component } from 'react'

export default class WelcomeBa extends Component {
  render() {
    let heading=<center>WELCOME TO BAKINGO</center>;
    let subheading="OPTIONS: 1. Gluten-Free Bakery Products 2. Eggless Cakes 3. Choices In Sweeteners"
    return (
        <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{heading}</h1>
              <div className="is-two-thirds column is-paddingless">
                <h2 className="subtitle is -4">{subheading}</h2>
              </div>
              
            </div>
          </div>
        </section>
        </div>
    )
  }
}
