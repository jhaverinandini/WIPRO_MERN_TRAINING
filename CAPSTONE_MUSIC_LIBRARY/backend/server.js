const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/auth.routes");
const songRoutes = require("./routes/song.routes");
const playlistRoutes = require("./routes/playlist.routes");
const notificationRoutes = require("./routes/notification.routes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/playlists", playlistRoutes);
app.use("/api/notifications", notificationRoutes);

app.get("/", (req, res) => {
  res.send("🎵 Music Library API Running");
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
}

module.exports = app;