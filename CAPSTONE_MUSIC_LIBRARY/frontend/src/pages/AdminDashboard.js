import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [songs, setSongs] = useState([]);
  const [activeTab, setActiveTab] = useState("upload");
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    singer: "",
    musicDirector: "",
    album: "",
    releaseDate: "",
  });

  const [audioFile, setAudioFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);

  const token = localStorage.getItem("token");

  //  LOGOUT 
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  // FETCH SONGS 
  const fetchSongs = async () => {
    const res = await fetch("http://localhost:5000/api/songs");
    const data = await res.json();
    setSongs(data);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  // UPLOAD 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) =>
      formData.append(key, form[key])
    );

    if (audioFile) formData.append("audio", audioFile);
    if (coverFile) formData.append("cover", coverFile);

    await fetch("http://localhost:5000/api/songs", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    setMessage("🎵 Song Uploaded Successfully!");
    fetchSongs();
    setActiveTab("songs");
  };

  //DELETE 
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/songs/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    setMessage("❌ Song Deleted");
    fetchSongs();
  };

  // HIDE 
  const handleHide = async (id, isVisible) => {
    await fetch(`http://localhost:5000/api/songs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ isVisible: !isVisible }),
    });

    setMessage(isVisible ? " Song Hidden" : "👁 Song Unhidden");
    fetchSongs();
  };

  const groupedSongs = songs.reduce((acc, song) => {
    const album = song.album || "Others";
    if (!acc[album]) acc[album] = [];
    acc[album].push(song);
    return acc;
  }, {});

  return (
    <div className="wrapper">

      {/* HEADER */}
      <header className="header">
        <div className="logo">🎧 Nandhu's Music World</div>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </header>

      {/* NAV */}
      <div className="nav">
        <button
          className={activeTab === "upload" ? "active" : ""}
          onClick={() => setActiveTab("upload")}
        >
          Upload
        </button>

        <button
          className={activeTab === "songs" ? "active" : ""}
          onClick={() => setActiveTab("songs")}
        >
          Songs
        </button>
      </div>

      {message && <div className="message">{message}</div>}

      {/* UPLOAD FORM */}
      {activeTab === "upload" && (
        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="form">

            <input placeholder="Song Name"
              onChange={(e)=>setForm({...form,name:e.target.value})}
            />

            <input placeholder="Singer"
              onChange={(e)=>setForm({...form,singer:e.target.value})}
            />

            <input placeholder="Music Director"
              onChange={(e)=>setForm({...form,musicDirector:e.target.value})}
            />

            <input placeholder="Album (Telugu, Hindi, English...)"
              onChange={(e)=>setForm({...form,album:e.target.value})}
            />

            <input type="date"
              onChange={(e)=>setForm({...form,releaseDate:e.target.value})}
            />

            {/* AUDIO FILE */}
            <div className="file-input">
              <label className="file-btn">
                🎵 Choose Audio
                <input
                  type="file"
                  accept="audio/*"
                  hidden
                  onChange={(e)=>setAudioFile(e.target.files[0])}
                />
              </label>
              <span className="file-name">
                {audioFile ? audioFile.name : "No audio selected"}
              </span>
            </div>

            {/* COVER FILE */}
            <div className="file-input">
              <label className="file-btn">
                🖼 Choose Cover
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e)=>setCoverFile(e.target.files[0])}
                />
              </label>
              <span className="file-name">
                {coverFile ? coverFile.name : "No cover selected"}
              </span>
            </div>

            <button className="upload-btn">Upload Song</button>

          </form>
        </div>
      )}

      {/* SONGS */}
      {activeTab === "songs" && (
        <div className="songs-container">
          {Object.keys(groupedSongs).map(album => (
            <div key={album}>
              <h2 className="album-title">{album}</h2>

              <div className="grid">
                {groupedSongs[album].map(song => (
                  <div className="card" key={song._id}>

                    <img
                      src={`http://localhost:5000/api/songs/${song._id}/cover`}
                      alt=""
                    />

                    <h3 className="song-name">{song.name}</h3>
                    <p className="singer">{song.singer}</p>

                    <audio
                      controls
                      src={`http://localhost:5000/api/songs/${song._id}/audio`}
                    />

                    <div className="btn-group">
                      <button
                        className="delete"
                        onClick={()=>handleDelete(song._id)}
                      >
                        Delete
                      </button>

                      <button
                        className="hide"
                        onClick={()=>handleHide(song._id, song.isVisible)}
                      >
                        {song.isVisible ? "Hide" : "Unhide"}
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

<style>{`

*{box-sizing:border-box;}
body{margin:0;font-family:Poppins, sans-serif;}

.wrapper{
  min-height:100vh;
  background:linear-gradient(135deg,#0f172a,#1e293b);
  padding-bottom:80px;
}

.header{
  height:70px;
  background:#111827;
  color:white;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 40px;
}

.logo{font-weight:600;}

.logout{
  background:#ef4444;
  border:none;
  padding:8px 16px;
  border-radius:8px;
  color:white;
  cursor:pointer;
}

.nav{
  text-align:center;
  margin:25px 0;
}

.nav button{
  margin:0 10px;
  padding:10px 28px;
  border-radius:30px;
  border:none;
  background:#334155;
  color:white;
  cursor:pointer;
  transition:0.3s;
}

.nav button:hover{background:#475569;}
.active{background:#22c55e !important;}

.message{
  margin:10px auto;
  width:60%;
  text-align:center;
  background:#22c55e;
  padding:10px;
  border-radius:8px;
  color:white;
}

.form-wrapper{display:flex;justify-content:center;}

.form{
  width:850px;
  max-width:95%;
  background:#1f2937;
  padding:35px;
  border-radius:20px;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:20px;
  animation:fadeIn 0.8s ease;
  box-shadow:0 0 40px rgba(34,197,94,0.25);
}

.form input{
  width:100%;
  padding:14px;
  border-radius:10px;
  border:none;
}

/* CUSTOM FILE INPUT */
.file-input{
  display:flex;
  align-items:center;
  gap:15px;
}

.file-btn{
  background:#334155;
  padding:10px 18px;
  border-radius:8px;
  cursor:pointer;
  color:white;
  font-weight:500;
  transition:0.3s;
  box-shadow:
    0 0 8px rgba(34,197,94,0.4),
    0 0 15px rgba(59,130,246,0.2);
}

.file-btn:hover{
  background:#22c55e;
  color:black;
  box-shadow:
    0 0 12px rgba(34,197,94,0.8),
    0 0 20px rgba(59,130,246,0.5);
}

.file-name{
  font-size:13px;
  color:#cbd5e1;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  max-width:200px;
}

.upload-btn{
  grid-column:1/-1;
  height:50px;
  border-radius:10px;
  border:none;
  background:#22c55e;
  color:white;
  font-weight:600;
  cursor:pointer;
  transition:0.3s;
}

.upload-btn:hover{
  background:#16a34a;
  transform:translateY(-2px);
}

/* SONGS */
.songs-container{width:90%;margin:auto;}

.album-title{
  font-size:32px;
  margin-top:50px;
  margin-bottom:25px;
  color:#22c55e;
  font-weight:800;
  text-shadow:0 0 10px rgba(34,197,94,0.6);
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(260px,1fr));
  gap:30px;
}

/* CARD */
.card{
  background:#1e293b;
  border-radius:20px;
  padding:18px;
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  min-height:420px;
  box-shadow:
    0 0 12px rgba(34,197,94,0.4),
    0 0 25px rgba(59,130,246,0.2);
  transition:0.3s ease;
}

.card:hover{
  transform:translateY(-6px);
  box-shadow:
    0 0 20px rgba(34,197,94,0.7),
    0 0 35px rgba(59,130,246,0.4);
}

.card img{
  width:100%;
  height:200px;
  object-fit:cover;
  border-radius:14px;
}

.song-name{
  margin-top:12px;
  margin-bottom:4px;
  font-size:18px;
  font-weight:700;
  color:white;
}

.singer{
  margin:0 0 10px 0;
  font-size:14px;
  color:#cbd5e1;
}

audio{
  width:100%;
  margin-bottom:10px;
}

.btn-group{
  display:flex;
  gap:10px;
}

.delete{
  flex:1;
  background:#ef4444;
  border:none;
  padding:8px;
  border-radius:8px;
  color:white;
}

.hide{
  flex:1;
  background:#f59e0b;
  border:none;
  padding:8px;
  border-radius:8px;
  color:white;
}

@keyframes fadeIn{
  from{opacity:0; transform:translateY(20px);}
  to{opacity:1; transform:translateY(0);}
}

`}</style>
    </div>
  );
};

export default AdminDashboard;
