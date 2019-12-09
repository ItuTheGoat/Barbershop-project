import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./signUp";
import FirstPage from "./firstPage";
import SignIn from "./signin";

class App extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={FirstPage} />
					<Route path='/signup' component={SignUp} />
					<Route path='/signin' component={SignIn} />
				</Switch>
			</div>
		);
	}
}

export default App;
