import React from 'react'
import PropTypes from 'prop-types'

function Register(props) {
  return (
    <div class="page-content bg-white">
    <div class="section-full content-inner shop-account">
      
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="font-weight-700 m-t0 m-b40">CREATE AN ACCOUNT</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 m-b30">
                    <div class="p-a30 border-1  max-w500 m-auto">
                        <div class="tab-content">
                            <form id="login" class="tab-pane active">
                                <h4 class="font-weight-700">PERSONAL INFORMATION</h4>
                                <p class="font-weight-600">If you have an account with us, please log in.</p>
                                <div class="form-group">
                                    <label class="font-weight-700">First Name *</label>
                                    <input name="dzName" required="" class="form-control" placeholder="First Name" type="text"/>
                                </div>
                                <div class="form-group">
                                    <label class="font-weight-700">Last Name *</label>
                                    <input name="dzName" required="" class="form-control" placeholder="Last Name" type="text"/>
                                </div>
                                <div class="form-group">
                                    <label class="font-weight-700">E-MAIL *</label>
                                    <input name="dzName" required="" class="form-control" placeholder="Your Email Id" type="email"/>
                                </div>
                                <div class="form-group">
                                    <label class="font-weight-700">PASSWORD *</label>
                                    <input name="dzName" required="" class="form-control " placeholder="Type Password" type="password"/>
                                </div>
                                <div class="text-left m-t15">
                                    <button class="site-button button-lg radius-no outline outline-2">CREATE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

Register.propTypes = {

}

export default Register

