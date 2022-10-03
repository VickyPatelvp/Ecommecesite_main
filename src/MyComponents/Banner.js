import React from 'react';

function Banner() {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100 h-50" src="images/banner/th1.jpg" alt="First slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100 h-100" src="images/banner/th.jpg" alt="Second slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100 h-100" src="images/banner/th2.jpg" alt="Third slide"/>
      </div>
    </div>
  </div>
  )
}

export default Banner