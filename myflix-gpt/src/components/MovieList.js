import React from 'react'
import MovieCard from "../components/MovieCard"

const MovieList = ({title, movies}) => {
    // console.log(movies);
  return (
    <div className='md:px-12 px-5 md:py-3 py-3 text-white relative z-50'>
        <h1 className='md:text-3xl text-[18px] md:py-4 py-2 font-bold'>{title}</h1>
        <div className='flex scrollbar-track-transparent scrollbar overflow-x-auto'>
           <div className='flex mt-5 gap-5'>
              {movies?.map((movie) => 
                <MovieCard key={movie.id} posterPath={movie?.poster_path} 
              />)}
           </div>
        </div>
    </div>
  )
}

export default MovieList