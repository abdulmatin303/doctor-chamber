import React from 'react';
import './Footer.css'
const Footer = () => {
   
    return (
        <div style={{marginTop:"30px"}}>
            <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
			   {/* first col  */}
  	 		<div className="col-md-6">
			   
  	 		<div className="map">
			    <img className='img-fluid' src="https://i.ibb.co/JrzmHP2/map.png" alt="" />
			   </div>
			   
			</div>

            {/* ------------------ */}


  	 		{/* second col  */}
			   <div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
				    <li><a href="#">All Services</a></li>
  	 				<li><a href="#">Doctor Fee</a></li>
  	 				<li><a href="#">Online Support</a></li>
  	 				<li><a href="#">Make Appointment</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a target='_blank' href="https://www.facebook.com/abdulmatinrafi/"><i class="fab fa-facebook-f"></i></a>
  	 				<a target='_blank' href="https://github.com/amr303"><i class="fab fa-github"></i></a>
  	 				<a target='_blank' href="#"><i class="fab fa-google"></i></a>
  	 				<a target='_blank' href="https://www.linkedin.com/in/abdulmatinrafi/"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
			   {/* -----------  */}
  	 	</div>
  	 </div>
  </footer>
        </div>
    );
};

export default Footer;