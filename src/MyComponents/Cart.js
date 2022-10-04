import React from 'react'
import PropTypes from 'prop-types'
import { Close } from '@mui/icons-material'

function Cart(props) {
    return (
        <div className="wrapper">
        <h1>Shopping Cart</h1>
        <div className="project">
          <div className="shop">
            <div className="box">
              <img src="images/product/1.jpg" />
              <div className="content">
                <h3>Women Lipsticks</h3>
                <h4>Price: $40</h4>
                <p className="unit">Quantity: <input name="" value="2" /></p>
                <p className="btn-area"><i aria-hidden="true" className="fa fa-trash"></i> <span className="btn2">Remove</span></p>
              </div>
            </div>
            <div className="box">
              <img src="images/product/2.jpg" />
              <div className="content">
                <h3>Man's Watches</h3>
                <h4>Price: $40</h4>
                <p className="unit">Quantity: <input name="" value="1" /></p>
                <p className="btn-area"><i aria-hidden="true" className="fa fa-trash"></i> <span className="btn2">Remove</span></p>
              </div>
            </div>
            <div className="box">
              <img src="images/product/3.jpg" />
              <div className="content">
                <h3>Samsung Mobile</h3>
                <h4>Price: $250</h4>
                <p className="unit">Quantity: <input name="" value="0" /></p>
                <p className="btn-area"><i aria-hidden="true" className="fa fa-trash"></i> <span className="btn2">Remove</span></p>
              </div>
            </div>
          </div>
          <div className="right-bar">
            <p><span>Subtotal</span> <span>$120</span></p>
            <hr />
            <p><span>Tax (5%)</span> <span>$6</span></p>
            <hr />
            <p><span>Shipping</span> <span>$15</span></p>
            <hr />
            <p><span>Total</span> <span>$141</span></p><a href="#"><i className="fa fa-shopping-cart"></i>Checkout</a>
          </div>
        </div>
      </div>
    )
}

Cart.propTypes = {

}

export default Cart

