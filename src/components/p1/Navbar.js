import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {

  render() {
    return (
      <div id="nihon-nav">
      	<nav>
      		<div className="view-wrapper nav-wrapper">
      			<Link to="/nihonalt" className="brand-logo">Nihon <span>ALT</span></Link>
      			<ul id="nav-mobile" className="right hide-on-med-and-down">
      				<li><a>Materials:</a></li>
      				<li><a className="dropdown-button" data-beloworigin="true" data-activates="nh1">NH1<i className="material-icons right"><span>arrow_drop_down</span></i></a></li>
      				<li><a className="dropdown-button" data-beloworigin="true" data-activates="nh2">NH2<i className="material-icons right"><span>arrow_drop_down</span></i></a></li>
              <li><a className="dropdown-button" data-beloworigin="true" data-activates="nh3">NH3<i className="material-icons right"><span>arrow_drop_down</span></i></a></li>
              <li><a className="dropdown-button" data-beloworigin="true" data-activates="specneeds">Special Needs<i className="material-icons right"><span>arrow_drop_down</span></i></a></li>
      			</ul>
      		</div>
        </nav>
        <ul id="nh1" className="dropdown-content">
          <li><Link to="/nihonalt/nh1u1/lp">Unit 1</Link></li>
          <li><Link to="/nihonalt/nh1u2/lp">Unit 2</Link></li>
          <li><Link to="/nihonalt/nh1u3/lp">Unit 3</Link></li>
          <li><Link to="/nihonalt/nh1u4/lp">Unit 4</Link></li>
          <li><Link to="/nihonalt/nh1u5/lp">Unit 5</Link></li>
          <li><Link to="/nihonalt/nh1u6/lp">Unit 6</Link></li>
          <li><Link to="/nihonalt/nh1u7/lp">Unit 7</Link></li>
          <li><Link to="/nihonalt/nh1u8/lp">Unit 8</Link></li>
          <li><Link to="/nihonalt/nh1u9/lp">Unit 9</Link></li>
          <li><Link to="/nihonalt/nh1u10/lp">Unit 10</Link></li>
          <li><Link to="/nihonalt/nh1u11/lp">Unit 11</Link></li>
          <li><Link to="/nihonalt/nh1dsplus/ds1">Extras</Link></li>
        </ul>
        <ul id="nh2" className="dropdown-content">
          <li><Link to="/nihonalt/nh2u1/lp">Unit 1</Link></li>
          <li><Link to="/nihonalt/nh2u2/lp">Unit 2</Link></li>
          <li><Link to="/nihonalt/nh2u3/lp">Unit 3</Link></li>
          <li><Link to="/nihonalt/nh2u4/lp">Unit 4</Link></li>
          <li><Link to="/nihonalt/nh2u5/lp">Unit 5</Link></li>
          <li><Link to="/nihonalt/nh2u6/lp">Unit 6</Link></li>
          <li><Link to="/nihonalt/nh2u7/lp">Unit 7</Link></li>
          <li><Link to="/nihonalt/nh2dsplus/ds1">Extras</Link></li>
        </ul>
        <ul id="nh3" className="dropdown-content">
          <li><Link to="/nihonalt/nh3u1/lp">Unit 1</Link></li>
          <li><Link to="/nihonalt/nh3u2/lp">Unit 2</Link></li>
          <li><Link to="/nihonalt/nh3u3/lp">Unit 3</Link></li>
          <li><Link to="/nihonalt/nh3u4/lp">Unit 4</Link></li>
          <li><Link to="/nihonalt/nh3u5/lp">Unit 5</Link></li>
          <li><Link to="/nihonalt/nh3u6/lp">Unit 6</Link></li>
          <li><Link to="/nihonalt/nh3dsplus/ds1">Extras</Link></li>
        </ul>
        <ul id="specneeds" className="dropdown-content">
          <li><Link to="/nihonalt/spc1/food">Picture Cards</Link></li>
          <li><Link to="/nihonalt/spc2/lp">Worksheets</Link></li>
          <li><Link to="/nihonalt/spc3/card">Games</Link></li>
          <li><Link to="/nihonalt/spc4/summer">Seasonal</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navbar