import React from 'react';
import './MainContent.css';

function MainContent() {
	return(
		<main className='container'>
			<h1 className='h1-header'>Fun facts about React</h1>
			<ul className='main-items'>
				<li>Was first released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 100K stars on GitHub</li>
				<li>Is maintained by FaceBook</li>
				<li>Powers thousands of enterprise apps, including mobile apps</li>
			</ul>
		</main>
	);
}

export default MainContent;