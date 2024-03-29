import React from 'react'
import PropTypes from 'prop-types'

function Register(props) {
  return (
    <div className="login-form">
    <form>
      <h1>Register</h1>
      <div className="content">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="input-field">
              <input type="text" placeholder="Firstname" autocomplete="nope" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="input-field">
              <input type="text" placeholder="Lastname" autocomplete="nope" />
            </div>  
          </div>
        </div>
        <div className="input-field">
          <input type="email" placeholder="Email" autocomplete="nope" />
        </div>
        <div className="input-field">
          <input type="phone" placeholder="Phone" autocomplete="nope" />
        </div>
        <div className="input-field">
          <input type="password" placeholder="Password" autocomplete="new-password" />
        </div>
        <a to="/login" className="link">Forgot Your Password?</a>
      </div>
      <div className="action">
        <button className='active'>Register</button>
        <button > Log in</button>
      </div>
    </form>
  </div>
  )
}

Register.propTypes = {
title : PropTypes.string
}

export default Register

