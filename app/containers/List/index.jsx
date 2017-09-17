import React, { Component } from 'react'
import { hashHistory } from 'react-router'

export default class List extends Component {
  toDetail(value) {
    hashHistory.push('/detail/' + value)
  }

  render() {
    const arr = [1, 2, 3, 4]
    return (
      <ul>
        {
          arr.map((item, index) => {
            return <li key={index} onClick={this.toDetail.bind(this, item)}>js jump to {item}</li>
          })
        }
      </ul>
    )
  }
}
