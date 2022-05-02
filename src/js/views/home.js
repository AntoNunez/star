import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
// Componentes

import Cards from "../component/Cards.jsx";
import LearnMore from "../component/LearnMore.jsx";
// Funciones
function Home() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadingData("people");
		actions.loadingData("planets");
	}, []);

	return (
		<div className="wholeContain">
			<h1>Characters</h1>
			<div className="row firstCard">
				{store.people.map((characters, index) => {
					return (
						<Cards
							key={index}
							name={characters.name}
							text1={characters.eye_color}
							subtitel={"Eye color: "}
							text2={characters.hair_color}
							subtitel2={"Hair color:  "}
							text3={characters.gender}
							subtitel3={"Gender: "}
							url={"/people/" + (index + 1)}
							info={characters.url}
						/>
					);
				})}
			</div>
			<h1>Planets</h1>
			<div className="row seconCard">
				{store.planets.map((planet, index) => {
					return (
						<Cards
							key={index}
							name={planet.name}
							text1={planet.population}
							text2={planet.terrain}
							subtitel={"Terrain: "}
							subtitel2={"Population: "}
							url={"/planets/" + (index + 1)}
							info={planet.url}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Home;
