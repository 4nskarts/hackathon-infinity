function Button({ text }) {
  return (
    <button className="py-2.5 text-sm  hidden md:inline px-10 rounded-lg bg-black text-white">
      {text}
    </button>
  );
}
export default Button;
