import React from 'react';
import PortfolioFill from './PortfolioFill'

class Portfolio extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="section no-padding">
          <div className="row center">
            <div className="col s12">
              <h2 className="header-title">Portfolio</h2>
              <hr className="small-hr"/>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <PortfolioFill langData={ this.props.langData } />
              <p className="center">I'm always looking to stretch my legs in some way, feel free to give me feedback and return to see what I've been working on!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio