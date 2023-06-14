import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar/Navbar'
import './Myvideos.css'
import Myvideocard from './Myvideocard'
import Deletecard from './Deletecard'

function Myvideos () {
  const [data, setData] = useState([])
  const [toggle, setToggle] = useState(false)
  const [data1, setData1] = useState([])
  const [visible, setVisible] = useState('')
  const [card, setCard] = useState('')

  
  useEffect(() => {
    const newToken = localStorage.getItem('mytoken');
    console.log("my videos", newToken);
    console.log(localStorage.getItem("mytoken"));
    
    axios.get("https://videosharingapp.onrender.com/myvideos", {
      headers: {
        Authorization: newToken
      }
    })
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      window.alert("Videos are unavailable to load");
      console.log(err);
    });
  }, []);
  

  return (
    <>
      <Navbar />
      <div id='myvideo-main'>
        <div id={`myvideo-left${visible}`}>
          {data.map(data => {
            return (
              <Myvideocard
                data={data}
                setToggle={setToggle}
                setData1={setData1}
                setVisible={setVisible}
                setCard={setCard}
                card={card}
              />
            )
          })}
        </div>

        <div id='myvideo-right'>
          {toggle && (
            <Deletecard
              data1={data1}
              setToggle={setToggle}
              setVisible={setVisible}
              setCard={setCard}
            />
          )}
        </div>
      </div>


    </>
  )
}

export default Myvideos
