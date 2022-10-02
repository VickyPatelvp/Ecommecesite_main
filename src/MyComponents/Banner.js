import React from 'react';

function Banner() {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100 h-50" src="images/banner/th1.jpg" alt="First slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 h-100" src="images/banner/th.jpg" alt="Second slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 h-100" src="images/banner/th2.jpg" alt="Third slide"/>
      </div>
    </div>
  </div>
  )
}

export default Banner