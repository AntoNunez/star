import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import {Footer} from "./component/footer";
import LearnMore from "./component/LearnMore.jsx"

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/planets/:id" component={LearnMore} />
					<Route exact path="/people/:id" component={LearnMore} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
