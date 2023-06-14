import React from 'react'
import "./Videoplayer.css"

function Videoplayer({setToggle,data, videoData}) {
  return (
    <div className='main'>
        <div className='close-icon'>
            <img onClick={()=>{setToggle(false)}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/High-contrast-dialog-close.svg/768px-High-contrast-dialog-close.svg.png" alt='Not found'/>
        </div>
        <div className='left'>
            <video src={data.videoUrl} style={{width:"100%",height:"85%"}} controls autoPlay/>
            <div className='info'>
                <h1>{data.tittle}</h1>
                <h4>{data.desc}</h4>
            </div>
        </div>
        <div className='right'>
                {videoData.slice(0,3).map((data1) => {
                   return <div className='releted-content'>
                    <img src={data1.imgUrl} style={{width:"100%",height:"100%"}} alt='Not found'/>
                    <h3>{data1.tittle}</h3>
                    </div>
                })}
        </div>
    </div>
  )
}

export default Videoplayer
