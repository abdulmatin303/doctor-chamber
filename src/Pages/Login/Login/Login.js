import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');

    
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );

      

    const handleSubmit = (event) =>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        // console.log(email,password);

        signInWithEmailAndPassword(email, password)

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await sendPasswordResetEmail(email)
    }

    if(user){
        navigate(from, { replace: true });
    }

    let errorElement;
    if (error) {
        
        errorElement =   <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        
      }

    

    return (
        <div className='container w-50 mx-auto'>
        <h2 className='text-primary text-center mt-2'>Please Login</h2>
        <Form onSubmit={handleSubmit}>
            
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required /> </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary w-50 mx-auto d-block" type="submit">Login</Button>
        </Form>

        {errorElement}

        <p className='mt-2'>New Patient? <Link to='/register' className='text-primary text-decoration-none'>Register</Link></p>

        <p className='mt-2'>Forget password? <button className='text-primary text-decoration-none' onClick={resetPassword}>Forget password</button></p>

        <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;