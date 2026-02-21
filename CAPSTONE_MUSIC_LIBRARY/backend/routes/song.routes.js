const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload.middleware");
const songController = require("../controllers/song.controller");
const protect = require("../middleware/auth.middleware");

// song create
router.post(
  "/",
  protect,
  upload.fields([
    { name: "audio", maxCount: 1 },
    { name: "cover", maxCount: 1 },
  ]),
  songController.createSong
);

// get all songs
router.get("/", songController.getAllSongs);

// get audio
router.get("/:id/audio", songController.getSongAudio);

// get cover
router.get("/:id/cover", songController.getSongCover);

// udate
router.put("/:id", protect, songController.updateSong);

// delete
router.delete("/:id", protect, songController.deleteSong);

module.exports = router;