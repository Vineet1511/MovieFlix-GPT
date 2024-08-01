import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <section className="p-4 md:p-10 bg-gray-400 text-gray-800 flex md:flex-row items-center justify-around text-xs md:text-lg md:gap-3">
        <div className="grid grid-flow-row gap-2 md:gap-3 md:mr-16">
           
            <div className="md:flex items-center h-16 md:h-32 w-16 md:w-32 md:mt-7 md:gap-3 text-white hidden">
                <FaFacebook size={32}/>
                <FaInstagram size={32}/>
                <FaTwitter size={32} />
                <FaYoutube size={32}/>
            </div>
        </div>

        <div className="grid grid-flow-row gap-3 mr-3 md:mr-16 mt-4 md:mt-0">
            <a href="#help-centre">Help Centre</a>
            <a href="#jobs">Jobs</a>
            <a href="#cookie-preferences">Cookie Preferences</a>
        </div>  

        <div className="grid grid-flow-row gap-3 md:mr-16 mr-3 mt-4 md:mt-0">
            <a href="#gift-cards">Gift Cards</a>
            <a href="#terms-use">Terms of Use</a>
            <a href="#corporate-info">Corporate Information</a>
        </div>

        <div className="grid grid-flow-row gap-3 mt-4 mr-3 md:mt-0">
            <a href="#media-centre">Media Centre</a>
            <a href="#privacy">Privacy</a>
            <a href="#contact-us">Contact Us</a>
        </div>
    </section>

    <section className=' bg-gray-400 text-black md:font-bold font-medium text-center p-4 md:text-lg text-sm'>
    <p className="mt-4 md:-mt-2">&copy; 1997-2024 Movieflix by Vineet Sonkar, Inc. with ❤</p>
    </section>
    </>
    
  )
}

export default Footer