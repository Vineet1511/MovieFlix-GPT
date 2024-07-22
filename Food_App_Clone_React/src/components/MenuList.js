import React from 'react';
import { useState } from 'react'
import { CDN_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const MenuList = ({items}) => {

  const dispatch = useDispatch();

  const [showPopUp, setShowPopUp] = useState(false);

  const handleAddCartItems = (event, item) => {
    event.stopPropagation();

    setShowPopUp(true);

    dispatch(addItem(item));

    setTimeout(() => {
        setShowPopUp(false);
    }, 2000)
}  

  return (
    <div>
        {items.map( (item) => (
            <div key={item?.card?.info?.id} className="m-1 p-2 border-gray-300 border-b-2 text-left flex justify-between">
                
                <div className="m-2 p-1 w-9/12 font-semibold text-lg">

                    <div>
                        <p>{item?.card?.info?.itemAttribute?.vegClassifier === 'NONVEG' ? 
                            (<span className="text-red-600 text-lg">[●]</span>) : 
                            (<span className="text-green-600 text-lg">[●]</span>)}
                        </p>
                        <span>{item?.card?.info?.name}</span>
                        <p className='font-semibold text-sm'>{`₹`}{(item?.card?.info?.price) ? (item?.card?.info?.price/100) : (item?.card?.info?.defaultPrice/100)}</p>
                    </div>

                    <p className='text-sm opacity-45 mt-2'>{item?.card?.info?.description}</p>

                </div>

                <div className='p-4 w-3/12 flex items-center justify-end'>
                        
                    <div className='absolute'>
                    {showPopUp && (
                    <div className="fixed w-2/12 mx-auto h-3 mt-20 top-0 left-0 right-0 bg-green-500 p-4 flex justify- items-center">
                    <span className="text-lg font-bold text-white">Item added successfully!</span>
        </div>
      )}
                        <button 
                            className='py-1 px-8 mx-5 mt-32 rounded-md shadow-md text-center text-green-600 bg-white font-bold' 
                            onClick={(e) => handleAddCartItems(e, item)}>
                            ADD
                        </button>
                    </div>

                    <img src={CDN_URL + item?.card?.info?.imageId} alt="menu_img" className='w-36 h-36 rounded-2xl' />
                </div>
            </div>
        ))}
    
    </div>
  )
}

export default MenuList;
