import React, { Component } from 'react'

export default class A extends Component {
  render() {
    return (
      <div>
        <p>{this.props.userinfo.userid}</p>
      </div>
    )
  }
}
