var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jquery = require('jquery')


var App = React.createClass({
	render: function(){
		return (
				<div>
					<Header/>
					<div className="continer-fluid">
						<RouteHandler/>
					</div>
				</div>
			)
	}
})


module.exports = App;