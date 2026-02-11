const MyButton = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 m-1.5 px-3 py-1 rounded-2xl text-white cursor-pointer hover:bg-amber-600 transition-all duration-300"
    >
      {title}
    </button>
  );
};

export default MyButton;