import React from "react";
import "./firstPage.css";
import Footer from "./footer";
import Welcome from "./welcome";
import { Link } from "react-router-dom";
import SignIn from "./signin";

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
					<hr />
					<h3>Welcome</h3>

					<p>Sign in below</p>
					<hr />

					<Welcome />

					<div className='container'>
						<hr />
						<p>
							Dont have an account! Sign up <Link to='/signup'>here:</Link>
						</p>
						<Link
							to='/signin'
							className='btn btn-secondary'
							onClick={this.onBarberSignIn}
						>
							Sign up
						</Link>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default FirstPage;
