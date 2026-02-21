const Playlist = require("../models/playlist.model");
const Song = require("../models/song.model");

//can create playlist
exports.createPlaylist = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Playlist name required" });
    }

    const playlist = await Playlist.create({
      name,
      user: req.user.id,
      songs: [],
    });

    res.status(201).json(playlist);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//here we get userplaylist
exports.getPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find({
      user: req.user.id,
    }).populate("songs");

    res.json(playlists);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};



//add song
exports.addSongToPlaylist = async (req, res) => {
  try {
    const { songId } = req.body;

    const playlist = await Playlist.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" });
    }

    if (!playlist.songs.includes(songId)) {
      playlist.songs.push(songId);
      await playlist.save();
    }

    res.json({ message: "Song added to playlist" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//remove song

exports.removeSongFromPlaylist = async (req, res) => {
  try {
    const { playlistId, songId } = req.params;

    const playlist = await Playlist.findOne({
      _id: playlistId,
      user: req.user.id,
    });

    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" });
    }

    playlist.songs = playlist.songs.filter(
      (song) => song.toString() !== songId
    );

    await playlist.save();

    res.json({ message: "Song removed from playlist" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//rename

exports.renamePlaylist = async (req, res) => {
  try {
    const { name } = req.body;

    const playlist = await Playlist.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      { name },
      { new: true }
    );

    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" });
    }

    res.json(playlist);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

 // here del playlist acton we can perform

exports.deletePlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" });
    }

    await playlist.deleteOne();

    res.json({ message: "Playlist deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};