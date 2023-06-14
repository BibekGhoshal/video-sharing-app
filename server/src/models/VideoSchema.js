const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",

    },
    title: {
      type: String,
      // required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: true,
    },
    visibility: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", VideoSchema);
module.exports = Video;
