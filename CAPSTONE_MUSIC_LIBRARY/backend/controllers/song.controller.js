const Song = require("../models/song.model");
const Notification = require("../models/notification.model");



//create song
exports.createSong = async (req, res) => {
  try {
    const newSong = new Song({
      name: req.body.name,
      singer: req.body.singer,
      musicDirector: req.body.musicDirector,
      album: req.body.album,
      releaseDate: req.body.releaseDate,
      isVisible: true,
      createdBy: req.user ? req.user.id : null,
    });

    //audio mandatory
    if (req.files && req.files.audio) {
      newSong.audio.data = req.files.audio[0].buffer;
      newSong.audio.contentType = req.files.audio[0].mimetype;
    }

    // coverpage op
    if (req.files && req.files.cover) {
      newSong.cover.data = req.files.cover[0].buffer;
      newSong.cover.contentType = req.files.cover[0].mimetype;
    }

    await newSong.save();

    //notif create
    await Notification.create({
      message: `🎵 New song added: ${newSong.name} by ${newSong.singer}`,
      isRead: false,
    });

    res.status(201).json(newSong);
  } catch (error) {
    res.status(500).json({
      message: "Error creating song",
      error: error.message,
    });
  }
};

//all songs
exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find({ isVisible: true })
      .select("-audio.data -cover.data"); // exclude heavy data

    res.json(songs);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching songs",
      error: error.message,
    });
  }
};

//get single song 
exports.getSongAudio = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);

    if (!song || !song.audio?.data) {
      return res.status(404).json({ message: "Audio not found" });
    }

    res.set("Content-Type", song.audio.contentType);
    res.send(song.audio.data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching audio",
      error: error.message,
    });
  }
};


exports.getSongCover = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);

    if (!song || !song.cover?.data) {
      return res.status(404).json({ message: "Cover not found" });
    }

    res.set("Content-Type", song.cover.contentType);
    res.send(song.cover.data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching cover",
      error: error.message,
    });
  }
};


exports.updateSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }

    // Update text fields
    song.name = req.body.name || song.name;
    song.singer = req.body.singer || song.singer;
    song.musicDirector =
      req.body.musicDirector || song.musicDirector;
    song.album = req.body.album || song.album;
    song.releaseDate =
      req.body.releaseDate || song.releaseDate;

    // Update visibility
    if (typeof req.body.isVisible !== "undefined") {
      song.isVisible = req.body.isVisible;
    }

    // Update audio if new file uploaded
    if (req.files && req.files.audio) {
      song.audio.data = req.files.audio[0].buffer;
      song.audio.contentType =
        req.files.audio[0].mimetype;
    }

    // Update cover if new file uploaded
    if (req.files && req.files.cover) {
      song.cover.data = req.files.cover[0].buffer;
      song.cover.contentType =
        req.files.cover[0].mimetype;
    }

    await song.save();

    res.json(song);
  } catch (error) {
    res.status(500).json({
      message: "Error updating song",
      error: error.message,
    });
  }
};


exports.deleteSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(
      req.params.id
    );

    if (!song) {
      return res.status(404).json({
        message: "Song not found",
      });
    }

    res.json({ message: "Song deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting song",
      error: error.message,
    });
  }
};