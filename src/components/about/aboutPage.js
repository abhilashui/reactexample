var React = require('react');
var About = React.createClass({
	render:function(){
		return(
				<div>
					<h1> About Me </h1>
					<p>
						I know following technologies: 
						<ul>
							<li>Html</li>
							<li>Css</li>
							<li>Java Script </li>
							<li> JQuery</li>
							<li>AngularJs</li>
							<li>NodeJs</li>
							<li>ReactJs</li>
						</ul>
					</p>
				</div>

			);
	}

});

module.exports = About;
