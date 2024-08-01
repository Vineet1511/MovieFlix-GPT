import { useDispatch, useSelector} from "react-redux";
import { API_OPTIONS } from '../utils/constant'
import { useEffect } from "react";
import {addTrailerVideos} from "../utils/moviesSlice"

const useTrailerMovie = (movieId) =>{
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store => store.movies.trailerVideo)

    const getMovieVideos = async () =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId +"/videos?language=en-US", API_OPTIONS);
  
      const json = await data.json();

      const filterVideos = json.results.filter((video) => video.type === "Trailer");

      const trailer = filterVideos.length ? filterVideos[0] : json.results[0];

      // console.log(trailer);
      dispatch(addTrailerVideos(trailer));
    };
  
    useEffect(()=>{
        !trailerVideo && getMovieVideos(); 
    }, [])
}

export default useTrailerMovie;