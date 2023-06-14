const express = require("express");
const router = express.Router();
const Video = require("../models/VideoSchema.js");

router.delete("/delete/:id", async (req, res) => {
  try {
    const videoId = req.params.id;
    // console.log(videoId);

    const deletedVideo = await Video.findByIdAndDelete(videoId);

    if (!deletedVideo) {
      return res.status(404).json({ message: "Video not found" });
    }

    res.status(200).json({ message: "Video deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting video" });
  }
});

module.exports = router;
