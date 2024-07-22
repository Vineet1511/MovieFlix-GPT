import React, { useEffect, useState, useContext } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {

    const[listOfRestaurants, setListOfRestaurants] = useState([]);
    const[filteredRestaurant, setFilteredRestaurant] = useState([]);

    const[searchText, setSearchText] = useState("")

    const RestaurantWithPromoted = withPromotedLabel(RestaurantCard);

    const {loggedInUser, setUserName} = useContext(UserContext)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2012282&lng=80.00121109999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);     
    };

    const onlineStatus = useOnlineStatus();
    
    if(onlineStatus === false) return <h1>Looks like you're offline...Check your Internet Connection!!!</h1>
    
    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">

          <div className="flex h-20 justify-center items-center px-8">
            <div className="search">
                <input type="text" 
                className="border border-solid border-black m-3 px-3 py-1 h-7 w-64 rounded-md focus:ring-2 ring-pink-500" 
                placeholder="search menu or restaurants..."
                value= {searchText} 
                onChange={
                    (e) => {
                        setSearchText(e.target.value);
                    }
                } />

                <button 
                    className="bg-green-200 px-3 py-1 rounded-md"
                    onClick={() => {

                        const filteredRestaurant = listOfRestaurants.filter(res => 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
                            res.info.cuisines.some(cuisine => 
                              cuisine.toLowerCase().includes(searchText.toLowerCase())
                            )
                          );

                                   
                            setFilteredRestaurant(filteredRestaurant);
                    }  
                }>Search
                </button>
            </div>
            <div className="filter">
                <button className="m-3 ml-10 px-3 py-1 bg-gray-100 rounded-md"
                    onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfRestaurants(filteredList)
                }}
                >Top Rated Restaurants</button>
            </div>

            <div>
                <label>User Name : </label>
                <input type="text" className="border border-black p-1 rounded-md" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
            </div>
          </div>

            <div className="flex flex-wrap justify-evenly w-[100%]">

                {filteredRestaurant.map((restaurant) => (
                    
                    <Link to={"/restaurant/" + restaurant.info.id} 
                        key={restaurant.info.id}
                    >

                    {
                        restaurant.info.isOpen ? (<RestaurantWithPromoted resData={restaurant} />) 
                        : (<RestaurantCard resData={restaurant} />)
                    } 
            
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;