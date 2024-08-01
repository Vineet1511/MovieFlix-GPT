import React, { useState } from 'react'
import GptSearchBar from "../components/GptSearchBar"
import GptMovieSuggestion from "../components/GptMovieSuggestion"
import { BGIMAGE } from '../utils/constant'
import { useSelector } from 'react-redux'
import { miyagi } from 'ldrs'
miyagi.register();

const GptSearch = () => {
  const { movieResults } = useSelector(store => store.gpt);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector(store => store.user);
  return (
    <div className='md:w-[100vw] h-[100vh]'>
      <GptSearchBar setLoading={setLoading} />
      {loading ? (
        <div className='flex flex-col justify-center items-center -mt-56 h-screen md:w-[100vw] md:-mt-36'>
          <div>
          <h2 className='font-bold md:text-2xl text-lg text-white mt-4 mb-10 text-center'>Please wait...getting responses ⌛⌛⌛</h2>
          </div>
          <l-miyagi size="80" stroke="3.5" speed="0.9" color="white"></l-miyagi>
        </div>
      ) : movieResults && movieResults.length > 0 ? (
        <GptMovieSuggestion />
      ) : (
        !user && (<div className='flex justify-center items-center md:mt-28 mt-28'>
          <img src={BGIMAGE} className='md:w-80 w-48' alt="bg_loading" />
        </div>)
      )}
    </div>  
  )
}

export default GptSearch