import React from "react";
import "./firstPage.css";
import selfie from "../Images/selfie.png";
import barber from "../Images/barber.png";
import Footer from "./footer";
import Welcome from "./welcome";

class FirstPage extends React.Component {
	onBarberSignIn = () => {};

	render() {
		return (
			<div>
				<div className='jumbotron'>
					<div className='container'>
						<h1>Barber Shop</h1>
					</div>
				</div>
				<div className='container'>
					<h3>Welcome</h3>

					<p>Sign in below</p>
					<hr />

					<Welcome />

					<div className='container'>
						<hr />
						<p>Dont have an account! Sign up here:</p>
						<button className='btn btn-secondary' onClick={this.onBarberSignIn}>
							Sign up
						</button>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default FirstPage;
