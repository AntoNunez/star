import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

function LearnMore(props) {
	const { store, actions } = useContext(Context);
	const getingInfo = props.location.state.iteam;
	console.log(props);
	useEffect(() => {
		actions.getDetail(store.path);
	}, []);
	return (
		<div className="content">
			<header className="head">
				<img
					src="https://www.starwarscali.co/wp-content/uploads/2014/01/darth-vader.png"
					className="image"
					alt="Star War"
				
				/>
				<p className="letters">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus aliquam voluptate quos et,
					molestiae fuga error asperiores nisi quaerat sed similique deserunt magni saepe quis pariatur eaque
					tenetur. Possimus, quibusdam est aliquam id sapiente sunt harum architecto ab fugiat, magni
					consequuntur rerum? 
				</p>
			</header>
			<div className="line" />
			<footer className="redInfo">
				<p>{getingInfo.name}</p>
				<p>
					{getingInfo.subtitel2}
					{getingInfo.text1}
				</p>
				<p>{getingInfo.hair_color}</p>
				<p>{getingInfo.gender}</p>
				<p>
					{getingInfo.subtitel}
					{getingInfo.text2}
				</p>
			</footer>
		</div>
	);
}
LearnMore.propTypes = {
	location: PropTypes.object
};

export default LearnMore;