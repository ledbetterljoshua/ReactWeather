let React = require('react');
let {Link, IndexLink} = require('react-router');


let Nav = (props) => {
	return (
		<div>
			<IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
			<Link to="/about" activeClassName="active">About</Link>
			<Link to="/examples" activeClassName="active">Examples</Link>
		</div>
	);
}

module.exports = Nav;