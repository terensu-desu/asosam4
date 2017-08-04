import React from 'react';

class Contact extends React.Component {
  render() {
  	const cTitle = this.props.langData[3].contact.title
  	const cLine1 = this.props.langData[3].contact.line1
  	const cLine2 = this.props.langData[3].contact.line2
  	const cLine3 = this.props.langData[3].contact.line3
  	
    return (
      <div className="container-fluid" id="contact">
      	<div className="section">
      		<div className="row center">
      			<div className="col s12">
	      			<h2 className="header-title">Contact</h2>
	      			<hr className="small-hr"/>
      			</div>
      		</div>
      		<div className="row">
      			<div className="col s12">
      				<div className="col s12 l8">
      					<div className="card z-depth-4">
	      					<form className="card-content">
		      					<div className="row">
							        <div className="input-field col s6">
							          <i className="fa fa-user-o fa-2x prefix" aria-hidden="true"></i>
							          <input id="icon_prefix" type="text" className="validate" />
							          <label for="icon_prefix">Name</label>
							        </div>
							        <div className="input-field col s6">
							          <i className="fa fa-envelope-o fa-2x prefix"></i>
							          <input id="icon_envelope" type="email" className="validate" />
							          <label for="icon_envelope">Email Address</label>
							        </div>
							    </div>
							    <div className="row">
							        <div className="input-field col s6">
							          <i className="fa fa-building-o fa-2x prefix" aria-hidden="true"></i>
							          <input id="icon_company" type="text" className="validate" />
							          <label for="icon_company">Company Name</label>
							        </div>
							        <div className="input-field col s6">
							          <i className="fa fa-phone fa-2x prefix"></i>
							          <input id="icon_telephone" type="tel" className="validate" />
							          <label for="icon_telephone">Phone Number</label>
							        </div>
							    </div>
							    <div className="row">
							        <div className="input-field col s12">
							          <i className="fa fa-commenting-o fa-2x prefix" aria-hidden="true"></i>
							          <textarea id="textarea1" type="text" className="validate materialize-textarea"></textarea>
							          <label for="textarea1">Message</label>
							        </div>
							    </div>
							    <a className="waves-effect orange waves-light btn"><i className="fa fa-paper-plane-o fa-2x"></i> Send</a>
						    </form>
					    </div>
      				</div>
      				<div className="col s12 l4">
      					<div className="card z-depth-4">
      						<div className="card-content">
      							<h5 className="card-title center">{ cTitle }</h5>
      							<p>{ cLine1 }</p>
      							<br/>
      							<p>{ cLine2 }</p>
      							<br/>
      							<p>{ cLine3 }</p>
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
    )
  }
}

export default Contact