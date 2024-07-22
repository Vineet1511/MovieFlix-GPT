import React from 'react';
import { useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  const handleCategoryClick = (index) => {
    if(showIndex === index){
      setShowIndex(null);
    }else{
      setShowIndex(index)
    }
  }

  if (resInfo === null) return < Shimmer /> 

  const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
  
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (cat) => cat.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log(categories);

  return (
    <div className='text-center'>
        <h1 className='font-extrabold mt-8 text-xl'>{name}</h1>
        <p className='mt-3 font-semibold'>
            {cuisines.join(" , ")} - {costForTwoMessage}
        </p>

        {categories.map((category, index) => (
        <RestaurantCategory 
          key={index} data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex = {() => handleCategoryClick(index)}
        />
      ))}
    </div>
  )
}

export default RestaurantMenu;