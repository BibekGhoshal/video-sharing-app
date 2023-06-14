const express = require("express");
require("../db/conn.js");

const User=require("../models/UserSchema.js");

const Video = require("../models/VideoSchema.js");
const jwtAuth=require("./jwtAuth.js");
const router = express.Router();

router.post('/upload', jwtAuth, async (req, res) => {
    console.log("Upload");
    const userid = req.user._id;
    console.log(userid);
    const { title, desc, imgUrl, videoUrl, category, visibility } = req.body;
    console.log("body", req.body);
    
    // if (!title || !desc || !imgUrl || !videoUrl || !category || !visibility) {
    //   return res.status(400).send("Please provide all details");
    // }
    
    const data = new Video({
      userid: userid,
      title: title,
      desc: desc,
      imgUrl: imgUrl,
      videoUrl: videoUrl,
      category: category,
      visibility: visibility
    });
    
    try {
      const newVideo = await data.save();
      console.log(newVideo);
      res.status(200).send("Video uploaded successfully");
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  });
  


router.get("/home", async (req,res)=>{

try {
    const data = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(data);
  } catch (err) {
    res.send("error")
  }

})


router.get("/myvideos", jwtAuth, async (req,res)=>{
    const userid = req.user._id;
    const data = await Video.find({userid:userid});
   res.status(200).json(data);
})



module.exports = router;

