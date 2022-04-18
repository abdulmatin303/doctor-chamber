import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div id='blogs' className='mt-5'>
            <h3 className='text-center text-primary mb-5'> My Blogs </h3>
            <div className="container mt-3">
                <div className="first  p-4  shadow">
                    <h4 className='text-center'>Difference between authorization and authentication.</h4>
                    <img className='p-3 mb-3' src="https://i.ibb.co/pKyz8h9/auth.jpg" alt="" />
                    <p><span className='text-success'>Authentication</span>  is a process, it defines that the user is the correct owner of any account. It is the way to identify the user before accessing the application.</p>
                    <p><span className='text-success'>Authorization</span>  is the process of verifying that what they have access in this account. If they do not have access, they will not be allowed to take that action.</p>
                </div>

                <div className="second  p-4 mt-5 shadow">
                    <h4 className='text-center'>Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p>User authentication is one of the most important requirements for the web application. It is essential to authenticate users, and it is too much harder if we have to write all the raw code. We can done it very easily with the help of firebase very efficiently. <br /> Firebase authentication supports authentication using a password, phone numbers, popular provider like Google, Facebook, and Github etc.</p>
                    <br />
                    <p>Alternatives of firebase authentication is JSON Web Token, Auth0 etc.</p>
                </div>

                <div className="third  p-4 mt-5 shadow">
                    <h4 className='text-center'>What other services does firebase provide other than authentication.</h4>
                    <p> Firebase is used for many purposes that can help our apps to develop a qualityful app.</p>
                    <table>
                        <li>Firebase Analytics</li>
                        <li>Firebase Remote Config</li>
                        <li>Firebase Database</li>
                        <li>Firebase Cloud Messaging</li>
                        <li>Firebase Cloud Storage</li>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Blogs;