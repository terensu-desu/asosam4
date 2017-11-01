import React, { Component } from 'react'

class About extends Component {	
  render() {
    const main = this.props.viewData[0].banner.main
    const sub = this.props.viewData[0].banner.sub
    const first = this.props.viewData[1].about.first
    const second = this.props.viewData[1].about.second
    const third = this.props.viewData[1].about.third
    const fourth = this.props.viewData[1].about.fourth 
    
    return (
      <div>
        <div className="banner-image">
          <div className="row center">
            <div className="col s12">
              <br/>
              <br/>
              <img src="https://i.imgur.com/NPqHt2yb.jpg" alt="author" className="circle responsive-img z-depth-4" />
              <h1 className="banner-text">{ main }</h1>
              <h3 className="banner-text">{ sub }</h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section z-depth-4">
            <div className="row">
              <div className="col s12">
                <div className="col s12 l2">
                  <br/>
                  <h2 id="bio" className="header-title center-align">Bio</h2>
                  <hr className="small-hr"/>
                  <div className="row center-align">
                    <div className="col s12">
                      <a href="https://www.linkedin.com/in/terence-mangram-98141a34/">
                        <span className="fa-stack fa-2x">
                          <i className="fa fa-square-o fa-stack-2x"></i>
                          <i className="fa fa-linkedin fa-stack-1x"></i>
                        </span>
                      </a>
                      <a href="https://github.com/terensu-desu">
                        <span className="fa-stack fa-2x">
                          <i className="fa fa-square-o fa-stack-2x"></i>
                          <i className="fa fa-github fa-stack-1x"></i>
                        </span>
                      </a>
                      <a href="https://twitter.com/TMangram">
                        <span className="fa-stack fa-2x">
                          <i className="fa fa-square-o fa-stack-2x"></i>
                          <i className="fa fa-twitter fa-stack-1x"></i>
                        </span>
                      </a>
                      <a href="https://www.flickr.com/photos/mynomadmind/">
                        <span className="fa-stack fa-2x">
                          <i className="fa fa-square-o fa-stack-2x"></i>
                          <i className="fa fa-flickr fa-stack-1x"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col s12 l10">
                  <p>{ first }</p>
                  <p>{ second }</p>
                  <p>{ third }</p>
                  <p>{ fourth }</p>
                </div>
              </div>
            </div>
          </div>
          <br/>
        </div>
      </div>
    )
  }
}

export default About