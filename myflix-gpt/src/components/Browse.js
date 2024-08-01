import React from 'react'
import Header from "../components/Header"
import Footer from './Footer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import BrowseMainContainer from './BrowseMainContainer'
import BrowseSecondaryContainer from './BrowseSecondaryContainer'
import useTrendingMovies from '../hooks/useTrendingMovies'
import usePopularTVShows from '../hooks/usePopularTVShows'
import useUpcomingMovies from '../hooks/useUpcomingMovie'
import useTopRatedMovie from '../hooks/useTopRatedMovie'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {

  useNowPlayingMovies();
  useTrendingMovies();
  usePopularTVShows();
  useUpcomingMovies();
  useTopRatedMovie();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
 
  return (
    <div className='bg-black w-screen'>
      <Header />
      {
        showGptSearch ? <GptSearch /> :
        (
          <>
            <BrowseMainContainer />
            <BrowseSecondaryContainer />
            <Footer />
          </>
        )
      }
    </div>
  )
}

export default Browse;