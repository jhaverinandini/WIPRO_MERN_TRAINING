export default function Home() {
  return (
    <div className="home-wrapper">
      {/* HERO SECTION */}
      <div className="home-hero">
        <h1 className="home-title">letsGoGirl 💄</h1>

        <img
          src="https://mir-s3-cdn-cf.behance.net/projects/404/f98a63242247813.Y3JvcCwyODc2LDIyNTAsODExLDA.jpg"
          alt="LetsGoGirl Beauty"
          className="home-image"
        />

        <p className="home-tagline">
          Where color meets confidence.
          <br />
          Own your style ✨
        </p>
      </div>
    </div>
  );
}