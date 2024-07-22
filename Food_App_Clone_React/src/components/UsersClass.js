import React from "react";
import ShimmerAboutInfo from "./ShimmerAboutInfo";

class UserClass extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            userInfo : null
        }
    }

    async componentDidMount(){
        
        const data = await fetch("https://api.github.com/users/Vineet1511");
        const json = await data.json();

        console.log(json);

        setTimeout(() => {
            this.setState({ userInfo: json });
        }, 1000); 
        } catch (error) {
        console.error("Failed to fetch user data:", error);
    }

    componentDidUpdate(){
        // console.log("component did update");
    }

    componentWillUnmount(){
        // console.log("component will unmount");
    }

    render(){

        const {userInfo} = this.state;

        if(!userInfo) return <ShimmerAboutInfo />

        const {avatar_url, id, name , login, location, bio} = this.state.userInfo;

        return (
            <div className="flex justify-center mt-24 bg-gray-100">

            <div className="w-7/12 h-[210px] border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex">
                <div className="w-3/12">
                    <img src={avatar_url} alt="avatar_url"
                    className="h-full ml-1 object-cover"/>
                </div>
                <div className="w-8/12 ml-6 p-3 text-gray-700 text-base">
                    <h2><b>Id : </b>{id}</h2>
                    <h2><b>Name : </b>{name}</h2>
                    <h2><b>UserId : </b>{login}</h2>
                    <h2><b>Location : </b>{location}</h2>
                    <h2><b>Bio : </b>{bio}</h2>
                </div>
            </div>
            </div>
        )
}
}

export default UserClass;