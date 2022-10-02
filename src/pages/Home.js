import React from 'react';
import Navmenu from '../MyComponents/Navmenu';
import Sidebar from '../MyComponents/Sidebar';
import Products from '../MyComponents/Products';
import Footer from '../MyComponents/Footer';

function Home() {
  return (
    <>
    <div className='header'>
      <Navmenu/>
    </div>
    {/* <div className='container'>
      <Banner/>
    </div> */}
    <div className='conainer row'>
        <div className='col-3 bg-sb'>
            <Sidebar  />
        </div>
        <div className='col-8'>
          <Products />
        </div>
        <div className='' id='footer' style={{ textAlign:"center" }} >
          <Footer/>
        </div>
    </div>
    </>
  )
}

export default Home
