import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

function Cards(props) {
	const { store, actions } = useContext(Context);

	//console.log(actions);
	return (
		<div className="card">
			<img
				src="https://www.starwarscali.co/wp-content/uploads/2014/01/darth-vader.png"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-bodys">
				<h5 className="card-titl">{props.name}</h5>
				<p className="card-text">
					{props.subtitel}
					{props.text1}
				</p>
				<p className="card-text">
					{props.subtitel2}
					{props.text2}
				</p>
				<p className="card-text">
					{props.subtitel3}
					{props.text3}
				</p>

				<Link
					className="btn btn-dark"
					to={{
						pathname: props.url,
						state: {
							iteam: props
						}
					}}>
					{" "}
					LEARN
				</Link>
				<button
					type="button"
					className="btn btn-warning"
					onClick={() => {
						console.log("props", props.name);
						actions.likedItem(props.name);
					}}>
					❤
				</button>
			</div>
		</div>
	);
}
Cards.propTypes = {
	name: PropTypes.string,
	subtitel: PropTypes.string,
	subtitel2: PropTypes.string,
	subtitel3: PropTypes.string,
	text1: PropTypes.string,
	text2: PropTypes.string,
	text3: PropTypes.string,
	url: PropTypes.string,
	info: PropTypes.string
};
export default Cards;