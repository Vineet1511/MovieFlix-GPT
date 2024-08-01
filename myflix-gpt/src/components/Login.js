import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from '../utils/validate'
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constant';
import { BGIMGLOGIN } from '../utils/constant';

const Login = () => {

    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
       
       const message = checkValidate(email.current.value, password.current.value);

       setErrorMessage(message);

       if(message) return;

       if(!isSignInForm){
        //sign up page
        createUserWithEmailAndPassword(
            auth, 
            email.current.value, 
            password.current.value
        )
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            updateProfile(user, {
                displayName: name.current.value, 
                photoURL: USER_AVATAR
                //un-update state
              }).then(() => {
                //update to store using dispatch
                const {uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                    addUser(
                        {uid : uid, 
                        email : email, 
                        displayName :displayName, 
                        photoURL: photoURL
                    }));
              }).catch((error) => {
                setErrorMessage(error.message)
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
        });
       }else{
        signInWithEmailAndPassword(auth, 
            email.current.value, 
            password.current.value
        )
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });  
       }
    }

  return (
    <div>
        <Header />

        <div className='absolute'>
            <img src={BGIMGLOGIN} alt="login-bcg-img" 
            className='h-screen w-screen object-cover'/>
        </div>

        <form onSubmit={(e) =>{e.preventDefault();}} 
            className='absolute w-9/12  md:w-3/12 p-8  md:p-12 my-36 bg-black left-0 right-0 mx-auto text-white rounded-xl bg-opacity-80'>

            <h1 className='font-bold text-2xl md:text-3xl mb-3'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm && (
                <input 
                    ref={name}
                    type="text" 
                    placeholder='Full Name'
                    className='p-2 my-4 w-full bg-gray-700 placeholder:text-white opacity-80'
                />)}

                <input 
                    ref={email}
                    type="text" 
                    placeholder='Email Address'
                    className='p-2 my-4 w-full bg-gray-700 placeholder:text-white opacity-80'
                />

            <input 
                ref={password}
                type="text" 
                placeholder='Password'
                className='p-2 my-4 w-full bg-gray-700 placeholder:text-white opacity-80'
            />

            <p className=' text-red-300 font-bold'>{errorMessage}</p>

            <button className='p-3 my-6 bg-red-700 w-full rounded-md text-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

            <p className='py-3 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign In now"}</p>
        </form>
    </div>
  )
}

export default Login;