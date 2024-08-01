import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trendingMovies : null,
        popularTVShows : null,
        upcomingMovies : null,
        topRatedMovie : null,
        trailerVideo : null
    },
    reducers : {
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },

        addTrendingMovies : (state, action) =>{
            state.trendingMovies = action.payload;
        },

        addPopularTVShows : (state, action) =>{
            state.popularTVShows = action.payload;
        },

        addUpcomingMovies : (state, action) =>{
            state.upcomingMovies = action.payload;
        },

        addTopRatedMovie  : (state, action) =>{
            state.topRatedMovie  = action.payload;
        },

        addTrailerVideos : (state, action) =>{
            state.trailerVideo = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideos, addTrendingMovies, addPopularTVShows, addUpcomingMovies, addTopRatedMovie} = moviesSlice.actions;
export default moviesSlice.reducer;