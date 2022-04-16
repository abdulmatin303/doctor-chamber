import React from 'react';

const Banner = () => {
    return (
        <div>
            
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.massgeneral.org/assets/MGH/images/dermatology/laser-dermpage.png" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h3>Dr Zahid Hossain</h3>
        <h5>Skin and Hair Specialist</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/2730/7792/files/laser_skin_1_2048x2048.jpeg?v=1564524824" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Laser Treatment</h5>
        <p>Lasers are great tools that can help improve various problems of the skin, such as acne scarring, fine lines, wrinkles, sun spots, and even tattoos and loose skin</p>
      </div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </div>
    );
};

export default Banner;