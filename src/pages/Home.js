import React from 'react';
import Navmenu from '../MyComponents/Navmenu';
import Products from '../MyComponents/Products';
import Footer from '../MyComponents/Footer';
import Cart from '../MyComponents/Cart';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from '../MyComponents/Login';

function Home() {
  return (
    <>
   
    <div className='conainer row'>
     
      
    </div>

    <Router>
      <div>
      <div className='header'>
      <Navmenu/>
     </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route
        path="/"
        element={<Products />}
      />
           <Route
        path="/cart"
        element={<Cart />}
      />
        <Route
        path="/login"
        element={<Login title='name'/>}
      />
        </Routes>
        <div className='col-12' id='footer' style={{ textAlign:"center" }} >
          <Footer/>
        </div>
      </div>
    </Router>


    </>
  )
}

export default Home
