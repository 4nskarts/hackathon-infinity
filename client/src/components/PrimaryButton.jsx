function Button({ text }) {
  return (
    <button className="py-2.5 text-sm border-2 border-yellow hidden sm:inline px-10 rounded-lg bg-yellow text-black">
      {text}
    </button>
  );
}
export default Button;
