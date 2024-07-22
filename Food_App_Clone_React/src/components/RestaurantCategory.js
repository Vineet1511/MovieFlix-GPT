import React from "react";
import { useState } from "react";
import MenuList from "./MenuList";

const RestaurantCategory = ({data, showItems, setShowIndex}) =>{
    
    const handleClick = () => {
        setShowIndex()
    }

    return (
        <div 
            className="w-8/12 mx-auto my-3 bg-gray-50 shadow-lg p-4"
            onClick={handleClick}
        >
            
            <div className="flex justify-between cursor-pointer">
                <span className="font-bold">{data?.title}({data?.itemCards.length})</span>
                <span>🔽</span>
            </div>

            {showItems && <MenuList items={data.itemCards} />}
        </div>
    )

}

export default RestaurantCategory;