import React from 'react'
import "../styles/navbar.css"
import { NavLink } from 'react-router-dom'
// import { PiUserCircle } from "react-icons/pi";


const Navbar = () => {
    function handleMouseOver(e) {
        e.target.text = "settings"
    }
    return (
        <div className='navbar'>
            <div className="logo">
                <img width="80" src="/Images1/youtube.png" alt="" />
            </div>
            <div className="search">
                <input type="text" placeholder='Search' />
                <div className='se'>
                    <img width="20px" height="20px" src="/Images1/search.png" alt="" />
                </div>
                <div className='d'>
                    <img src="/Images1/voice_icon.png" width="20px" height="22px" alt="" />
                </div>
            </div>
            <div className="options">
                <div>
                   {/* <button id="b" onMouseOver={handleMouseOver}><SlOptionsVertical size="1.2rem" color='black' /></button> */}
                    <button> <NavLink className='n' to="/add">Add Video</NavLink></button>
                    
                </div>
                <div>
                    <button > Sign in</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar
