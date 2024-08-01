import React from 'react'
import {infoIcon, playIcon } from '../utils/constant'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-[100vw] h-[150vh] aspect-video pt-[15%] md:px-16 px-4 absolute text-white bg-gradient-to-r from-black z-20'>

      <h1 className='md:text-6xl text-xl font-extrabold'>{title}</h1>

      <p className='hidden md:inline-block py-6 text-md w-[25vw]'>{overview}</p>

      <div className='flex gap-3 my-3 md:my-0'>

        <button className='flex justify-center items-center gap-1 md:p-3 py-1 md:px-9 px-3 font-bold md:text-xl text-md text-black bg-white rounded-lg hover:bg-opacity-80 '>{playIcon} Play</button>

        <button className='justify-center items-center gap-1 p-3 px-9 font-bold text-xl text-white bg-gray-500  rounded-lg hover:bg-opacity-85 hidden md:inline-block'>{infoIcon} More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle