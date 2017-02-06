var React = require('react');
var Study = React.createClass({
	render:function(){
		return(
				<div>
					<h1> This Page includes Education list. </h1>
					<p>
						These are my educational qualifications.
						<ul>
							<li>MS-CS US</li>
							<li>M.tech</li>
							<li>B.tech</li>
						</ul>
					</p>
				</div>

			);
	}

});

module.exports = Study;