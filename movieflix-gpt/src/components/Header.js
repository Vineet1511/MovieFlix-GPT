import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import webLogo from '../utils/WEB_LOGO.png';
import { USER_AVATAR } from '../utils/constant';
import { SEARCH_ICON, SUPPORTED_LANGUAGES } from '../utils/constant';
import {toggleGptSearchView} from "../utils/gptSlice"
import { changeLanguage } from '../utils/configSlice';



const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
      
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
        //User is sign in
        const {uid, email, displayName, photoURL } = user;
        // console.log(user.email, user.displayName);
        dispatch(
             addUser(
                {uid : uid, 
                email : email, 
                displayName :displayName, 
                photoURL: photoURL
            }));
            navigate("/browse");
    } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
    }
    });

    return unsubscribe;
}, [])

  const handleGptSearchClick = () =>{
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange =(e) =>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute w-[100vw] px-11 py-2 bg-gradient-to-b from-black to-transparent z-30 flex flex-col md:flex-row justify-between items-center'>
        <div className='relative md:w-64 w-52'>
            <img src={webLogo} alt="netflix_logo"/>
        </div>

        {user && (
          <div className='flex items-center pt-7 md:pt-0 z-10 md:justify-center md:gap-8 gap-11 md:p-3 md:mr-4 ipad:mt-8'>

            {showGptSearch && (
              <select 
              className='md:py-2 py-1 px-2 md:w-32 bg-gray-800 text-white text-sm md:text-md ipad:ml-3'         
              onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} 
                  value={lang.identifier} 
                  className=' bg-slate-700 text-white '>
                  {lang.name}
                </option>
              ))} 
            </select>)}

            <button 
              className='py-1 md:px-8 px-4 text-nowrap flex text-white bg-purple-600 font-semibold md:text-md text-sm rounded-lg gap-3 justify-between items-center md:py-2 ' 
              onClick={handleGptSearchClick}>
              {showGptSearch ? "Home Page" : <>GPT Search {SEARCH_ICON}</>}
              </button>

            <img 
              className='hidden md:inline-block h-10 w-15 rounded-full cursor-pointer text-white ipad-mini:hidden'
              src={USER_AVATAR} alt="userIcon" />

            <button 
              className='text-white font-bold cursor-pointer text-nowrap text-[15px] md:text-[18px]'
              onClick={handleSignOut}
              >Sign out
            </button>
        </div>)
        }
    </div>
  )
}

export default Header