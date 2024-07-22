import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import webLogo from "./webLogo.jpg"

const Header = () => {

const [loginBtn, setLoginBtn] = useState("login User :"); 

const onlineStatus = useOnlineStatus();

const {loggedInUser, loggedOutUser} = useContext(UserContext);

const cartItems = useSelector((store) => store.cart.items)



return (
<div className="flex justify-between h-24 bg-pink-100 shadow-lg mb-4">
    <div className="logo-container">
        <img src= {webLogo} className="w-[105px] ml-7 object-cover" />
    </div>

    <div className="flex">
        <ul className="flex p-6 m-4 items-center text-lg">
            <li className="px-7">Online Status : {onlineStatus === true ? "✅" : "❌"}</li>
            <li className="px-7"><Link to={"/"} className="link">Home</Link></li>
            <li className="px-7"><Link to={"/about"} className="link">About Us</Link></li>
            <li className="px-7"><Link to={"/grocery"} className="link">Grocery</Link></li>
            <li className="px-7"><Link to={"/contact"} className="link">Contact Us</Link></li>
            <li className="relative px-7 mr-10 mb-10">
            <Link to={"/cart"}>
                <span className="absolute ml-8 mt-7 text-xl font-bold text-lime-700">{cartItems.length}</span> 
                <FaShoppingCart className="text-3xl font-bold mt-9" />
            </Link>
        </li>


            <button 
                className="login"
                onClick={() => {
                    loginBtn === "login User :" ?
                    (setLoginBtn("logout") && {loggedOutUser}) : setLoginBtn("login User :")
                }}
                >{loginBtn}
            </button>
            <li className="px-7 font-bold">{loggedInUser}</li>
        </ul>
    </div>
</div>
);
};

export default Header;