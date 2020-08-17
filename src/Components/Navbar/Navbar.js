import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<nav className="nav-wrapper red darken-3">
			<div className="container">
				<a href="/" className="brand-logo">React Projects</a>
				<ul className="right">
					<li><Link to="/todo">Todo</Link></li>
					<li><Link to="/metronome">Metronome</Link></li>
					<li><Link to="/meme">Meme Generator</Link></li>
				</ul>
			</div>
		</nav>
	)
}

export default withRouter(Navbar)