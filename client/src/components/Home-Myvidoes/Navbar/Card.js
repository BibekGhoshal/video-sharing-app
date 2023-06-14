import React, { useState } from 'react'
import "./Card.css"
import Videoplayer from "../../Upload-Search-Streaming/Videoplayer"

const Card = ({data, videoData})=> {
    const [toggle,setToggle] = useState(false);
    console.log(data);
    console.log(videoData);
  return (
    <>{!toggle?
    <div className='card' onClick={()=>{setToggle(true)}}>
        <img src={data.imgUrl} alt='image not found'/>
        <div className='btn'>
            <img src='https://pixlok.com/wp-content/uploads/2021/05/Video-Play-Icon.jpg' alt='img not'/>
        </div>
        <h3>{data.title}</h3>
    </div>:
    <Videoplayer setToggle={setToggle} data={data} videoData={videoData}/>
    }

    
    </>
  )
}
export default Card