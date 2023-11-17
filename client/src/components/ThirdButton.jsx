function Button({ text, onClick }) {
  return (
    <button onClick={onClick}className="py-2.5 px-10 rounded-lg text-sm bg-white text-black border-solid border-2 border-black">
      {text}
    </button>
  );
}
export default Button;
