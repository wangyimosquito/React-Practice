import React from "react";
import "../style.css";

function Card(props) {
	let badgeTex;
	if(props.item.openSpots === 0){
		badgeTex = "SOLD OUT";
	} else if(props.item.location === "Online"){
		badgeTex = "ONLINE";
	}
	
	console.log(props.item.coverImg)

	return(
		<div className="card-container">
			{badgeTex && <div className="card-badge">{badgeTex}</div>}
			<img src={`../src/assets/${props.item.coverImg}`} className="person-photo"/>
			<div className="score-container">
				<img src="../src/assets/star.png" alt="Image" className="star-img"/>
				<span>{props.item.stats.rating}</span>
				<span className="gray">({props.item.stats.reviewCount}) </span>
				<span className="gray">{props.item.country} </span>
			</div>
			<p className="card-title">{props.item.title}</p>
			<p className="card-price"><span className="bold">From $ {props.item.price}</span> / person</p>
		</div>
	);
}

export default Card;