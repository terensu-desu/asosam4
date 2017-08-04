import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Banner from './Banner'
import Navbar from './Navbar'
import Home from './Home'
import Pages from './Pages'

class NihonALT extends Component {	
  render() {
    return (
    	<div className="main-wrapper container-fluid">
        <Navbar />
        <Banner />
        <hr/>
        <div className="section view-wrapper">
          <Route exact path="/nihonalt/" component={ Home } />
          <Route path="/nihonalt/:loc/:id" component={ Pages } />
        </div>
        <hr/>
        <div className="copyright-footer">
          <div className="container">
            <p className="center">Created by Terence Mangram using React, Materialize, and jQuery.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default NihonALT