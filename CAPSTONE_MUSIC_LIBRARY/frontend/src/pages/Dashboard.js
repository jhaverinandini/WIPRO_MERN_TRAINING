import { useEffect, useRef, useState } from "react";
import "./Dashboard.css";

const API = "http://localhost:5000/api";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const audioRef = useRef(null);

  //state

  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [search, setSearch] = useState("");

  const [currentIndex, setCurrentIndex] = useState(null);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);

  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [newPlaylist, setNewPlaylist] = useState("");

  const [notifications, setNotifications] = useState([]);
  const [popupMessage, setPopupMessage] = useState("");

  const [selectedSong, setSelectedSong] = useState(null);

  //fetch

  const fetchSongs = async () => {
    const res = await fetch(`${API}/songs`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setSongs(data.songs || data);
    setFilteredSongs(data.songs || data);
  };

  const fetchPlaylists = async () => {
    const res = await fetch(`${API}/playlists`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setPlaylists(data.playlists || data);
  };

  
  const fetchNotifications = async () => {
    const res = await fetch(`${API}/notifications`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    setNotifications(data);

    if (!data.length) return;

    const latest = data[0];

    // Get already shown notifications from localStorage
    const shown =
      JSON.parse(localStorage.getItem("shownNotifications")) || [];

    // Show popup only if not already shown
    if (!shown.includes(latest._id)) {
      setPopupMessage(`🔔 ${latest.message}`);

      localStorage.setItem(
        "shownNotifications",
        JSON.stringify([...shown, latest._id])
      );
    }
  };

  useEffect(() => {
    fetchSongs();
    fetchPlaylists();
    fetchNotifications();

    const interval = setInterval(fetchNotifications, 5000);
    return () => clearInterval(interval);
  }, []);

  

  useEffect(() => {
    if (!search) {
      setFilteredSongs(songs);
      return;
    }

    const filtered = songs.filter((song) => {
      return (
        song.name?.toLowerCase().includes(search.toLowerCase()) ||
        song.singer?.toLowerCase().includes(search.toLowerCase()) ||
        song.album?.toLowerCase().includes(search.toLowerCase()) ||
        song.musicDirector?.toLowerCase().includes(search.toLowerCase()) ||
        song.director?.toLowerCase().includes(search.toLowerCase())
      );
    });

    setFilteredSongs(filtered);
  }, [search, songs]);

  //popup

  useEffect(() => {
    if (popupMessage) {
      const timer = setTimeout(() => {
        setPopupMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [popupMessage]);

  

  const playSong = (index) => {
    setCurrentIndex(index);
    setSelectedSong(filteredSongs[index]);
  };

  const stopSong = () => {
    audioRef.current?.pause();
    setCurrentIndex(null);
  };

  const nextSong = () => {
    if (!filteredSongs.length) return;

    let next =
      shuffle
        ? Math.floor(Math.random() * filteredSongs.length)
        : currentIndex + 1 >= filteredSongs.length
        ? 0
        : currentIndex + 1;

    setCurrentIndex(next);
    setSelectedSong(filteredSongs[next]);
  };

  const prevSong = () => {
    if (!filteredSongs.length) return;

    let prev =
      currentIndex - 1 < 0
        ? filteredSongs.length - 1
        : currentIndex - 1;

    setCurrentIndex(prev);
    setSelectedSong(filteredSongs[prev]);
  };

  const handleEnded = () => {
    repeat ? audioRef.current?.play() : nextSong();
  };

  //playlist crud

  const createPlaylist = async () => {
    if (!newPlaylist.trim()) return;

    await fetch(`${API}/playlists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: newPlaylist }),
    });

    setPopupMessage(" Playlist created");
    setNewPlaylist("");
    fetchPlaylists();
  };

  const renamePlaylist = async (id) => {
    const newName = prompt("Enter new playlist name:");
    if (!newName) return;

    await fetch(`${API}/playlists/${id}/rename`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: newName }),
    });

    setPopupMessage("✏️ Playlist renamed");
    fetchPlaylists();
  };

  const deletePlaylist = async (id) => {
    await fetch(`${API}/playlists/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    setPopupMessage("❌ Playlist deleted");
    setSelectedPlaylist(null);
    setFilteredSongs(songs);
    fetchPlaylists();
  };

  const openPlaylist = (playlist) => {
    setSelectedPlaylist(playlist);

    if (!playlist.songs) return;

    const playlistIds = playlist.songs.map((s) =>
      typeof s === "object" ? s._id : s
    );

    const inside = songs.filter((song) =>
      playlistIds.includes(song._id)
    );

    setFilteredSongs(inside);
  };

  const addToPlaylist = async (playlistId, songId) => {
    if (!playlistId) return;

    await fetch(`${API}/playlists/${playlistId}/add`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ songId }),
    });

    setPopupMessage(" Song added");
    fetchPlaylists();
  };

  const removeFromPlaylist = async (playlistId, songId) => {
    await fetch(`${API}/playlists/${playlistId}/remove/${songId}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
    });

    setPopupMessage("❌ Song removed");
    fetchPlaylists();
  };

  //ui

  return (
    <div className="container">
      <h1 className="title">🎵 Music Library</h1>

      {popupMessage && (
        <div className="notification">{popupMessage}</div>
      )}

      {/* SEARCH */}
      <input
        className="input"
        placeholder="Search by name, singer, album, director..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* PLAYLIST CREATE */}
      <div className="playlist-create">
        <input
          className="input"
          placeholder="New Playlist"
          value={newPlaylist}
          onChange={(e) => setNewPlaylist(e.target.value)}
        />
        <button onClick={createPlaylist} className="green-btn">
          Create
        </button>
      </div>

      <div className="playlist-row">
        {playlists.map((pl) => (
          <div key={pl._id} className="playlist-item">
            <button onClick={() => openPlaylist(pl)} className="playlist-btn">
              🎶 {pl.name} ({pl.songs?.length || 0})
            </button>
            <button onClick={() => renamePlaylist(pl._id)}>✏️</button>
            <button onClick={() => deletePlaylist(pl._id)}>❌</button>
          </div>
        ))}

        <button
          className="playlist-btn"
          onClick={() => {
            setSelectedPlaylist(null);
            setFilteredSongs(songs);
          }}
        >
          🎼 All Songs
        </button>
      </div>

      {/* SONG DETAILS VIEW */}
      {selectedSong && (
        <div className="details-card">
          <button
            className="back-btn"
            onClick={() => setSelectedSong(null)}
          >
            ⬅ Back
          </button>

          <img
            src={`${API}/songs/${selectedSong._id}/cover`}
            className="details-cover"
            alt=""
          />

          <h2>{selectedSong.name}</h2>
          <p>Singer: {selectedSong.singer}</p>
          <p>Music Director: {selectedSong.musicDirector}</p>
          <p>Album: {selectedSong.album}</p>
          <p>Release Date: {selectedSong.releaseDate}</p>
         
        </div>
      )}

      {/* SONG GRID */}
      <div className="grid">
        {filteredSongs.map((song, index) => (
          <div key={song._id} className="card">
            <img
              src={`${API}/songs/${song._id}/cover`}
              alt=""
              className="cover"
              onClick={() => setSelectedSong(song)}
            />

            <h3>{song.name}</h3>
            <p>{song.singer}</p>

            {currentIndex !== index ? (
              <button
                className="green-btn"
                onClick={() => playSong(index)}
              >
                ▶ Play
              </button>
            ) : (
              <button className="red-btn" onClick={stopSong}>
                ⏹ Stop
              </button>
            )}

            {currentIndex === index && (
              <div className="player">
                <audio
                  ref={audioRef}
                  src={`${API}/songs/${song._id}/audio`}
                  autoPlay
                  onEnded={handleEnded}
                />
                <div className="controls">
                  <button onClick={prevSong}>⏮</button>
                  <button onClick={nextSong}>⏭</button>
                  <button onClick={() => setShuffle(!shuffle)}>🔀</button>
                  <button onClick={() => setRepeat(!repeat)}>🔁</button>
                </div>

                {selectedPlaylist && (
                  <button
                    onClick={() =>
                      removeFromPlaylist(selectedPlaylist._id, song._id)
                    }
                    className="red-btn"
                  >
                    Remove from Playlist
                  </button>
                )}
              </div>
            )}

            <select
              className="dropdown"
              onChange={(e) =>
                addToPlaylist(e.target.value, song._id)
              }
            >
              <option value="">Add to Playlist</option>
              {playlists.map((pl) => (
                <option key={pl._id} value={pl._id}>
                  {pl.name}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;