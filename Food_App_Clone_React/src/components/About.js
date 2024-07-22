import React from "react";
import UserClass from "./UsersClass";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        //****/
    }

    render(){
        return(
            <div className="flex flex-col items-center min-h-screen bg-gray-100 space-y-4">
            
            <h2 className="text-2xl font-bold mt-10">This is About page using routes...</h2>
            <h2 className="text-lg font-bold text-black-500 ">
                loggedIn User :
                <UserContext.Consumer> 
                    {({loggedInUser}) => (<p className="text-lg font-bold text-red-500">{loggedInUser}</p>) }
                </UserContext.Consumer>
            </h2>
            <UserClass name = {"Vineet Sonkar"} location = {"Ranjhi, Jabalpur, MP"} />
        </div>

        
        )
    }
}

export default About;