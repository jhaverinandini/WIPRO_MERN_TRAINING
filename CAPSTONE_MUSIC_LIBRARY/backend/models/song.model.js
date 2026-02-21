const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    singer: { type: String, required: true },
    musicDirector: String,
    album: String,
    releaseDate: Date,
    isVisible: { type: Boolean, default: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    audio: {
      data: Buffer,
      contentType: String,
    },

    cover: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Song", songSchema);