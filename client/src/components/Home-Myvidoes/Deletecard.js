import React from "react";
import "./Deletecard.css";
import axios from "axios";

const Deletecard = ({ setToggle, data1, setVisible, setCard }) => {
  const closePopup = () => {
    setToggle(false);
    setVisible("");
    setCard("");
  };

  const handleDelete = async () => {
    try {
      const videoId = data1._id;
      console.log(videoId);

      await axios.delete(`http://localhost:8080/delete/${videoId}`);
      console.log("Video deleted successfully");

      closePopup();
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  return (
    <>
      <div id="delete-main">
        <div id="photo">
        <video src={data1.videoUrl} style={{width:"100%",height:"130%"}} autoPlay controls/>
        </div>
        <div id="photo-name">
          <h1>{data1.tittle}</h1>
        </div>
        <div id="photo-desc">
          <p>{data1.desc}</p>
        </div>
        <div id="photo-btns">
          <button className="dlt" onClick={handleDelete}>
            Delete
          </button>
          <button className="cncl" onClick={closePopup}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Deletecard;
