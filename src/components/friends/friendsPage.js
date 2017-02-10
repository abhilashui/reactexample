var React = require('react');
var Router = require('react-router');

var Friends = React.createClass({
	render:function(){
		return(
				<div>
					<h1> Friends </h1>
					<p>
						I have following friends: 
						<ul>
							<li>Ravi</li>
							<li>Sai</li>
                            <li>Abhi</li>
							
						</ul>
					</p>
				</div>

			);
	}

});

module.exports = Friends;
