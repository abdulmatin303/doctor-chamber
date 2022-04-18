import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Consultation from '../Consultation/Consultation';
import Feedback from '../Feedback/Feedback';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Consultation></Consultation>
            <Blogs></Blogs>
            <Feedback></Feedback>
            <About></About>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;