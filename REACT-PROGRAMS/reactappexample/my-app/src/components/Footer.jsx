import MyButton from "./Button";


function Footer() {
  return (
    <footer className="mt-6 px-5 py-4 bg-neutral-900 text-amber-50 flex justify-between items-center">
      <p>© 2026 Royal Spice Restaurant</p>

      <MyButton
        title="Open in Google Maps"
        onClick={() =>
          window.open("https://www.google.com/maps", "_blank")
        }
      />
    </footer>
  );
}

export default Footer;