import React from "react";

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

					<p>Would you like to sign in as a Barber or Client?</p>
					<hr />
					<button
						className='btn btn-outline-secondary'
						onClick={this.onBarberSignIn}
					>
						Sign in as Barber
					</button>

					<button className='btn btn-outline-secondary text-right'>
						Sign in as Client
					</button>
				</div>
			</div>
		);
	}
}

export default FirstPage;
