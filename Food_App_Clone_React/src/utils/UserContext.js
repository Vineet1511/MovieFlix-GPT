import React from "react"; 
import{ createContext } from "react";

const UserContext = createContext({
    loggedInUser : "default user",

    loggedOutUser : "Sign Up"
});

export default UserContext;
