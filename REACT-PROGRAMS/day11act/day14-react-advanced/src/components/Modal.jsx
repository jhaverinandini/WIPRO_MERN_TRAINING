import ReactDOM from "react-dom";

export default function Modal({ close }) {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-box">
        <p>This modal is rendered using React Portal</p>
        <button onClick={close}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
