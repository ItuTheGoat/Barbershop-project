import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstPage from "./firstPage";

class App extends React.Component {
	render() {
		return (
			<div>
				<FirstPage />
				<Switch>
					<Route exact path='/' component={FirstPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
