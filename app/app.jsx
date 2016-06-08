var React = require('react');
var ReactDOM = require('react-dom');

/*
* when the button is clicked,
* onButtonClick is fired, 
* the variable "name" is set to 
* the input value via the "refs" object.
* We then set the sate of name to equal the variable
 */

let firstName = "Joshua";

ReactDOM.render(
	<h1>React Boilerplate</h1>, 
	document.getElementById('app')
);

