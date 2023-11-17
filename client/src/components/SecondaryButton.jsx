function Button({ text }) {
  return (
    <button className="py-2.5 px-10 hidden md:inline rounded-lg text-sm bg-white text-black border-solid border-2 border-black">
      {text}
    </button>
  );
}
export default Button;