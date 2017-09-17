import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions/userinfo'

import A from '../components/A'
import B from '../components/B'
import C from '../components/C'

class Demo extends Component {
  render() {
    return (
      <div>
        <p>home</p>
        <hr/>
        <A userinfo={this.props.userinfo}/>
        <hr/>
        <B userinfo={this.props.userinfo}/>
        <hr/>
        <C actions={this.props.actionsDis}/> 
      </div>
    )
  }

  
  componentDidMount() {
    console.log(this.props.actionsDis)
    this.props.actionsDis.login({
      userid: 'tom',
      city: '北京'
    })
  }
  
}

function mapStateToProps(state) {
  console.log(state)
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actionsDis: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo)
