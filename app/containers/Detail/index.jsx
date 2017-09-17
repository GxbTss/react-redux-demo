import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    return (
      <div onClick={e=>window.history.go(-1)}>
        Detail ,url 参数 ： {this.props.params.id}
      </div>
    )
  }
}
