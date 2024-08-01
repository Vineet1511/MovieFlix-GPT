import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularTVShows } from '../utils/moviesSlice';

const usePopularTVShows = () =>{
    const dispatch = useDispatch();
    const popularTVShows = useSelector(store => store.movies.popularTVShows)

    const getPopularTVShows = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/trending/tv/day?language=en-US", API_OPTIONS);

        const json = await data.json();

        // console.log(json.results);
        dispatch(addPopularTVShows(json.results))
    }

  useEffect(() =>{
   !popularTVShows && getPopularTVShows()
  })
}

export default usePopularTVShows;