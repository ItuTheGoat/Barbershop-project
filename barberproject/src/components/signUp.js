import React, { Component } from "react";

// I think we will need state here.
class SignUp extends Component {
	render() {
		return (
			<div className='container'>
				<form>
					<div className='form-group row justify-content-md-center'>
						<label htmlFor='userEmail'>Email: </label>
						<input type='email' id='userEmail' className='form-control' />
					</div>
					<div className='form-group'>
						<label htmlFor='userPassword'>Password: </label>
						<input type='password' id='userPassword' className='form-control' />
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
