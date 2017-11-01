import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import About from './About'
import Portfolio from './Portfolio'

class Main extends Component {
  render() {
  	const AboutPage = () => {
  		return (
  			<About viewData= { this.props.viewData } />
  		)
  	}
  	const PortfolioPage = () => {
  		return (
  			<Portfolio viewData= { this.props.viewData } />
  		)
  	}
    const pageStyle = {
      margin: "20px 0 30px 30px",
      marginRight: "30px"
    }
    return (
      <div  className="container-fluid" style={ pageStyle }>
        <div className="section no-padding">
        	<div className="main-view">
  	        <Route exact path="/" render={ AboutPage } />
  	        <Route path="/portfolio" render={ PortfolioPage } />
          </div>
        </div>
      </div>
    )
  }
}

export default Main