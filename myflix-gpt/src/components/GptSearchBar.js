import React, { useRef } from 'react'
import { API_OPTIONS} from "../utils/constant"
import { useDispatch, useSelector } from 'react-redux'
import languageConstant from '../utils/languageConstant'
import { addGptMovieResults } from '../utils/gptSlice'

const GptSearchBar = ({setLoading}) => {
    const dispatch = useDispatch();
    const langSelect = useSelector(store => store.config.lang);
    const inputSearchText = useRef(null);

    const searchMovieFromTMDB = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => {
        setLoading(true);
        const prompt = `Strictly follow instruction - act as a movie recommendation system and give only 5 Indian movies/cinema names based on ${inputSearchText.current.value} with comma separated and don't mention or add other descriptions, only movie names in one line expression like this: Border, Gadar, Mother India, Sholey, Amar Akbar Anthony`;
    
        const fetch = require('node-fetch');

        const url = 'https://open-ai34.p.rapidapi.com/v1/chat/completions';
        const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_OPENAI_KEY,
            'x-rapidapi-host': 'open-ai34.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'Qwen/Qwen2-72B-Instruct',
            messages: [
            {
                content: prompt,
                role: 'user'
            }
            ],
            max_new_tokens: 1,
            temperature: 0.2,
            top_p: 0.7,
            top_k: 50,
            repetition_penalty: 1,
            stop: [
            '<|im_start|>',
            '<|im_end|>'
            ]
        })
        };
        try {
            const response = await fetch(url, options);
            const gptResults = await response.json();
    
            if (gptResults && gptResults.choices && gptResults.choices.length > 0) {
                const gptResultMovies = gptResults.choices[0]?.message?.content.split(",").map(movie => movie.trim());
                console.log(gptResultMovies);
    
                const promiseArray = gptResultMovies.map((movie) => searchMovieFromTMDB(movie));
                const tmdbResults = await Promise.all(promiseArray);
    
                console.log(tmdbResults);
    
                dispatch(addGptMovieResults({ movieNames: gptResultMovies, movieResults: tmdbResults }));
            }
        } catch (error) {
            console.error(error);
        }finally{
            setLoading(false);
        }
    }
    

    return (
        
        (<div className='relative w-screen pt-48 bg-black flex justify-center items-center'>
            <form className='items-center border-2 border-none bg-black' onSubmit={(e) => e.preventDefault()}>

                {/* <button className='col-span-1 md:ml-4 ml-3 cursor-pointer text-white bg-transparent rounded-l-full' onClick={handleGptSearchClick}>{SEARCH_ICON}</button> */}
                <div className='flex md:gap-10 gap-5'>
                <input
                    type="text"
                    className='md:w-[70vh] md:p-3 p-1  focus:border-transparent focus:outline-none placeholder:text-xs md:placeholder:text-lg text-black rounded-md'
                    placeholder={languageConstant[langSelect].gptSearchPlaceholder}
                    ref={inputSearchText}
                />

                <button className=' cursor-pointer text-white md:text-xl text-md font-bold bg-red-600 md:px-9 px-5 rounded-lg' onClick={handleGptSearchClick}>Search</button>
                </div>

            </form>
        </div>)
    )
}

export default GptSearchBar

