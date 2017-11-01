import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import NihonALT from './p1/NihonALT'
import LanguageStore from '../stores/LanguageStore'

class Main extends Component {	

	sendData(lang) {
		if(lang === true) {
			return LanguageStore.getData("english")
		}
		return LanguageStore.getData("japanese")
	}

  render() {
  	const AboutPage = (props) => {
  		return (
  			<About langData= { this.sendData(this.props.language) } />
  		)
  	}
  	const PortfolioPage = (props) => {
  		return (
  			<Portfolio langData= { this.sendData(this.props.language) } />
  		)
  	}
  	const ContactPage = (props) => {
  		return (
  			<Contact langData= { this.sendData(this.props.language) } />
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
  	        <Route path="/contact" render={ ContactPage } />
          </div>
        </div>
      </div>
    )
  }
}

export default Main