import React, { useEffect, useRef } from 'react'
import '../styles/addvideo.css'

const AddVideos = () => {
    let thumbnail=useRef()
    let channelIcon=useRef()
    let title=useRef()
    let channelName=useRef()
    let view=useRef()

    let submitData=(e)=>{
        e.preventDefault()
        let video={
            thumbNail:thumbnail.current.value,
            channelIcon:channelIcon.current.value
        }
        fetch('http://localhost:5000/videos/',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(video)
        })
        
    }
return (
    <div className='add'>
        <div className='form'>
        <form  className='for'>
            <label htmlFor="">ThumbNail:</label>
            <input type="text" placeholder='Enter url' /> <br /> <br />
            <label htmlFor="">ChannelIcon:</label>
            <input type="text" placeholder='Enter channelicon url' /> <br /> <br />
            <label htmlFor="">Title:</label>
            <input type="text" placeholder='Enter Title' />  <br /> <br />
            <label htmlFor="">ChannelName:</label>
            <input type="text" placeholder='Enter ChannelName' /> <br /> <br />
            <label htmlFor="">Views:</label>
            <input type="text" placeholder='Enter views' /> <br /> <br />
            <label htmlFor="">Id:</label>
            <input type="Number" placeholder='Enter the id '/> <br /> <br />
            <button>Submit</button>
        </form>
        </div>

    
    </div>
)
}

export default AddVideos
