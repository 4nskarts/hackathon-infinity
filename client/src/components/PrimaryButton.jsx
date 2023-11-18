function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className="py-2.5 font-poppins text-xs border-2 border-yellow hidden sm:inline px-10 rounded-lg bg-yellow text-black">
      {text}
    </button>
  );
}
export default Button;
