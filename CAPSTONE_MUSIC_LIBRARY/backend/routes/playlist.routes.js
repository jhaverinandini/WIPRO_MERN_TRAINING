const express = require("express");
const router = express.Router();

const {
  createPlaylist,
  getPlaylists,
  addSongToPlaylist,
  removeSongFromPlaylist,
  renamePlaylist,
  deletePlaylist,
} = require("../controllers/playlist.controller");

const protect = require("../middleware/auth.middleware");

// we can create
router.post("/", protect, createPlaylist);

// get all
router.get("/", protect, getPlaylists);

// we can add song
router.put("/:id/add", protect, addSongToPlaylist);

// we can remove
router.put("/:playlistId/remove/:songId", protect, removeSongFromPlaylist);

// we can rename
router.put("/:id/rename", protect, renamePlaylist);

// we can del
router.delete("/:id", protect, deletePlaylist);

module.exports = router;