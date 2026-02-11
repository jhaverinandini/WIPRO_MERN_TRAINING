export default function About() {
  return (
    <div className="about-wrapper">
      <h1 className="about-title">About Us</h1>

      <p className="about-text">
        We are a cosmetics store offering high-quality lipliners, lipsticks, and
        glosses. At <strong>letsGoGirl 💄</strong>, we believe beauty should be
        fun, fearless, and affordable for everyone.
      </p>

      <p className="about-text">
        Our products are designed for everyday confidence — whether you’re going
        to college, work, a party, or just feeling yourself 💕.
      </p>

      {/* VALUES */}
      <div className="about-cards">
        <div className="about-card">
          <h3>💄 Quality First</h3>
          <p>
            We focus on quality shades, smooth textures, and long-lasting wear
            that you’ll love.
          </p>
        </div>

        <div className="about-card">
          <h3>✨ Made for All</h3>
          <p>
            Beauty has no rules. Our collections are made for every mood, tone,
            and style.
          </p>
        </div>

        <div className="about-card">
          <h3>💖 With Love</h3>
          <p>
            Built with passion, creativity, and sparkle by nandhu — just for
            you!
          </p>
        </div>
      </div>
    </div>
  );
}