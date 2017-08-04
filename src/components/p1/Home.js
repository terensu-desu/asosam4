import React, { Component } from 'react'

class Home extends Component {

  render() {
    return (
	   <div className="row z-depth-4">
        <div className="col s12 l6">
        	<h4 className="center">Quick Links</h4>
        	<hr/>
        	<div className="row">
        		<div className="col l6">
        			<h5>Current Schedule</h5>
        			<h5><span>August</span></h5>
        			<p><a href="#!">Monthly Schedule</a></p>
        			<p><a href="#!">Schedule Folder</a></p>
        		</div>
        		<div className="col l6">
        			<h5>Academic Calendar</h5>
        			<h5><span>2017 - 2018</span></h5>
        			<p><a href="#!">Academic calendar</a></p>
        			<p><a href="#!">ALT Handbook</a></p>
        		</div>
        	</div>
        	<div className="row">
        		<div className="col l6">
	        		<h5>Paperwork</h5>
        			<p><a href="#!">Time Sheet and BT forms</a></p>
        			<p><a href="#!">Monthly Report form</a></p>
        			<p><a href="#!">Vacation Request form</a></p>
        		</div>
        		<div className="col l6">
        			<h5>File Upload</h5>
        			<p><a href="#!"><i className="material-icons md-48">file_upload</i></a></p>
        		</div>
        	</div>
        </div>
        <div className="col s12 l6">
        	<h4 className="center">Announcements</h4>
        	<hr/>
        	<div className="row">
        		<div className="col s12">
        			<h5 className="center">Otsukaresama desu!</h5>
        			<p>Announcements for the month would go here. Usually it's just information about our next meeting, presentations, or farewells.</p>
        			<p>In the future, this area will become a space for both articles and announcements. The idea would be to talk about all things Japan and English teaching.</p>
        			<p>For the moment, it'll just be blank until I implement that feature.</p>
                    <p>About Quick Links: because this was a private website when it was being used, I kept quick links to the paperwork that we'd normally need each month. Whenever I get time to, I'll be changing it out for something more useful for a public website.</p>
        		</div>
        	</div>
        </div>
    </div>
    )
  }
}

export default Home