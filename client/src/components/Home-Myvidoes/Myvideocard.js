import React from "react"
import"./Myvideos.css";

const Myvideocard = ({data,setToggle,setData1,setVisible,setCard,card})=> {
    const handleEvery= ()=>{
    //  console.log(data)
        setData1(data);
        setToggle(true);
        setVisible("ri");
        setCard("1")
    }
  return (
    <>
    <div className={`my-video-card${card}`} onClick={handleEvery}>
        <img src={data.imgUrl} alt='image not found'/>
        <div className={`my-video-btn${card}`}>
        <div className='btn1'>
            <img src='https://pixlok.com/wp-content/uploads/2021/05/Video-Play-Icon.jpg' alt='img not'/>
        </div>  
        </div>
        <h3>{data.title}</h3>
    </div>

    </>
  )
}
export default Myvideocard