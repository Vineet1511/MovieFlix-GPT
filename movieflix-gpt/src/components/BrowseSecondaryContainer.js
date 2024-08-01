import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const BrowseSecondaryContainer = () => {

  const movies = useSelector((store) => store.movies)

  return (

    movies.nowPlayingMovies &&
    (<div className='w-screen'>
        <div className='md:-mt-96 bg-black z-1000'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending on Netflix"} movies={movies.trendingMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList title={"Popular TV Shows on Netflix"} movies={movies.popularTVShows} />
          <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovie} />
        </div>
      </div>)
  )
}

export default BrowseSecondaryContainer