import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom' //normally BrowserRouter
import Sidebar from './components/Sidebar'
import Layout from './components/Layout'

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      english: true
    }
  }

  handleLangUpdate(e) {
    this.setState({
      english: !this.state.english
    })
    e.preventDefault()
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          <Sidebar language={ this.state.english } updateLang={ this.handleLangUpdate.bind(this) } />
          <Layout language={ this.state.english } />
        </div>
      </Router>
    )
  }
}

export default App