$ = jQuery = require('jquery');

var React = require('react');
var Home = require('./components/homePage');
var Profile = require('./components/profilePage');


React.render(<Home />, document.getElementById('app'));
React.render(<Profile/>, document.getElementById('app1'));