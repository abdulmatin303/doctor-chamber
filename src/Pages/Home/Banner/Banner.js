import React from 'react';

const Banner = () => {
    return (
        <div id='banner'>
            
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.ibb.co/XpGdkkm/img1.png" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h3>Dr Zahid Hossain</h3>
        <h5>Skin and Hair Specialist</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/MsRtWqV/img2.png" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Laser Treatment</h5>
        <p>Lasers are great tools that can help improve various problems of the skin, such as acne scarring, fine lines, wrinkles, sun spots, and even tattoos and loose skin</p>
      </div>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>
    );
};

export default Banner;