import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovie } from '../utils/moviesSlice';

const useTopRatedMovie = () =>{
    const dispatch = useDispatch();
    const topRatedMovie = useSelector(store => store.movies.topRatedMovie)

    const getTopRatedMovie = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1", API_OPTIONS);

        const json = await data.json();

        // console.log(json.results);
        dispatch(addTopRatedMovie(json.results))
    }

  useEffect(() =>{
    !topRatedMovie && getTopRatedMovie()
  })
}

export default useTopRatedMovie;