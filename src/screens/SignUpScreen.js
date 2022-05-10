import React, { useEffect, useRef } from 'react';
import { auth } from '../firebase';
import './SignUpScreen.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


function SignUpScreen() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const register = (e) =>{
    e.preventDefault();

    createUserWithEmailAndPassword(auth,
      emailRef.current.value,
      passwordRef.current.value
      ).then((userCredential) => {
        // Signed in 
        // console.log(userCredential)

        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  }

  const signIn = (e) =>{
    e.preventDefault();

    signInWithEmailAndPassword(auth,
      emailRef.current.value,
      passwordRef.current.value)
      .then((userCredential) => {
        // Signed in 
        console.log("Signed in")
        // ...
      })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage)
  });
  }




  return( <div className='signupScreen'>
    <form>
      <h1>Sign In</h1>
      <h6>If you can't SignUp, use: dummy@gmail.com, dummypass. To LogIn</h6>
      <input ref={emailRef} placeholder='Email' type='email' autofocus></input>
      <input ref={passwordRef} placeholder='Password' type="password"></input>
      <button type="submit" onClick={signIn}>Sign In</button>

      <h4>
        <span className='signupScreen__gray'>New to Netflix? </span>
        <span className='signupScreen__link' onClick={register}>Sign Up now.</span>
        </h4>
    </form>
  </div>);
}

export default SignUpScreen;
