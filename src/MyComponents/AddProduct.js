import React from 'react'
import PropTypes from 'prop-types'

function AddProduct(props) {
  return (
   <div>
        <div className="page-content bg-white">
            <div className="section-full mt-3 shop-account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="font-weight-700 m-t0 m-b40">Add Product</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 m-b30">
                            <div className="p-a30 border-1  max-w500 m-auto">
                                <div className="tab-content">
                                    <form id="login" className="tab-pane active">
                                        
                                        <div className="form-group">
                                            <label className="font-weight-700">Full Name *</label>
                                            <input name="dzName" required="" className="form-control sm " placeholder="First Name" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-700">Phone Number*</label>
                                            <input name="dzName" required="" className="form-control" placeholder="Last Name" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-700">E-MAIL *</label>
                                            <input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email" />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-700">PASSWORD *</label>
                                            <input name="dzName" required="" className="form-control " placeholder="Type Password" type="password" />
                                        </div>
                                        <div className="text-left m-t15">
                                            <button className="site-button button-lg radius-no outline outline-2">ADD Product</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
   </div>
  )
}

AddProduct.propTypes = {

    
}

export default AddProduct
