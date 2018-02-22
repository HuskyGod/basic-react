import React, { Component } from 'react'
import {connect} from 'react-redux';

class List extends Component {
  render() {
    return (
      <div className="router_tag">
        demo1
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(List)