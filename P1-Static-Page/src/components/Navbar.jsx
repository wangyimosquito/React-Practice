import React from 'react';
import './Navbar.css'
function Navbar() {
	return(
		<header className='header-bar'>
			<nav className='nav'>
				<img src="../src/assets/react.svg" className='nav-logo'/>
				<div className='reactFacts'>ReactFacts</div>
				<div className='courseProject'>React Course Project1</div>
			</nav>
		</header>
	);
}

export default Navbar;