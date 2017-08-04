import React, { Component } from 'react'
import Main from './Main'

class Layout extends Component {
  render() {
  	const pageStyle = {
      margin: "20px 0 30px 30px",
      marginRight: "30px"
    }
    return (
      <div className="container-fluid" style={ pageStyle }>
        <div className="section no-padding">
          <Main language={ this.props.language } />
        </div>
      </div>
    )
  }
}

export default Layout