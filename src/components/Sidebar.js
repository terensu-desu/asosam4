import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    const headingStyle = {
        fontSize: "1.5rem",
        textAlign: "center"
    }

    const linkStyle = {
        fontSize: "1.2rem",
        textAlign: "center"
    }

    return (
      <header>
      	<button data-activates="slide-out" className="button-collapse btn-large sidebar-btn"><i className="material-icons">keyboard_arrow_right</i></button>
        <ul id="slide-out" className="side-nav">
        	<li>
        		<div id="sidebar-stuff" className="user-view center">
        			<div className="background yellow">
        				<img src="http://i.imgur.com/jGbR1pM.jpg?1" alt="profile-background" />
        			</div>
        			<div className="container-fluid">
        				<div className="row">
        					<div className="col s12">
        						<img src="http://i.imgur.com/HJSqv91.jpg" alt="author" id="authorpic" className="z-depth-4 sidebar-img" />
        					</div>
        				</div>
        			</div>
        			<a href="#!name" className="sidebar-pers name">Terence Mangram</a>
        			<a href="#!email" className="sidebar-pers email">tmangram@gmail.com</a>
        			<a className="sidebar-lang" onClick={ this.props.updateLang }>Switch to { this.props.language ? '日本語' : 'English'}</a>
        		</div>
        	</li>
        	<li className="nav-li active"><Link to="/">About Myself<i className="material-icons right">home</i></Link></li>
        	<li className="nav-li"><Link to="/portfolio">About My Projects<i className="material-icons right">video_library</i></Link></li>
        	<li className="nav-li"><Link to="/contact">Contact Me<i className="material-icons right">contact_mail</i></Link></li>
        	<li className="nav-li"><div className="divider"></div></li>
        	<li><p className="subheader" style={ headingStyle }>Projects</p></li>
        	<li className="nav-li"><Link style={ linkStyle } to="/nihonalt" className="waves-effect">NihonALT</Link></li>
        	<li className="nav-li"><a style={ linkStyle } href="#!" className="waves-effect">BookFront</a></li>
        	<li className="nav-li"><a style={ linkStyle } href="#!" className="waves-effect">Dashboard</a></li>
        </ul>
      </header>
    )
  }
}

export default Sidebar