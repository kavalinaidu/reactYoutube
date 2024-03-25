import React, { useEffect,useState } from 'react'
import '../styles/videos.css';

const VideosLogic = () => {

    let [users,setUsers]=useState([])
    useEffect(()=>{
    let fetchData=async()=>{
        let response =await fetch(`http://localhost:4000/videos/`)
        let data=await response.json()
        console.log(data);
        setUsers(data)
    }
    fetchData()
},[])
    return (
        <div className='m'>
            <div className='video_logic'>

                {users.map((data) => (
                    <div className='video'>
                        <div className='thumb'>
                            <img src={data.thumbNail} alt="" />

                        </div>
                        <div className='details'>
                            <div className='g'>
                                <img height="50px" width="50px" src={data.channelIcon} alt="" />
                            </div>
                            <div className='h'>
                                <p>{data.title}</p>
                                <p>{data.channelName} </p>
                                <p>{data.views}M views </p>
                            </div>
                            <div className='b'>
                            {/* <button onClick={() => fun(data.id, data.thumbNail)}>delete</button> */}
                        
                            </div>
                    
                        </div>
                    </div>


                ))
                }
            </div>
        </div>
    );
}

export default VideosLogic
