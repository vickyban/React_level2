import React, { Component } from 'react'

export default class Toggle extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    return (
      <div>
        {/* {if on then execute (to do)} */}
        {this.state.on && (
          <h1>Toggle Me</h1>
        )}
        <button onClick={this.toggle}>Show/Hide</button>
      </div>
    )
  }
}
