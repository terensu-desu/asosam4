import React, { Component } from 'react'

class Banner extends Component {
  render() {
  	const rText = []
  	rText[0] = "The best AETs.... in the world!"
    rText[1] = "Affecting. Engaging. Teaching."
    rText[2] = "Globalization, in the classroom."
    rText[3] = "For all your English teaching needs."
    rText[4] = "朝飯前!"
    rText[5] = "英語放題。"
    rText[6] = "RPS or RSP, you decide."
    rText[7] = "Supplying Ms. Bakers to your school."
    rText[8] = "Let's speak English!"
		const i = Math.floor(rText.length * Math.random())
    const bannerStyle = {
      color: "white",
      textShadow: "2px 2px 5px black",
      background: "url(https://i.imgur.com/ELpAftG.jpg?1) no-repeat center center"
    }
    return (
      	<div id="nihon-banner" className="container-fluid">
      		<div className="section" style= { bannerStyle }>
      			<div className="row">
      				<h2>Nihon <span>ALT</span></h2>
      				<h3>{ rText[i] }</h3>
      			</div>
      		</div>
        </div>
    )
  }
}

export default Banner