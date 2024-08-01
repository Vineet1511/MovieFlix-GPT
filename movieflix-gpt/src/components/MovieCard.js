import React from 'react'
import { IMG_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {

  if(!posterPath) return null
  return (
    <div className='w-40 md:w-64 md:pr-8'>
      <img src={IMG_URL + posterPath} alt="posterImage" className='w-full h-full object-cover rounded-md cursor-pointer hover:scale-110' />
    </div>
  )
}

export default MovieCard