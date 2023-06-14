import React, { useEffect, useState } from "react";
import Card from "./Navbar/Card";
import "./Content.css"
import axios from "axios";

const Content = () => {
    const [banner, setBanner] = useState("");
    const [name, setName] = useState("View all");
    const [toggle,setToggle] = useState(false)
    const [data, setData] = useState([]);
    const [videoData, setVideoData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/home")
            .then((res) => {
                setData(res.data)
                setVideoData(res.data)
            }).catch((err) => {
                window.alert("Vidoes are unavailable to load")
            })

    }, []);

    const handleViewButton = () => {
        if (banner) {
            setBanner("")
        } else {
            setBanner("class")
        }
        if (name == "View all") {
            setName("View less")
        } else {
            setName("View all")
        }
    }
   
    return (<>
        <div className={`banner${banner}`}>

            {!toggle?
            <img src={data.slice(0,1).map((data)=>{return data.imgUrl})} onClick={()=>setToggle(true)}/>:
            <video src={data.slice(0,1).map((data)=>{return data.videoUrl})} onClick={()=>setToggle(false)} controls autoPlay/>
            }
            <div className="details">
                <h1>{data.slice(0,1).map((data)=>{return data.tittle})}</h1>
                <div className="span">
                    <span>{data.slice(0,1).map((data)=>{return data.createdAt})}</span>
                    <span>Last 1 hour</span>
                    <span>186k Views</span>
                </div>
            </div>
        </div>   

        <div className="video-content">
            <div className="btns">
                <div className="recent">
                    Recent
                </div>
                <div className="view-all" onClick={handleViewButton}>
                    {name}
                </div>
            </div>
            <div className="videos">            
                {!banner? data.slice(0,4).map((data) => {
                       return <Card data={data} videoData={videoData}/>
                    }):
                    data.map((data) => {
                       return <Card data={data} videoData={videoData}/>
                    })
                }
            </div>
        </div>
    </>
    )
}
export default Content;