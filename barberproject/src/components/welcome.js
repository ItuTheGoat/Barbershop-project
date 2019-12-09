import React from "react";
import selfie from "../Images/selfie.png";
import barber from "../Images/barber.png";

// Functional component because at this point, there is no state that needs to be managed by this comp
const Welcome = () => {
	return (
		<div class='row'>
			<div class='col-sm-6'>
				<div class='card card-contents card-style'>
					<div class='card-body'>
						<h5 class='card-title'>I am a Client</h5>
						<img src={selfie} class='img-fluid card-image' alt='selfie'></img>
						<br />
						<a href='/' class='btn btn-outline-secondary card-buttons'>
							Sign in as Client
						</a>
					</div>
				</div>
			</div>
			<div class='col-sm-6'>
				<div class='card card-contents card-style'>
					<div class='card-body'>
						<h5 class='card-title'>I am a Barber</h5>
						<img src={barber} class='img-fluid card-image' alt='barber'></img>
						<br />
						<a href='/' class='btn btn-outline-secondary'>
							Sign in as Barber
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
