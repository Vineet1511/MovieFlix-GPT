import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
  const {movieNames, movieResults} = useSelector(store => store.gpt)

  console.log(movieNames);
  if(!movieResults) return null;
  return (

        <div className=" bg-black p-6">
          <div className='flex scrollbar-track-transparent overflow-x-auto bg-black' >
            <div className='w-full p-4 m-2 mt-20 md:mt-32 bg-black bg-gradient-to-bl from-red-800 via-purple-400 to-black text-white rounded-2xl font-martelsans'>
              {movieNames.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={movieResults[index]} />)}
            </div>
          </div>
        </div>
  )
}

export default GptMovieSuggestion