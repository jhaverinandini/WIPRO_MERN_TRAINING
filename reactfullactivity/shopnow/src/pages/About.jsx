export default function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <p className="about-tag">How it started</p>
        <h1>Our Dream is Global Shopping Transformation</h1>
        <p>
          ShopNow was created with a simple vision — to make fashion accessible,
          affordable, and enjoyable for everyone. From everyday wear to special
          occasions, we bring curated styles for Women, Men, and Kids.
        </p>

        <div className="about-stats">
          <div>
            <h3>3.5+</h3>
            <p>Years Experience</p>
          </div>
          <div>
            <h3>23</h3>
            <p>Brands</p>
          </div>
          <div>
            <h3>100K+</h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="About us"
        />
      </div>
    </div>
  );
}