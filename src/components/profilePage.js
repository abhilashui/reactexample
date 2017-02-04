var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Profile = React.createClass({
	render:function(){
		return(
			<div className="jumbotron">
				<h1> This is Abhilash </h1>
				<p> He is UI Developer
					He works for some ---- company
				</p>
			</div>
			
			
		)
	}

});

module.exports = Profile;



