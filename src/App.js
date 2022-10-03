import './App.css';
import React, { Component }  from 'react';
import Home from './pages/Home';
import Login from './MyComponents/Login';
import Register from './MyComponents/Register';
import Cart from './MyComponents/Cart';
import Adminpanel from './MyComponents/Adminpanel';


function App() {
  return (
    <>
    <div className='row'>
      <Home/>
    </div>
   
<div className='row'>

  </div>
  <div className='row'>
    <Cart></Cart>
  </div>
  <div>
  <button className="scroltop fa fa-chevron-up" ></button>
    </div>
    <Adminpanel></Adminpanel>
    </>
  
  );
}

export default App;
