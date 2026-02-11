export default function Contact() {
  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>
      <h2>Contact Us 📞</h2>

      <p>
        We’d love to hear from you! Whether you have questions about our
        products, need support, or just want to say hi — reach out to us.
      </p>

      <p><b>Email:</b> support@glowbeautystore.com</p>
      <p><b>Phone:</b> +91 98765 43210</p>
      <p><b>Address:</b> Electronic City, Bengaluru, India</p>

      <h3 style={{ marginTop: "30px" }}>📍 Find Us Here</h3>

      {/* GOOGLE MAP */}
      <iframe
        title="Google Map"
        src="https://www.google.com/maps?q=Electronic+City+Bangalore&output=embed"
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}