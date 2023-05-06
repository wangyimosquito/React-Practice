import React from "react";
import "../style.css"

function Hero() {
	return (
		<section className="main-body">
			<img src="../src/assets/photo-grid.png" className="photo-grid"/>
			<h1 className="h1">Online Experience</h1>
			<p className="hero-p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
		</section>
	);
}

export default Hero;