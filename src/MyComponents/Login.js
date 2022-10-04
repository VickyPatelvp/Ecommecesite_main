import React from 'react'
import PropTypes from 'prop-types'

function Login(props) {
	return (
		<div className="login-form">
		<form>
		  <h1>Login</h1>
		  <div className="content">
			<div className="input-field">
			  <input type="email" placeholder="Email" autocomplete="nope"/>
			</div>
			<div className="input-field">
			  <input type="password" placeholder="Password" autocomplete="new-password"/>
			</div>
			<a href="#" className="link">Forgot Your Password?</a>
		  </div>
		  <div className="action">
			<button>Register</button>
			<button className='active'>Login</button>
		  </div>
		</form>
	  </div>
	)
}

Login.propTypes = {
	title:PropTypes.string
}

export default Login

