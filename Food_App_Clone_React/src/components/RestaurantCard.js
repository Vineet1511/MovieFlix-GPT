import React from "react";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    
    const{resData} = props;

    // console.log(resData);

    const{cloudinaryImageId, name, areaName, cuisines, avgRating, costForTwo} = resData?.info;

    return (
        <div 
            className="m-4 p-4 w-[260px] h-[385px] bg-gray-200 rounded-md
             hover:bg-gray-300 hover:w-[300px] hover:h-[400px] hover:shadow-lg hover:shadow-red-300 hover:border border-black">

            <img src={CDN_URL+ cloudinaryImageId} 
                alt="res-logo" 
                className="h-[130px] w-[100%] rounded-md mb-3" 
            />
            <h3 className="font-bold text-xl text-center h-16 py-2 text-pink-600">{name}</h3>
            <h4 className="text-[14px] pb-2 mt-2"><b>AREA :</b> {areaName} </h4>
            <h4 className="text-[14px] pb-2"><b>CUISINES :</b> {cuisines.join(" , ")}</h4>
            <h4 className="text-[14px] pb-2"><b>RATING :</b> {avgRating} stars</h4>
            <h4 className="text-[14px] pb-2"><b>COST :</b> Rs. {costForTwo}</h4>
        </div>
    )
}


export const withPromotedLabel = (RestaurantCard) =>{
    return (props) =>{
        return (
            <div>
                <label className="absolute bg-black text-white text-sm m-1 ml-3 px-2">
                    {props?.resData?.info?.aggregatedDiscountInfoV3?.header}
                </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;