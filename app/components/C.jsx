import React, { Component } from 'react'

export default class C extends Component {
  changeInfo() {
    this.props.actions.login({
      userid: 'jack',
      city: '南京'
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.changeInfo.bind(this)}>修改</button>
      </div>
    )
  }
}
