import React from 'react';
import Navmenu from '../MyComponents/Navmenu';
import Products from '../MyComponents/Products';
import Footer from '../MyComponents/Footer';

function Home() {
  return (
    <>
    <div className='header'>
      <Navmenu/>
    </div>
    <div className='conainer row'>
        <div className='col-12'>
          <Products />
        </div>
        <div className='col-12' id='footer' style={{ textAlign:"center" }} >
          <Footer/>
        </div>
    </div>
    </>
  )
}

export default Home
