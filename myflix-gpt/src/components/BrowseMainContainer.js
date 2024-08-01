import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const BrowseMainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return; //early return

    const playMovie = movies[3];
    // console.log(playMovie);

    const {original_title, overview, id} = playMovie;
    // console.log(playMovie);

  return (
    <div className='md:pt-0 pt-36 bg-black'>
        <VideoTitle title={original_title} overview={overview}  />
        <VideoBackground movieId={id} />
    </div>
  )
}

export default BrowseMainContainer