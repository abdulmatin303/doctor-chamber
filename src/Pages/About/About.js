import React from 'react';

const About = () => {
    return (
        <div id='about' className='mt-5 mb-5 container'>
            <h3 className='text-center text-primary mb-5'> About Me </h3>
            <div className='row'>
                <div className="col-md-6">
                    <img src="https://i.ibb.co/wgSsCf4/profile.jpg" alt="" />
                </div>
                <div className="col-md-6">
                    <p className='mt-5'>I am Md Abdul Matin Rafi, A tech enthusiast and love to learn and explore web technologies. I have completed my Bsc. degree in computer science and engineering at City University in 2020. I am a junior web developer. Currently, I am exploring React js, Node, MongoDb.</p>
                </div>
            </div>
        </div>
    );
};

export default About;