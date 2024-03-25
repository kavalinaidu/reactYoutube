import React, { useState } from 'react'
import '../styles/videos.css'
import VideosLogic from './videosLogic'

const Videos = () => {
    let[video,setVideo]=useState([])
    let remove=(id ,videos)=>{
        setVideo(video.filter((data)=>id!==data.id))
        alert(`${videos} was deleted`)
        //console.log("deleted");
 
    }
    return (
        <div>
            <VideosLogic videos_data={video} fun={remove} title={"All Videos"} />
            <VideosLogic videos_data={video.filter(x=>x.views>=5
)} fun={remove} title={"All Videos"} />
            <VideosLogic videos_data={video.filter(x=>x.views<5)} fun={remove} title={"All Videos"} />
        </div>
    )
}
export default Videos
