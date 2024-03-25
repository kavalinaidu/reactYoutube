import React from 'react'
import "../styles/catagories.css"
import { PiCaretRight } from "react-icons/pi";


const Catagories = () => {
    let links=[
        {category:"All"},
        {category:"Live"},
        {category:"Music"},
        {category:"Comedy"},
        {category:"Sports"},
        {category:"Games"},
        {category:"Vlogs"},
        {category:"TV Shows"},
        {category:"Bollywood"},
        {category:"News"},
        {category:"Movies"},
        {category:"Lectures"},
        {category:"kids"},
        {category:"Shows"},
        {category:<PiCaretRight />}

    ]
return (
    <div className='categories'>
        <div className='categories_links'>
            {links.map((i)=>(
                <a href="">{i.category}</a>
            ))}
        </div>

    </div>
)
}

export default Catagories
